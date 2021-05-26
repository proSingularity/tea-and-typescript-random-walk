// ALL CREDIT GOES TO https://github.com/jforstneric/5e_encounter_generator
// AND THE MAKERS OF DnD. You rock!

var monsters = [
  {
    name: "doppelganger",
    area: "city",
    type: "monstrosity",
    hp: 82,
  },
  {
    name: "gargoyle",
    area: "city",
    type: "elemental",
    hp: 140,
  },
  {
    name: "wererat",
    area: "city",
    type: "humanoid",
    hp: 209,
  },
  {
    name: "rakshasa",
    area: "city",
    type: "fiend",
    hp: 257,
  },
  {
    name: "revenant",
    area: "city",
    type: "undead",
    hp: 259,
  },
  {
    name: "vampire",
    area: "city",
    type: "undead",
    hp: 297,
  },
  {
    name: "vampire spawn",
    area: "city",
    type: "undead",
    hp: 298,
  },
  {
    name: "blink dog",
    area: "city",
    type: "fey",
    hp: 318,
  },
  {
    name: "acolyte",
    area: "city",
    type: "humanoid",
    hp: 342,
  },
  {
    name: "assassin",
    area: "city",
    type: "humanoid",
    hp: 343,
  },
  {
    name: "commoner",
    area: "city",
    type: "humanoid",
    hp: 345,
  },
  {
    name: "cultist",
    area: "city",
    type: "humanoid",
    hp: 345,
  },
  {
    name: "guard",
    area: "city",
    type: "humanoid",
    hp: 347,
  },
  {
    name: "thug",
    area: "city",
    type: "humanoid",
    hp: 350,
  },
  {
    name: "animated armor",
    area: "dungeon",
    type: "construct",
    hp: 19,
  },
  {
    name: "flying sword",
    area: "dungeon",
    type: "construct",
    hp: 20,
  },
  {
    name: "rug of smothering",
    area: "dungeon",
    type: "construct",
    hp: 20,
  },
  {
    name: "banshee",
    area: "dungeon",
    type: "undead",
    hp: 23,
  },
  {
    name: "beholder",
    area: "dungeon",
    type: "aberration",
    hp: 28,
  },
  {
    name: "death tyrant",
    area: "dungeon",
    type: "undead",
    hp: 29,
  },
  {
    name: "spectator",
    area: "dungeon",
    type: "aberration",
    hp: 30,
  },
  {
    name: "crawling claw",
    area: "dungeon",
    type: "undead",
    hp: 44,
  },
  {
    name: "death knight",
    area: "dungeon",
    type: "undead",
    hp: 47,
  },
  {
    name: "demilich",
    area: "dungeon",
    type: "undead",
    hp: 48,
  },
  {
    name: "flameskull",
    area: "dungeon",
    type: "undead",
    hp: 134,
  },
  {
    name: "ghost",
    area: "dungeon",
    type: "undead",
    hp: 147,
  },
  {
    name: "ghast",
    area: "dungeon",
    type: "undead",
    hp: 148,
  },
  {
    name: "ghoul",
    area: "dungeon",
    type: "undead",
    hp: 148,
  },
  {
    name: "gibbering mouther",
    area: "dungeon",
    type: "aberration",
    hp: 157,
  },
  {
    name: "clay golem",
    area: "dungeon",
    type: "construct",
    hp: 168,
  },
  {
    name: "flesh golem",
    area: "dungeon",
    type: "construct",
    hp: 169,
  },
  {
    name: "iron golem",
    area: "dungeon",
    type: "construct",
    hp: 170,
  },
  {
    name: "stone golem",
    area: "dungeon",
    type: "construct",
    hp: 170,
  },
  {
    name: "gorgon",
    area: "dungeon",
    type: "monstrosity",
    hp: 171,
  },
  {
    name: "grell",
    area: "dungeon",
    type: "aberration",
    hp: 172,
  },
  {
    name: "helmed horror",
    area: "dungeon",
    type: "construct",
    hp: 183,
  },
  {
    name: "homunculus",
    area: "dungeon",
    type: "construct",
    hp: 188,
  },
  {
    name: "intellect devourer",
    area: "dungeon",
    type: "aberration",
    hp: 191,
  },
  {
    name: "invisible stalker",
    area: "dungeon",
    type: "elemental",
    hp: 192,
  },
  {
    name: "lamia",
    area: "dungeon",
    type: "monstrosity",
    hp: 201,
  },
  {
    name: "lich",
    area: "dungeon",
    type: "undead",
    hp: 202,
  },
  {
    name: "medusa",
    area: "dungeon",
    type: "monstrosity",
    hp: 214,
  },
  {
    name: "dust mephit",
    area: "dungeon",
    type: "elemental",
    hp: 215,
  },
  {
    name: "ice mephit",
    area: "dungeon",
    type: "elemental",
    hp: 215,
  },
  {
    name: "magma mephit",
    area: "dungeon",
    type: "elemental",
    hp: 216,
  },
  {
    name: "mud mephit",
    area: "dungeon",
    type: "elemental",
    hp: 216,
  },
  {
    name: "smoke mephit",
    area: "dungeon",
    type: "elemental",
    hp: 217,
  },
  {
    name: "steam mephit",
    area: "dungeon",
    type: "elemental",
    hp: 217,
  },
  {
    name: "mimic",
    area: "dungeon",
    type: "monstrosity",
    hp: 220,
  },
  {
    name: "mind flayer",
    area: "dungeon",
    type: "aberration",
    hp: 222,
  },
  {
    name: "minotaur",
    area: "dungeon",
    type: "monstrosity",
    hp: 223,
  },
  {
    name: "monodrone",
    area: "dungeon",
    type: "construct",
    hp: 224,
  },
  {
    name: "duodrone",
    area: "dungeon",
    type: "construct",
    hp: 225,
  },
  {
    name: "tridrone",
    area: "dungeon",
    type: "construct",
    hp: 225,
  },
  {
    name: "quadrone",
    area: "dungeon",
    type: "construct",
    hp: 226,
  },
  {
    name: "pentadrone",
    area: "dungeon",
    type: "construct",
    hp: 226,
  },
  {
    name: "mummy",
    area: "dungeon",
    type: "undead",
    hp: 228,
  },
  {
    name: "mummy lord",
    area: "dungeon",
    type: "undead",
    hp: 229,
  },
  {
    name: "bone naga",
    area: "dungeon",
    type: "undead",
    hp: 233,
  },
  {
    name: "spirit naga",
    area: "dungeon",
    type: "monstrosity",
    hp: 234,
  },
  {
    name: "guardian naga",
    area: "dungeon",
    type: "monstrosity",
    hp: 234,
  },
  {
    name: "black pudding",
    area: "dungeon",
    type: "ooze",
    hp: 241,
  },
  {
    name: "gelatinous cube",
    area: "dungeon",
    type: "ooze",
    hp: 242,
  },
  {
    name: "gray ooze",
    area: "dungeon",
    type: "ooze",
    hp: 243,
  },
  {
    name: "ochre jelly",
    area: "dungeon",
    type: "ooze",
    hp: 243,
  },
  {
    name: "shadow",
    area: "dungeon",
    type: "undead",
    hp: 269,
  },
  {
    name: "shield guardian",
    area: "dungeon",
    type: "construct",
    hp: 271,
  },
  {
    name: "skeleton",
    area: "dungeon",
    type: "undead",
    hp: 272,
  },
  {
    name: "minotaur skeleton",
    area: "dungeon",
    type: "undead",
    hp: 273,
  },
  {
    name: "warhorse skeleton",
    area: "dungeon",
    type: "undead",
    hp: 273,
  },
  {
    name: "specter",
    area: "dungeon",
    type: "undead",
    hp: 279,
  },
  {
    name: "wight",
    area: "dungeon",
    type: "undead",
    hp: 300,
  },
  {
    name: "wraith",
    area: "dungeon",
    type: "undead",
    hp: 302,
  },
  {
    name: "zombie",
    area: "dungeon",
    type: "undead",
    hp: 316,
  },
  {
    name: "beholder zombie",
    area: "dungeon",
    type: "undead",
    hp: 316,
  },
  {
    name: "ogre zombie",
    area: "dungeon",
    type: "undead",
    hp: 316,
  },
  {
    name: "aarakocra",
    area: "other plane",
    type: "humanoid",
    hp: 12,
  },
  {
    name: "azer",
    area: "other plane",
    type: "elemental",
    hp: 22,
  },
  {
    name: "cambion",
    area: "other plane",
    type: "fiend",
    hp: 36,
  },
  {
    name: "couatl",
    area: "other plane",
    type: "celestial",
    hp: 43,
  },
  {
    name: "balor",
    area: "other plane",
    type: "fiend",
    hp: 55,
  },
  {
    name: "barlgura",
    area: "other plane",
    type: "fiend",
    hp: 56,
  },
  {
    name: "chasme",
    area: "other plane",
    type: "fiend",
    hp: 57,
  },
  {
    name: "dretch",
    area: "other plane",
    type: "fiend",
    hp: 57,
  },
  {
    name: "glabrezu",
    area: "other plane",
    type: "fiend",
    hp: 58,
  },
  {
    name: "goristo",
    area: "other plane",
    type: "fiend",
    hp: 59,
  },
  {
    name: "hezrou",
    area: "other plane",
    type: "fiend",
    hp: 60,
  },
  {
    name: "manes",
    area: "other plane",
    type: "fiend",
    hp: 60,
  },
  {
    name: "marilith",
    area: "other plane",
    type: "fiend",
    hp: 61,
  },
  {
    name: "nalfeshnee",
    area: "other plane",
    type: "fiend",
    hp: 62,
  },
  {
    name: "quasit",
    area: "other plane",
    type: "fiend",
    hp: 63,
  },
  {
    name: "shadow demon",
    area: "other plane",
    type: "fiend",
    hp: 64,
  },
  {
    name: "vrock",
    area: "other plane",
    type: "fiend",
    hp: 64,
  },
  {
    name: "yochlol",
    area: "other plane",
    type: "fiend",
    hp: 65,
  },
  {
    name: "barbed devil",
    area: "other plane",
    type: "fiend",
    hp: 70,
  },
  {
    name: "bearded devil",
    area: "other plane",
    type: "fiend",
    hp: 70,
  },
  {
    name: "bone devil",
    area: "other plane",
    type: "fiend",
    hp: 71,
  },
  {
    name: "chain devil",
    area: "other plane",
    type: "fiend",
    hp: 72,
  },
  {
    name: "erinyes",
    area: "other plane",
    type: "fiend",
    hp: 73,
  },
  {
    name: "horned devil",
    area: "other plane",
    type: "fiend",
    hp: 74,
  },
  {
    name: "ice devil",
    area: "other plane",
    type: "fiend",
    hp: 75,
  },
  {
    name: "imp",
    area: "other plane",
    type: "fiend",
    hp: 76,
  },
  {
    name: "lemure",
    area: "other plane",
    type: "fiend",
    hp: 76,
  },
  {
    name: "pit fiend",
    area: "other plane",
    type: "fiend",
    hp: 77,
  },
  {
    name: "spined devil",
    area: "other plane",
    type: "fiend",
    hp: 78,
  },
  {
    name: "air elemental",
    area: "other plane",
    type: "elemental",
    hp: 124,
  },
  {
    name: "earth elemental",
    area: "other plane",
    type: "elemental",
    hp: 124,
  },
  {
    name: "fire elemental",
    area: "other plane",
    type: "elemental",
    hp: 125,
  },
  {
    name: "water elemental",
    area: "other plane",
    type: "elemental",
    hp: 125,
  },
  {
    name: "dao",
    area: "other plane",
    type: "elemental",
    hp: 143,
  },
  {
    name: "djinni",
    area: "other plane",
    type: "elemental",
    hp: 144,
  },
  {
    name: "efreeti",
    area: "other plane",
    type: "elemental",
    hp: 145,
  },
  {
    name: "marid",
    area: "other plane",
    type: "elemental",
    hp: 146,
  },
  {
    name: "hell hound",
    area: "other plane",
    type: "fiend",
    hp: 182,
  },
  {
    name: "needle blight",
    area: "forest",
    type: "plant",
    hp: 32,
  },
  {
    name: "twig blight",
    area: "forest",
    type: "plant",
    hp: 32,
  },
  {
    name: "vine blight",
    area: "forest",
    type: "plant",
    hp: 32,
  },
  {
    name: "driad",
    area: "forest",
    type: "fey",
    hp: 121,
  },
  {
    name: "pixie",
    area: "forest",
    type: "fey",
    hp: 253,
  },
  {
    name: "bugbear",
    area: "nature",
    type: "goblinoid",
    hp: 33,
  },
  {
    name: "bugbear chief",
    area: "nature",
    type: "goblinoid",
    hp: 33,
  },
  {
    name: "bulette",
    area: "nature",
    type: "monstrosity",
    hp: 34,
  },
  {
    name: "bullywug",
    area: "nature",
    type: "humanoid",
    hp: 35,
  },
  {
    name: "centaur",
    area: "nature",
    type: "monstrosity",
    hp: 38,
  },
  {
    name: "chimera",
    area: "nature",
    type: "monstrosity",
    hp: 39,
  },
  {
    name: "cockatrice",
    area: "nature",
    type: "monstrosity",
    hp: 43,
  },
  {
    name: "cyclops",
    area: "nature",
    type: "giant",
    hp: 45,
  },
  {
    name: "displacer beast",
    area: "nature",
    type: "monstrosity",
    hp: 81,
  },
  {
    name: "dracolich",
    area: "nature",
    type: "undead",
    hp: 84,
  },
  {
    name: "ettin",
    area: "nature",
    type: "giant",
    hp: 132,
  },
  {
    name: "faerie dragon r/o/y",
    area: "nature",
    type: "fey",
    hp: 133,
  },
  {
    name: "faerie dragon g/b/i/v",
    area: "nature",
    type: "fey",
    hp: 133,
  },
  {
    name: "galeb duhr",
    area: "nature",
    type: "elemental",
    hp: 139,
  },
  {
    name: "cloud giant",
    area: "nature",
    type: "giant",
    hp: 154,
  },
  {
    name: "fire giant",
    area: "nature",
    type: "giant",
    hp: 154,
  },
  {
    name: "frost giant",
    area: "nature",
    type: "giant",
    hp: 155,
  },
  {
    name: "hill giant",
    area: "nature",
    type: "giant",
    hp: 155,
  },
  {
    name: "stone giant",
    area: "nature",
    type: "giant",
    hp: 156,
  },
  {
    name: "storm giant",
    area: "nature",
    type: "giant",
    hp: 156,
  },
  {
    name: "gnoll",
    area: "nature",
    type: "humanoid",
    hp: 163,
  },
  {
    name: "gnoll pack lord",
    area: "nature",
    type: "humanoid",
    hp: 163,
  },
  {
    name: "gnoll fang of yeenoghu",
    area: "nature",
    type: "humanoid",
    hp: 163,
  },
  {
    name: "goblin",
    area: "nature",
    type: "goblinoid",
    hp: 166,
  },
  {
    name: "goblin boss",
    area: "nature",
    type: "goblinoid",
    hp: 166,
  },
  {
    name: "griffon",
    area: "nature",
    type: "monstrosity",
    hp: 174,
  },
  {
    name: "night hag",
    area: "nature",
    type: "fey",
    hp: 178,
  },
  {
    name: "half-dragon",
    area: "nature",
    type: "humanoid",
    hp: 180,
  },
  {
    name: "harpy",
    area: "nature",
    type: "monstrosity",
    hp: 181,
  },
  {
    name: "hippogriff",
    area: "nature",
    type: "monstrosity",
    hp: 184,
  },
  {
    name: "hobgoblin",
    area: "nature",
    type: "goblinoid",
    hp: 186,
  },
  {
    name: "hobgoblin captain",
    area: "nature",
    type: "goblinoid",
    hp: 186,
  },
  {
    name: "hobgoblin warlord",
    area: "nature",
    type: "goblinoid",
    hp: 187,
  },
  {
    name: "hydra",
    area: "nature",
    type: "monstrosity",
    hp: 190,
  },
  {
    name: "jackalwere",
    area: "nature",
    type: "humanoid",
    hp: 193,
  },
  {
    name: "kenku",
    area: "nature",
    type: "humanoid",
    hp: 194,
  },
  {
    name: "winged kobold",
    area: "nature",
    type: "humanoid",
    hp: 195,
  },
  {
    name: "kobold",
    area: "nature",
    type: "humanoid",
    hp: 195,
  },
  {
    name: "kraken",
    area: "nature",
    type: "monstrosity",
    hp: 197,
  },
  {
    name: "lizardfolk",
    area: "nature",
    type: "humanoid",
    hp: 204,
  },
  {
    name: "lizardfolk shaman",
    area: "nature",
    type: "humanoid",
    hp: 205,
  },
  {
    name: "lizardfolk royal",
    area: "nature",
    type: "humanoid",
    hp: 205,
  },
  {
    name: "werebear",
    area: "nature",
    type: "humanoid",
    hp: 208,
  },
  {
    name: "wereboar",
    area: "nature",
    type: "humanoid",
    hp: 209,
  },
  {
    name: "weretiger",
    area: "nature",
    type: "humanoid",
    hp: 210,
  },
  {
    name: "werewolf",
    area: "nature",
    type: "humanoid",
    hp: 211,
  },
  {
    name: "manticore",
    area: "nature",
    type: "monstrosity",
    hp: 213,
  },
  {
    name: "merfolk",
    area: "nature",
    type: "humanoid",
    hp: 218,
  },
  {
    name: "merrow",
    area: "nature",
    type: "monstrosity",
    hp: 219,
  },
  {
    name: "nightmare",
    area: "nature",
    type: "fiend",
    hp: 235,
  },
  {
    name: "ogre",
    area: "nature",
    type: "giant",
    hp: 237,
  },
  {
    name: "half-ogre",
    area: "nature",
    type: "giant",
    hp: 238,
  },
  {
    name: "oni",
    area: "nature",
    type: "giant",
    hp: 239,
  },
  {
    name: "orc",
    area: "nature",
    type: "humanoid",
    hp: 246,
  },
  {
    name: "orc war chief",
    area: "nature",
    type: "humanoid",
    hp: 246,
  },
  {
    name: "orc eye of gruumsh",
    area: "nature",
    type: "humanoid",
    hp: 247,
  },
  {
    name: "orog",
    area: "nature",
    type: "humanoid",
    hp: 247,
  },
  {
    name: "owlbear",
    area: "nature",
    type: "monstrosity",
    hp: 249,
  },
  {
    name: "pegasus",
    area: "nature",
    type: "celestial",
    hp: 250,
  },
  {
    name: "peryton",
    area: "nature",
    type: "monstrosity",
    hp: 251,
  },
  {
    name: "pseudodragon",
    area: "nature",
    type: "monstrosity",
    hp: 254,
  },
  {
    name: "purple worm",
    area: "nature",
    type: "monstrosity",
    hp: 255,
  },
  {
    name: "remorhaz",
    area: "nature",
    type: "monstrosity",
    hp: 258,
  },
  {
    name: "young remorhaz",
    area: "nature",
    type: "monstrosity",
    hp: 258,
  },
  {
    name: "roc",
    area: "nature",
    type: "monstrosity",
    hp: 260,
  },
  {
    name: "sahuagin",
    area: "nature",
    type: "humanoid",
    hp: 263,
  },
  {
    name: "sahuagin priestess",
    area: "nature",
    type: "humanoid",
    hp: 264,
  },
  {
    name: "sahuagin baron",
    area: "nature",
    type: "humanoid",
    hp: 264,
  },
  {
    name: "satyr",
    area: "nature",
    type: "fey",
    hp: 267,
  },
  {
    name: "scarecrow",
    area: "nature",
    type: "undead",
    hp: 268,
  },
  {
    name: "shambling mound",
    area: "nature",
    type: "plant",
    hp: 270,
  },
  {
    name: "androsphinx",
    area: "nature",
    type: "monstrosity",
    hp: 281,
  },
  {
    name: "gynosphinx",
    area: "nature",
    type: "monstrosity",
    hp: 282,
  },
  {
    name: "sprite",
    area: "nature",
    type: "fey",
    hp: 283,
  },
  {
    name: "stirge",
    area: "nature",
    type: "monstrosity",
    hp: 284,
  },
  {
    name: "tarrasque",
    area: "nature",
    type: "monstrosity",
    hp: 286,
  },
  {
    name: "thri-kreen",
    area: "nature",
    type: "humanoid",
    hp: 288,
  },
  {
    name: "treant",
    area: "nature",
    type: "plant",
    hp: 289,
  },
  {
    name: "troll",
    area: "nature",
    type: "giant",
    hp: 291,
  },
  {
    name: "unicorn",
    area: "nature",
    type: "celestial",
    hp: 294,
  },
  {
    name: "water weird",
    area: "nature",
    type: "elemental",
    hp: 299,
  },
  {
    name: "will-o-wisp",
    area: "nature",
    type: "undead",
    hp: 301,
  },
  {
    name: "wyvern",
    area: "nature",
    type: "monstrosity",
    hp: 303,
  },
  {
    name: "yeti",
    area: "nature",
    type: "monstrosity",
    hp: 305,
  },
  {
    name: "abominable yeti",
    area: "nature",
    type: "monstrosity",
    hp: 306,
  },
  {
    name: "yuan-ti abomination",
    area: "nature",
    type: "monstrosity",
    hp: 308,
  },
  {
    name: "yuan-ti malison",
    area: "nature",
    type: "monstrosity",
    hp: 309,
  },
  {
    name: "yuan-ti pureblood",
    area: "nature",
    type: "monstrosity",
    hp: 310,
  },
  {
    name: "bandit",
    area: "nature",
    type: "humanoid",
    hp: 343,
  },
  {
    name: "bandit captain",
    area: "nature",
    type: "humanoid",
    hp: 344,
  },
  {
    name: "scout",
    area: "nature",
    type: "humanoid",
    hp: 349,
  },
  {
    name: "magmin",
    area: "other plane",
    type: "elemental",
    hp: 212,
  },
  {
    name: "fire snake",
    area: "other plane",
    type: "elemental",
    hp: 265,
  },
  {
    name: "salamander",
    area: "other plane",
    type: "elemental",
    hp: 267,
  },
  {
    name: "red slaad",
    area: "other plane",
    type: "aberration",
    hp: 276,
  },
  {
    name: "slaad tadpole",
    area: "other plane",
    type: "aberration",
    hp: 276,
  },
  {
    name: "blue slaad",
    area: "other plane",
    type: "aberration",
    hp: 276,
  },
  {
    name: "green slaad",
    area: "other plane",
    type: "aberration",
    hp: 277,
  },
  {
    name: "grey slaad",
    area: "other plane",
    type: "aberration",
    hp: 277,
  },
  {
    name: "death slaad",
    area: "other plane",
    type: "aberration",
    hp: 278,
  },
  {
    name: "succubus",
    area: "other plane",
    type: "fiend",
    hp: 285,
  },
  {
    name: "xorn",
    area: "other plane",
    type: "elemental",
    hp: 304,
  },
  {
    name: "arcanaloth",
    area: "other plane",
    type: "fiend",
    hp: 313,
  },
  {
    name: "mezzoloth",
    area: "other plane",
    type: "fiend",
    hp: 313,
  },
  {
    name: "nycaloth",
    area: "other plane",
    type: "fiend",
    hp: 314,
  },
  {
    name: "ultroloth",
    area: "other plane",
    type: "fiend",
    hp: 314,
  },
  {
    name: "ankheg",
    area: "underground",
    type: "monstrosity",
    hp: 21,
  },
  {
    name: "basilisk",
    area: "underground",
    type: "monstrosity",
    hp: 24,
  },
  {
    name: "behir",
    area: "underground",
    type: "monstrosity",
    hp: 25,
  },
  {
    name: "carrion crawler",
    area: "underground",
    type: "monstrosity",
    hp: 37,
  },
  {
    name: "cloaker",
    area: "underground",
    type: "aberration",
    hp: 41,
  },
  {
    name: "darkmantle",
    area: "underground",
    type: "monstrosity",
    hp: 46,
  },
  {
    name: "drider",
    area: "underground",
    type: "monstrosity",
    hp: 120,
  },
  {
    name: "duergar",
    area: "underground",
    type: "humanoid",
    hp: 122,
  },
  {
    name: "drow",
    area: "underground",
    type: "humanoid",
    hp: 128,
  },
  {
    name: "drow elite warrior",
    area: "underground",
    type: "humanoid",
    hp: 128,
  },
  {
    name: "drow mage",
    area: "underground",
    type: "humanoid",
    hp: 129,
  },
  {
    name: "drow priestess",
    area: "underground",
    type: "humanoid",
    hp: 129,
  },
  {
    name: "ettercap",
    area: "underground",
    type: "monstrosity",
    hp: 131,
  },
  {
    name: "flumph",
    area: "underground",
    type: "aberration",
    hp: 135,
  },
  {
    name: "fomorian",
    area: "underground",
    type: "giant",
    hp: 136,
  },
  {
    name: "gas spore",
    area: "underground",
    type: "plant",
    hp: 138,
  },
  {
    name: "shrieker",
    area: "underground",
    type: "plant",
    hp: 138,
  },
  {
    name: "violet fungus",
    area: "underground",
    type: "plant",
    hp: 138,
  },
  {
    name: "deep gnome",
    area: "underground",
    type: "humanoid",
    hp: 164,
  },
  {
    name: "grick",
    area: "underground",
    type: "monstrosity",
    hp: 173,
  },
  {
    name: "grick alpha",
    area: "underground",
    type: "monstrosity",
    hp: 173,
  },
  {
    name: "grimlock",
    area: "underground",
    type: "humanoid",
    hp: 175,
  },
  {
    name: "hook horror",
    area: "underground",
    type: "monstrosity",
    hp: 189,
  },
  {
    name: "kuo-toa",
    area: "underground",
    type: "humanoid",
    hp: 199,
  },
  {
    name: "kuo-toa archpriest",
    area: "underground",
    type: "humanoid",
    hp: 200,
  },
  {
    name: "kuo-toa whip",
    area: "underground",
    type: "humanoid",
    hp: 200,
  },
  {
    name: "myconid sprout",
    area: "underground",
    type: "plant",
    hp: 230,
  },
  {
    name: "spore servant",
    area: "underground",
    type: "plant",
    hp: 230,
  },
  {
    name: "myconid adult",
    area: "underground",
    type: "plant",
    hp: 232,
  },
  {
    name: "myconid sovereign",
    area: "underground",
    type: "plant",
    hp: 232,
  },
  {
    name: "nothic",
    area: "underground",
    type: "aberration",
    hp: 236,
  },
  {
    name: "otyugh",
    area: "underground",
    type: "aberration",
    hp: 248,
  },
  {
    name: "piercer",
    area: "underground",
    type: "monstrosity",
    hp: 252,
  },
  {
    name: "quaggoth",
    area: "underground",
    type: "humanoid",
    hp: 256,
  },
  {
    name: "roper",
    area: "underground",
    type: "monstrosity",
    hp: 261,
  },
  {
    name: "rust name",
    area: "underground",
    type: "monstrosity",
    hp: 262,
  },
  {
    name: "troglodyte",
    area: "underground",
    type: "humanoid",
    hp: 290,
  },
  {
    name: "umber hulk",
    area: "underground",
    type: "monstrosity",
    hp: 292,
  },
  {
    name: "aboleth",
    area: "water",
    type: "aberration",
    hp: 13,
  },
  {
    name: "chuul",
    area: "water",
    type: "aberration",
    hp: 40,
  },
  {
    name: "sea hag",
    area: "water",
    type: "fey",
    hp: 179,
  },
].map((m) => Object.freeze(m));