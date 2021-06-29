import { Injectable } from '@nestjs/common';
import { DocumentType } from '@typegoose/typegoose';
import { ChatUserstate, Client } from 'tmi.js';
import { Adventurer } from '../adventurer/adventurer.schema';
import { AdventurerService } from '../adventurer/adventurer.service';
import { Battle } from '../domain/battle';
import { IEvent } from '../domain/events';

const tmiConfig = {
  options: { debug: true },
  connection: {
    reconnect: true,
    secure: true,
  },
  channels: ['typescriptteatime'],
};

const timeTillAttackInSeconds = 30;
const DMs = ['maceisgrace', 'hcustovic1', 'typescriptteatime'];

@Injectable()
export class ChatbotService {
  private readonly tmiClient: Client;
  private readonly adventurers: AdventurerService;
  private battle?: Battle;
  private lastLogCount = 0;
  private watchBattleLogs?: NodeJS.Timeout;
  private joinedAdventurers: DocumentType<Adventurer>[] = [];

  constructor(adventurers: AdventurerService) {
    this.adventurers = adventurers;
    this.tmiClient = new Client(tmiConfig);
    if (process.env.DONT_CONNECT_TO_TWITCH !== 'true') this.tmiClient.connect();
    this.tmiClient.on('message', this.handleMessage.bind(this));
  }

  private async handleMessage(
    channel: string,
    tags: ChatUserstate,
    message: string,
    self: boolean,
  ) {
    if (self) return; // Ignore message by chatbot itself

    const username = tags.username;
    if (!username) return;
    const msg = message.toLowerCase();

    if (DMs.includes(username) && msg === '!ambush') {
      if (this.battle) return;
      this.battle = new Battle(timeTillAttackInSeconds);
      this.watchBattleLogs = setInterval(() => this.pollBattleLogs(), 10);
    }
    if (!this.battle) return;

    if (msg.includes('!join')) {
      await this.joinParty(username, this.battle);
    }
    if (msg.includes('!attack')) {
      this.battle.attack(username);
    }
    if (DMs.includes(username) && msg.includes('!debug-flee')) {
      this.endBattle();
    }
  }

  private async pollBattleLogs() {
    const hasNewEvents = this.battle!.log.length > this.lastLogCount;
    if (hasNewEvents) {
      for (let i = this.lastLogCount; i < this.battle!.log.length; i++) {
        this.renderBattleEvent(this.battle!.log[i]);
      }
      this.lastLogCount = this.battle!.log.length;
    }
    const battleEnded = this.battle?.log.find(
      (e) => e.type === 'monster killed' || e.type === 'party killed',
    );
    if (battleEnded) {
      await this.endBattle();
    }
  }
  private async saveAdventurerToDatabase() {
    for (const adventurer of this.joinedAdventurers) {
      adventurer.experience += 100;
      adventurer.level = 1 + Math.floor(adventurer.experience / 300);
      await adventurer.save();
    }
  }

  private async endBattle() {
    clearInterval(this.watchBattleLogs!);
    this.battle?.endBattle();
    this.watchBattleLogs = undefined;
    this.battle = undefined;
    this.lastLogCount = 0;

    await this.saveAdventurerToDatabase();
    this.joinedAdventurers = [];
  }

  private renderBattleEvent(event: IEvent) {
    switch (event.type) {
      case 'adventurer killed':
        return say(`⚰️⚰️⚰️ Oh no! @${event.name} has been killed.`);
      case 'attack':
        if (event.isMonster)
          return say(`🔥 😈 ${event.attacker} attacks @${event.target}.`);
        return say(`🗡️ @${event.attacker} attacks 😈 ${event.target}.`);
      case 'damage received':
        return say(
          `${event.target} received ${event.damage} damage. ${event.hpLeft} ❤️ left.`,
        );
      case 'join':
        say(`⚔️ @${event.member} joined the battle alongside you.`);
        return say(
          `@${this.battle!.adventurerNames.join(
            ', @',
          )} stand united in battle.`,
        );
      case 'monster appeared':
        return say(
          `⚔️ An ambush! You're party is in a ${event.monster.area}. A wild 😈 ${event.monster.name} appeared. Be prepared! The attack starts in ${timeTillAttackInSeconds} seconds. ❤️: ${event.monster.hp}`,
        );
      case 'monster killed':
        return say(
          `🏆🏆🏆🎉🏅 VICTORY! 😈 ${
            event.monster
          } has been struck down. @${this.battle!.adventurerNames.join(
            ', @',
          )} each earned 100 EXP.`,
        );
      case 'party killed':
        return say(
          `🔥🔥🔥🔥🔥 ⚰️⚰️⚰️⚰️ Defeat! The battle is lost. The world must rely on another group of adventurers. 😈 ${event.monster} lived happily ever after.`,
        );
    }
  }
  private async joinParty(username: string, battle: Battle) {
    const adventurer = await this.adventurers.findOneOrCreate(
      username,
      battle.log,
    );
    battle.join(adventurer);
    this.joinedAdventurers.push(adventurer);
  }
}

const say = (text: string) => {
  console.log(text);
};