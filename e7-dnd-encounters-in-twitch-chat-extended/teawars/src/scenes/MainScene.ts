import { GUI } from "dat.gui";
import { random, range } from "lodash";
import { Scene } from "phaser";
import * as io from "socket.io-client";
import { randomMonsterCfg } from "../../assets/images/monsters/monsters";
import { Adventurer } from "../components/Adventurer";
import { BackgroundImage } from "../components/BackgroundImage";
import { Monster } from "../components/Monster";
import { Ambushed, IEvent } from "../events/Event";
import { translations } from "../localizations";
import { Color } from "../styles/Color";
import { TextConfig } from "../styles/Text";
import { Scenes } from "./Scenes";

const cfg = {
    dev: {
        enabled: false,
        adventurers: 1,
    },
    fadeIn: 200,
    title: {
        relY: 0.4,
    },
    playButton: {
        relY: 0.62,
    },
    copyright: {
        relY: 0.95,
    },
    version: {
        relY: 0.93,
    },
    jumpAttackDuration: 1000,
};

type Maybe<T> = T | undefined;

export class MainScene extends Scene {
    private client!: SocketIOClient.Socket;
    private battleLog!: IEvent[];
    private party!: Adventurer[];
    private monster?: Monster;
    private gui!: GUI;

    public constructor() {
        super({
            key: Scenes.Main,
        });
    }

    public create(): void {
        new BackgroundImage(this, `bg${random(1, 10)}`);
        this.battleLog = [];
        this.party = [];

        this.gui = new GUI();
        this.gui.hide();
        this.maybeEnableDevMode();

        this.client = io("http://localhost:3000");

        this.client.on("init", (data: IEvent[]) => {
            this.battleLog.push(...data);
        });
        this.client.on("append log", (event: IEvent) => {
            console.log(JSON.stringify(event));
            this.battleLog.push(event);

            if (event.type === "monster appeared") {
                this.addMonster(event.monster);
            }
            if (event.type === "join") {
                this.addAdventurer(event.member, event.hp, event.maxHp);
            }

            if (event.type === "attack" && !event.isMonster && this.monster) {
                const adventurer = this.getAdventurer(event.attacker);
                adventurer?.attack(this.monster, cfg.jumpAttackDuration);
            }

            if (event.type === "damage received" && event.isMonster) {
                this.onAttackImpact(() => {
                    this.monster?.takeDamage(event.damage);
                });
            }

            if (event.type === "attack" && event.isMonster && this.monster) {
                const adventurer = this.getAdventurer(event.target);
                if (adventurer) {
                    this.monster.attack(adventurer, cfg.jumpAttackDuration);
                }
            }

            if (event.type === "damage received" && !event.isMonster) {
                const adventurerReceivedDamage = event;
                const adventurer = this.getAdventurer(
                    adventurerReceivedDamage.target
                );
                this.onAttackImpact(() => {
                    adventurer?.takeDamage(adventurerReceivedDamage.damage);
                });
            }

            if (event.type === "adventurer killed") {
                const adventurer = this.getAdventurer(event.name);
                this.onAttackImpact(() => adventurer?.die());
            }

            if (event.type === "heal cast") {
                const adventurer = this.getAdventurer(event.actor);
                adventurer?.heal();
            }

            if (event.type === "received heal") {
                const adventurer = this.getAdventurer(event.target);
                adventurer?.receiveHeal(event.currentHp, event.amount);
            }

            if (event.type === "monster killed") {
                this.onAttackImpact(() => {
                    this.monster?.die();
                    this.sound
                        .add("fanfare", {
                            loop: true,
                            volume: 0.5,
                        })
                        .play();
                });
            }
        });
    }

    private maybeEnableDevMode() {
        if (cfg.dev.enabled) {
            this.gui.show();
            this.gui.add(this, "addDebugAdventurer");

            range(cfg.dev.adventurers).forEach((i) =>
                this.addAdventurer(`Amazing Adventurer ${i + 1}`, 100, 300)
            );
            this.addMonster({
                area: "Forest",
                hp: 21,
                name: randomMonsterCfg().name,
            });
        }
    }

    private getAdventurer(username: string) {
        return this.party.find((a) => a.username === username);
    }

    private addMonster(cfg: Ambushed["monster"]) {
        this.monster = new Monster(this, cfg, this.gui);
    }

    private onAttackImpact(cb: () => void) {
        this.time.delayedCall(cfg.jumpAttackDuration, cb);
    }

    private addAdventurer(username: string, hp: number, maxHp: number) {
        this.party.push(new Adventurer(this, username, hp, maxHp, this.gui));
    }

    // automatically called every 1/60th of a second
    public update() {
        this.party.forEach((adventurer) => adventurer.update());
        this.monster?.update();
    }

    private addTitle() {
        this.add
            .text(
                this.scale.width / 2,
                this.scale.height * cfg.title.relY,
                translations.title,
                TextConfig.title
            )
            .setOrigin(0.5)
            .setShadow(4, 6, Color.Grey, 2, true, true)
            .setAlpha(1);
    }

    private goto(key: string, sceneClass: new (name: string) => Scene) {
        this.cameras.main.once("camerafadeoutcomplete", () => {
            this.scene.add(key, sceneClass, true);
            this.scene.remove(this);
        });
        this.cameras.main.fadeOut(500);
    }

    private addDebugAdventurer() {
        this.addAdventurer(
            `Amazing Adventurer ${random(100000)}`,
            random(500),
            random(300)
        );
    }
}
