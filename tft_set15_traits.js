const TFT_SET15_TRAITS = {
  origins: {
    "Battle Academia": {
      name: "Battle Academia",
      type: "Origin",
      description: "Battle Academia champions upgrade their abilities and gain Potential. Potential improves their abilities.",
      breakpoints: [
        {
          level: 3,
          effect: "+10 Potential"
        },
        {
          level: 5,
          effect: "+10 Potential"
        },
        {
          level: 7,
          effect: "+10 Potential"
        }
      ],
      champions: ["Ezreal", "Garen", "Katarina", "Rakan", "Caitlyn", "Jayce", "Leona", "Yuumi"]
    },

    "Crystal Gambit": {
      name: "Crystal Gambit",
      type: "Origin",
      description: "Kills and losses during player combats earn Gem Power. Every 3 player combats choose to convert Gem Power into rewards or Double Down.",
      breakpoints: [
        {
          level: 3,
          effect: "0 per kill/loss"
        },
        {
          level: 5,
          effect: "Bonus loot and reroll kills"
        },
        {
          level: 7,
          effect: "150% rewards, +300 Health, +15% Damage Amplification"
        }
      ],
      champions: ["Syndra", "Janna", "Vi", "Swain", "Ashe", "Zyra"]
    },

    "Luchador": {
      name: "Luchador",
      type: "Origin",
      description: "Luchadors gain bonus Attack Damage. At 50% health, Luchadors cleanse negative effects, heal, and leap back into the fight, Stunning enemies in a 1-hex radius for 1 seconds.",
      breakpoints: [
        {
          level: 2,
          effect: "+15 Attack Damage, 25% Health heal"
        },
        {
          level: 4,
          effect: "+40 Attack Damage, 50% Health heal"
        }
      ],
      champions: ["Gnar", "Dr. Mundo", "Volibear", "Braum"]
    },

    "Mentor": {
      name: "Mentor",
      type: "Origin",
      description: "This trait is active only when you have exactly 1 or 4 unique Mentors.",
      breakpoints: [
        {
          level: 1,
          effect: "Allies gain the Mentor's bonus"
        },
        {
          level: 4,
          effect: "Mentors gain all bonuses and upgrade abilities, other allies gain nothing"
        }
      ],
      individualBonuses: {
        "Kobuko": "6% Damage Reduction",
        "Udyr": "8% Attack Damage and Ability Power",
        "Yasuo": "10% Attack Speed",
        "Ryze": "Attacks grant 2 bonus Mana"
      },
      champions: ["Kobuko", "Udyr", "Yasuo", "Ryze"]
    },

    "Mighty Mech": {
      name: "Mighty Mech",
      type: "Origin",
      description: "Gain The Mighty Mech. Mighty Mechs heal it for 12% of damage dealt. Unlock the Mightiest Mech. Each Mighty Mech champion's star level increases The Mighty Mech's power.",
      breakpoints: [
        {
          level: 3,
          effect: "The Mighty Mech arrives"
        },
        {
          level: 5,
          effect: "Blade Protocol: Level 1"
        },
        {
          level: 7,
          effect: "Blade Protocol: Level 2"
        }
      ],
      champions: ["Aatrox", "Lucian", "Gangplank", "Senna", "Jarvan IV", "Karma", "Yone"]
    },

    "Monster Trainer": {
      name: "Monster Trainer",
      type: "Origin",
      description: "Choose which monster Lulu summons to replace her in combat!",
      breakpoints: [],
      champions: ["Lulu"]
    },

    "Rogue Captain": {
      name: "Rogue Captain",
      type: "Origin",
      description: "Twisted Fate upgrades the Crew Ship to deal 15% of it's damage as true damage and draws Bounty Cards each round that grant random rewards.",
      breakpoints: [],
      champions: ["Twisted Fate"]
    },

    "Rosemother": {
      name: "Rosemother",
      type: "Origin",
      description: "Gain 1/1/8 placeable plants, based on Zyra's star level. Plants in the front two rows grow into durable Grasping Roots, while plants in the back two rows grow into Deadly Spines. Rosemother plants benefit from Zyra's Ability Power and Attack Speed. When Zyra casts, her plant: Restores 35% Health and Gains 35% Attack Speed for the rest of combat. If the plant is dead when Zyra casts, she revives it instead.",
      breakpoints: [],
      champions: ["Zyra"]
    },

    "Soul Fighter": {
      name: "Soul Fighter",
      type: "Origin",
      description: "Soul Fighters gain bonus Health, and gain Attack Damage and Ability Power every second up to 8 stacks. At max stacks deal bonus true damage.",
      breakpoints: [
        {
          level: 2,
          effect: "120 Health, 1% Attack Damage, 1% Ability Power per stack, +10% damage at max stacks"
        },
        {
          level: 4,
          effect: "240 Health, 2% Attack Damage, 2% Ability Power per stack, +16% damage at max stacks"
        },
        {
          level: 6,
          effect: "450 Health, 3% Attack Damage, 3% Ability Power per stack, +22% damage at max stacks"
        },
        {
          level: 8,
          effect: "650 Health, 4% Attack Damage, 4% Ability Power per stack, +28% damage at max stacks"
        }
      ],
      prismaticCondition: "Defeat 10 players in combat. MAXIMUM SOUL POWER.",
      champions: ["Kalista", "Naafiri", "Lux", "Xin Zhao", "Viego", "Samira", "Sett", "Gwen"]
    },

    "Stance Master": {
      name: "Stance Master",
      type: "Origin",
      description: "When you field Lee Sin, choose between Duelist Stance, Executioner Stance, and Juggernaut Stance! Each stance has a unique ability, and grants Lee Sin the associated trait.",
      breakpoints: [],
      champions: ["Lee Sin"]
    },

    "Star Guardian": {
      name: "Star Guardian",
      type: "Origin",
      description: "Star Guardians have a unique Teamwork bonus that is granted to all Star Guardians. Every Star Guardian fielded increases the bonus!",
      breakpoints: [],
      prismaticChallenge: "Spend 18500 mana - THE STARS AWAKEN",
      individualBonuses: {
        "Rell": "Gain shields",
        "Syndra": "Gain Ability Power",
        "Xayah": "Magic damage on attack",
        "Ahri": "On cast, gain Mana",
        "Neeko": "Increase heals & shields",
        "Poppy": "Heal at low Health",
        "Jinx": "Gain Attack Speed",
        "Seraphine": "Gain every stat",
        "Emblem": "Increase other bonuses"
      },
      champions: ["Rell", "Syndra", "Xayah", "Ahri", "Neeko", "Jinx", "Poppy", "Seraphine"]
    },

    "Supreme Cells": {
      name: "Supreme Cells",
      type: "Origin",
      description: "The Cell who dealt the most damage last combat is Supreme. When the Supreme Cell dies, the Cell with the highest current damage becomes Supreme. Cells gain Damage Amp, with the Supreme Cell executing enemies under 10% Health.",
      breakpoints: [
        {
          level: 2,
          effect: "8% Damage Amp | Supreme Cell gets 12% Damage Amp"
        },
        {
          level: 3,
          effect: "18% Damage Amp | Supreme Cell gets 30% Damage Amp"
        },
        {
          level: 4,
          effect: "28% Damage Amp | Supreme Cell gets 50% Damage Amp; Gain a second Supreme"
        }
      ],
      champions: ["Kennen", "Kai'Sa", "Darius", "Akali"]
    },

    "The Champ": {
      name: "The Champ",
      type: "Origin",
      description: "The Champ's victories against players grant Poro-fans equal to his star level. On loss, Poro-fans prevent 1 Tactician damage each, then lose all of your Poro-fans.",
      breakpoints: [],
      champions: ["Braum"]
    },

    "The Crew": {
      name: "The Crew",
      type: "Origin",
      description: "Crew champions gain 5% Health and Attack Speed for each Crew member fielded.",
      breakpoints: [
        {
          level: "1x 3-Star",
          effect: "+1 XP per paid reroll, Crew unit odds never drop with player level"
        },
        {
          level: "2x 3-Star",
          effect: "+1 free reroll per round"
        },
        {
          level: "3x 3-Star",
          effect: "Deal 280 damage to fire a rocket dealing 75"
        },
        {
          level: "4x 3-Star",
          effect: "Fire rockets 2.5% more often per player level"
        },
        {
          level: "5x 3-Star",
          effect: "Fire the Planet Cracker"
        }
      ],
      champions: ["Malphite", "Sivir", "Shen", "Ziggs", "Twisted Fate"]
    },

    "Wraith": {
      name: "Wraith",
      type: "Origin",
      description: "Every 4 seconds, the Shadow Realm strikes the 3 closest enemies, dealing total magic damage equal to a portion of damage dealt by Wraiths since the last trigger. Your lowest health Wraith heals for 18% of damage dealt by Wraiths and the Shadow Realm.",
      breakpoints: [
        {
          level: 2,
          effect: "20% damage"
        },
        {
          level: 4,
          effect: "40% damage"
        },
        {
          level: 6,
          effect: "60% damage"
        }
      ],
      champions: ["Kayle", "Zac", "Jhin", "Malzahar", "K'Sante", "Varus"]
    }
  },

  classes: {
    "Bastion": {
      name: "Bastion",
      type: "Class",
      description: "Your team gains 10 Armor and Magic Resist. Bastions gain more, and the value doubles in the first 10 seconds of combat.",
      breakpoints: [
        {
          level: 2,
          effect: "18 Armor and Magic Resist"
        },
        {
          level: 4,
          effect: "40 Armor and Magic Resist"
        },
        {
          level: 6,
          effect: "75 Armor and Magic Resist for Bastions, Non-Bastions gain an additional 25 Armor and Magic Resist"
        }
      ],
      champions: ["Garen", "Rell", "Shen", "Xin Zhao", "Swain", "Leona", "Braum"]
    },

    "Duelist": {
      name: "Duelist",
      type: "Class",
      description: "Duelists gain Attack Speed on each attack, stacking up to 12 times.",
      breakpoints: [
        {
          level: 2,
          effect: "4% Attack Speed per stack"
        },
        {
          level: 4,
          effect: "7% Attack Speed per stack"
        },
        {
          level: 6,
          effect: "10% Attack Speed per stack, Duelists gain 12% Damage Reduction"
        }
      ],
      champions: ["Kayle", "Gangplank", "Kai'Sa", "Udyr", "Viego", "Ashe"]
    },

    "Edgelord": {
      name: "Edgelord",
      type: "Class",
      description: "Edgelords gain Omnivamp and Attack Damage. While attacking enemies under 50% Health, they gain 40% Attack Speed.",
      breakpoints: [
        {
          level: 2,
          effect: "10% Omnivamp, 15% Attack Damage"
        },
        {
          level: 4,
          effect: "12% Omnivamp, 40% Attack Damage"
        },
        {
          level: 6,
          effect: "15% Omnivamp, 60% Attack Damage"
        }
      ],
      champions: ["Shen", "Xayah", "Yasuo", "Samira", "Volibear", "Yone"]
    },

    "Executioner": {
      name: "Executioner",
      type: "Class",
      description: "Executioners gain Critical Strike Chance and Critical Strike Damage. Their Ability can critically strike.",
      breakpoints: [
        {
          level: 2,
          effect: "25% Critical Strike Chance, 10% Critical Strike Damage"
        },
        {
          level: 3,
          effect: "35% Critical Strike Chance, 12% Critical Strike Damage"
        },
        {
          level: 4,
          effect: "50% Critical Strike Chance, 18% Critical Strike Damage"
        },
        {
          level: 5,
          effect: "55% Critical Strike Chance, 28% Critical Strike Damage"
        }
      ],
      champions: ["Kalista", "Katarina", "Senna", "Akali", "Ryze"]
    },

    "Heavyweight": {
      name: "Heavyweight",
      type: "Class",
      description: "Your team gains 100 Health. Heavyweights gain additional bonus Health, and Attack Damage equal to a percentage of their Health.",
      breakpoints: [
        {
          level: 2,
          effect: "20% additional Health, 0.2% of Health converted to Attack Damage"
        },
        {
          level: 4,
          effect: "40% additional Health, 0.4% of Health converted to Attack Damage"
        },
        {
          level: 6,
          effect: "65% additional Health, 0.6% of Health converted to Attack Damage"
        }
      ],
      champions: ["Aatrox", "Zac", "Kobuko", "Darius", "Jayce", "Poppy"]
    },

    "Juggernaut": {
      name: "Juggernaut",
      type: "Class",
      description: "Juggernauts gain Durability, increased above 50% health. When a Juggernaut dies, other Juggernauts heal for 10% of their max Health.",
      breakpoints: [
        {
          level: 2,
          effect: "15% or 25% Damage Reduction (25% when above 50% health)"
        },
        {
          level: 4,
          effect: "20% or 30% Damage Reduction (30% when above 50% health)"
        },
        {
          level: 6,
          effect: "25% or 35% Damage Reduction (35% when above 50% health)"
        }
      ],
      champions: ["Aatrox", "Naafiri", "Dr. Mundo", "Vi", "Udyr", "Sett"]
    },

    "Prodigy": {
      name: "Prodigy",
      type: "Class",
      description: "Your team gains Mana Regen. Prodigies gain more.",
      breakpoints: [
        {
          level: 2,
          effect: "1 Mana Regen for team, 3 Mana Regen for Prodigies"
        },
        {
          level: 3,
          effect: "1 Mana Regen for team, 4 Mana Regen for Prodigies"
        },
        {
          level: 4,
          effect: "1 Mana Regen for team, 6 Mana Regen for Prodigies"
        },
        {
          level: 5,
          effect: "1 Mana Regen for team, 7 Mana Regen for Prodigies, Prodigy abilities heal an ally for 12% of damage dealt"
        }
      ],
      champions: ["Ezreal", "Syndra", "Malzahar", "Yuumi", "Seraphine"]
    },

    "Protector": {
      name: "Protector",
      type: "Class",
      description: "Units gain 5% Durability while shielded. Once per combat at 50% Health, Protectors shield themselves and their closest ally. Shields stack.",
      breakpoints: [
        {
          level: 2,
          effect: "18% Health shield"
        },
        {
          level: 4,
          effect: "36% Health shield"
        },
        {
          level: 6,
          effect: "55% Health shield"
        }
      ],
      champions: ["Kennen", "Malphite", "Janna", "Rakan", "Neeko", "K'Sante"]
    },

    "Sniper": {
      name: "Sniper",
      type: "Class",
      description: "Snipers gain Damage Amp, increased against targets farther away.",
      breakpoints: [
        {
          level: 2,
          effect: "13% Damage Amplification; +3% per hex"
        },
        {
          level: 3,
          effect: "16% Damage Amplification; +5% per hex"
        },
        {
          level: 4,
          effect: "22% Damage Amplification; +7% per hex"
        },
        {
          level: 5,
          effect: "25% Damage Amplification; +10% per hex"
        }
      ],
      champions: ["Gnar", "Sivir", "Jhin", "Caitlyn", "Jinx", "Varus"]
    },

    "Sorcerer": {
      name: "Sorcerer",
      type: "Class",
      description: "Sorcerers gain bonus Ability Power. When an enemy dies after being damaged by a Sorcerer, they deal a percentage of that enemy's maximum Health to another enemy.",
      breakpoints: [
        {
          level: 2,
          effect: "20 Ability Power, 8% max Health damage to another enemy"
        },
        {
          level: 4,
          effect: "50 Ability Power, 10% max Health damage to another enemy"
        },
        {
          level: 6,
          effect: "80 Ability Power, 12% max Health damage to 2 enemies"
        }
      ],
      champions: ["Kennen", "Lucian", "Lux", "Ahri", "Swain", "Karma", "Gwen"]
    },

    "Strategist": {
      name: "Strategist",
      type: "Class",
      description: "Combat Start: Allies in the front 2 rows gain a shield for 15 seconds. Allies in the back 2 rows gain Damage Amp. Strategists gain triple.",
      breakpoints: [
        {
          level: 2,
          effect: "150 Shield, 4% Damage Amplification"
        },
        {
          level: 3,
          effect: "225 Shield, 6% Damage Amplification"
        },
        {
          level: 4,
          effect: "350 Shield, 10% Damage Amplification"
        },
        {
          level: 5,
          effect: "450 Shield, 14% Damage Amplification"
        }
      ],
      champions: ["Janna", "Ziggs", "Jarvan IV", "Ryze"]
    }
  }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = TFT_SET15_TRAITS;
}
