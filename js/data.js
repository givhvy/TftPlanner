/**
 * TFT Set 15: K.O. Coliseum Champion Data
 * Updated for Patch 15.5
 */

const TFT_DATA = {
    // Trait definitions
    traits: {
        "Battle Academia": {
            name: "Battle Academia",
            type: "Origin",
            description: "Battle Academia champions upgrade their abilities and gain Potential. Potential improves their abilities.",
            breakpoints: [
                { level: 3, effect: "+10 Potential" },
                { level: 5, effect: "+10 Potential" },
                { level: 7, effect: "+10 Potential" }
            ]
        },
        "Crystal Gambit": {
            name: "Crystal Gambit",
            type: "Origin",
            description: "Kills and losses during player combats earn Gem Power. Every 3 player combats choose to convert Gem Power into rewards or Double Down.",
            breakpoints: [
                { level: 3, effect: "0 per kill/loss" },
                { level: 5, effect: "Bonus loot and reroll kills" },
                { level: 7, effect: "150% rewards, +300 Health, +15% Damage Amplification" }
            ]
        },
        "Luchador": {
            name: "Luchador",
            type: "Origin",
            description: "Luchadors gain bonus Attack Damage. At 50% health, Luchadors cleanse negative effects, heal, and leap back into the fight, Stunning enemies in a 1-hex radius for 1 seconds.",
            breakpoints: [
                { level: 2, effect: "+15 Attack Damage, 25% Health heal" },
                { level: 4, effect: "+40 Attack Damage, 50% Health heal" }
            ]
        },
        "Mentor": {
            name: "Mentor",
            type: "Origin",
            description: "This trait is active only when you have exactly 1 or 4 unique Mentors.",
            breakpoints: [
                { level: 1, effect: "Allies gain the Mentor's bonus" },
                { level: 4, effect: "Mentors gain all bonuses and upgrade abilities, other allies gain nothing" }
            ]
        },
        "Mighty Mech": {
            name: "Mighty Mech",
            type: "Origin",
            description: "Gain The Mighty Mech. Mighty Mechs heal it for 12% of damage dealt. Unlock the Mightiest Mech. Each Mighty Mech champion's star level increases The Mighty Mech's power.",
            breakpoints: [
                { level: 3, effect: "The Mighty Mech arrives" },
                { level: 5, effect: "Blade Protocol: Level 1" },
                { level: 7, effect: "Blade Protocol: Level 2" }
            ]
        },
        "Monster Trainer": {
            name: "Monster Trainer",
            type: "Origin",
            description: "Choose which monster Lulu summons to replace her in combat!",
            breakpoints: []
        },
        "Rogue Captain": {
            name: "Rogue Captain",
            type: "Origin",
            description: "Twisted Fate upgrades the Crew Ship to deal 15% of it's damage as true damage and draws Bounty Cards each round that grant random rewards.",
            breakpoints: []
        },
        "Rosemother": {
            name: "Rosemother",
            type: "Origin",
            description: "Gain 1/1/8 placeable plants, based on Zyra's star level. Plants in the front two rows grow into durable Grasping Roots, while plants in the back two rows grow into Deadly Spines.",
            breakpoints: []
        },
        "Soul Fighter": {
            name: "Soul Fighter",
            type: "Origin",
            description: "Soul Fighters gain bonus Health, and gain Attack Damage and Ability Power every second up to 8 stacks. At max stacks deal bonus true damage.",
            breakpoints: [
                { level: 2, effect: "120 Health, 1% AD/AP per stack, +10% damage at max" },
                { level: 4, effect: "240 Health, 2% AD/AP per stack, +16% damage at max" },
                { level: 6, effect: "450 Health, 3% AD/AP per stack, +22% damage at max" },
                { level: 8, effect: "650 Health, 4% AD/AP per stack, +28% damage at max" }
            ]
        },
        "Stance Master": {
            name: "Stance Master",
            type: "Origin",
            description: "When you field Lee Sin, choose between Duelist Stance, Executioner Stance, and Juggernaut Stance! Each stance has a unique ability, and grants Lee Sin the associated trait.",
            breakpoints: []
        },
        "Star Guardian": {
            name: "Star Guardian",
            type: "Origin",
            description: "Star Guardians have a unique Teamwork bonus that is granted to all Star Guardians. Every Star Guardian fielded increases the bonus!",
            breakpoints: []
        },
        "Supreme Cells": {
            name: "Supreme Cells",
            type: "Origin",
            description: "The Cell who dealt the most damage last combat is Supreme. When the Supreme Cell dies, the Cell with the highest current damage becomes Supreme. Cells gain Damage Amp, with the Supreme Cell executing enemies under 10% Health.",
            breakpoints: [
                { level: 2, effect: "8% Damage Amp | Supreme Cell gets 12% Damage Amp" },
                { level: 3, effect: "18% Damage Amp | Supreme Cell gets 30% Damage Amp" },
                { level: 4, effect: "28% Damage Amp | Supreme Cell gets 50% Damage Amp; Gain a second Supreme" }
            ]
        },
        "The Champ": {
            name: "The Champ",
            type: "Origin",
            description: "The Champ's victories against players grant Poro-fans equal to his star level. On loss, Poro-fans prevent 1 Tactician damage each, then lose all of your Poro-fans.",
            breakpoints: []
        },
        "The Crew": {
            name: "The Crew",
            type: "Origin",
            description: "Crew champions gain 5% Health and Attack Speed for each Crew member fielded.",
            breakpoints: [
                { level: "1x 3-Star", effect: "+1 XP per paid reroll, Crew unit odds never drop with player level" },
                { level: "2x 3-Star", effect: "+1 free reroll per round" },
                { level: "3x 3-Star", effect: "Deal 280 damage to fire a rocket dealing 75" },
                { level: "4x 3-Star", effect: "Fire rockets 2.5% more often per player level" },
                { level: "5x 3-Star", effect: "Fire the Planet Cracker" }
            ]
        },
        "Wraith": {
            name: "Wraith",
            type: "Origin",
            description: "Every 4 seconds, the Shadow Realm strikes the 3 closest enemies, dealing total magic damage equal to a portion of damage dealt by Wraiths since the last trigger.",
            breakpoints: [
                { level: 2, effect: "20% damage" },
                { level: 4, effect: "40% damage" },
                { level: 6, effect: "60% damage" }
            ]
        },
        "Bastion": {
            name: "Bastion",
            type: "Class",
            description: "Your team gains 10 Armor and Magic Resist. Bastions gain more, and the value doubles in the first 10 seconds of combat.",
            breakpoints: [
                { level: 2, effect: "18 Armor and Magic Resist" },
                { level: 4, effect: "40 Armor and Magic Resist" },
                { level: 6, effect: "75 Armor and Magic Resist for Bastions, Non-Bastions gain an additional 25" }
            ]
        },
        "Duelist": {
            name: "Duelist",
            type: "Class",
            description: "Duelists gain Attack Speed on each attack, stacking up to 12 times.",
            breakpoints: [
                { level: 2, effect: "4% Attack Speed per stack" },
                { level: 4, effect: "7% Attack Speed per stack" },
                { level: 6, effect: "10% Attack Speed per stack, 12% Damage Reduction" }
            ]
        },
        "Edgelord": {
            name: "Edgelord",
            type: "Class",
            description: "Edgelords gain Omnivamp and Attack Damage. While attacking enemies under 50% Health, they gain 40% Attack Speed.",
            breakpoints: [
                { level: 2, effect: "10% Omnivamp, 15% Attack Damage" },
                { level: 4, effect: "12% Omnivamp, 40% Attack Damage" },
                { level: 6, effect: "15% Omnivamp, 60% Attack Damage" }
            ]
        },
        "Executioner": {
            name: "Executioner",
            type: "Class",
            description: "Executioners gain Critical Strike Chance and Critical Strike Damage. Their Ability can critically strike.",
            breakpoints: [
                { level: 2, effect: "25% Crit Chance, 10% Crit Damage" },
                { level: 3, effect: "35% Crit Chance, 12% Crit Damage" },
                { level: 4, effect: "50% Crit Chance, 18% Crit Damage" },
                { level: 5, effect: "55% Crit Chance, 28% Crit Damage" }
            ]
        },
        "Heavyweight": {
            name: "Heavyweight",
            type: "Class",
            description: "Your team gains 100 Health. Heavyweights gain additional bonus Health, and Attack Damage equal to a percentage of their Health.",
            breakpoints: [
                { level: 2, effect: "20% additional Health, 0.2% of Health to AD" },
                { level: 4, effect: "40% additional Health, 0.4% of Health to AD" },
                { level: 6, effect: "65% additional Health, 0.6% of Health to AD" }
            ]
        },
        "Juggernaut": {
            name: "Juggernaut",
            type: "Class",
            description: "Juggernauts gain Durability, increased above 50% health. When a Juggernaut dies, other Juggernauts heal for 10% of their max Health.",
            breakpoints: [
                { level: 2, effect: "15% or 25% Damage Reduction" },
                { level: 4, effect: "20% or 30% Damage Reduction" },
                { level: 6, effect: "25% or 35% Damage Reduction" }
            ]
        },
        "Prodigy": {
            name: "Prodigy",
            type: "Class",
            description: "Your team gains Mana Regen. Prodigies gain more.",
            breakpoints: [
                { level: 2, effect: "1 Mana Regen for team, 3 for Prodigies" },
                { level: 3, effect: "1 Mana Regen for team, 4 for Prodigies" },
                { level: 4, effect: "1 Mana Regen for team, 6 for Prodigies" },
                { level: 5, effect: "1 Mana Regen for team, 7 for Prodigies, abilities heal ally for 12% of damage" }
            ]
        },
        "Protector": {
            name: "Protector",
            type: "Class",
            description: "Units gain 5% Durability while shielded. Once per combat at 50% Health, Protectors shield themselves and their closest ally. Shields stack.",
            breakpoints: [
                { level: 2, effect: "18% Health shield" },
                { level: 4, effect: "36% Health shield" },
                { level: 6, effect: "55% Health shield" }
            ]
        },
        "Sniper": {
            name: "Sniper",
            type: "Class",
            description: "Snipers gain Damage Amp, increased against targets farther away.",
            breakpoints: [
                { level: 2, effect: "13% Damage Amp; +3% per hex" },
                { level: 3, effect: "16% Damage Amp; +5% per hex" },
                { level: 4, effect: "22% Damage Amp; +7% per hex" },
                { level: 5, effect: "25% Damage Amp; +10% per hex" }
            ]
        },
        "Sorcerer": {
            name: "Sorcerer",
            type: "Class",
            description: "Sorcerers gain bonus Ability Power. When an enemy dies after being damaged by a Sorcerer, they deal a percentage of that enemy's maximum Health to another enemy.",
            breakpoints: [
                { level: 2, effect: "20 AP, 8% max Health damage to another enemy" },
                { level: 4, effect: "50 AP, 10% max Health damage to another enemy" },
                { level: 6, effect: "80 AP, 12% max Health damage to 2 enemies" }
            ]
        },
        "Strategist": {
            name: "Strategist",
            type: "Class",
            description: "Combat Start: Allies in the front 2 rows gain a shield for 15 seconds. Allies in the back 2 rows gain Damage Amp. Strategists gain triple.",
            breakpoints: [
                { level: 2, effect: "150 Shield, 4% Damage Amp" },
                { level: 3, effect: "225 Shield, 6% Damage Amp" },
                { level: 4, effect: "350 Shield, 10% Damage Amp" },
                { level: 5, effect: "450 Shield, 14% Damage Amp" }
            ]
        }
    },

    tiers: {
        S: [
            { name: 'Braum', cost: 1, apiName: 'TFT15_Braum', traits: ['The Champ', 'Luchador', 'Bastion'] },
            { name: 'Seraphine', cost: 5, apiName: 'TFT15_Seraphine', traits: ['Star Guardian', 'Prodigy'] },
            { name: 'Zyra', cost: 2, apiName: 'TFT15_Zyra', traits: ['Rosemother', 'Crystal Gambit'] },
            { name: 'Varus', cost: 4, apiName: 'TFT15_Varus', traits: ['Wraith', 'Sniper'] }
        ],
        A: [
            { name: 'Gwen', cost: 5, apiName: 'TFT15_Gwen', traits: ['Soul Fighter', 'Sorcerer'] },
            { name: 'Viego', cost: 5, apiName: 'TFT15_Viego', traits: ['Soul Fighter', 'Duelist'] },
            { name: 'Shen', cost: 5, apiName: 'TFT15_Shen', traits: ['The Crew', 'Edgelord', 'Bastion'] },
            { name: 'Jinx', cost: 4, apiName: 'TFT15_Jinx', traits: ['Star Guardian', 'Sniper'] },
            { name: 'Akali', cost: 4, apiName: 'TFT15_Akali', traits: ['Supreme Cells', 'Executioner'] },
            { name: 'Karma', cost: 3, apiName: 'TFT15_Karma', traits: ['Mighty Mech', 'Sorcerer'] }
        ],
        B: [
            { name: 'KSante', cost: 5, apiName: 'TFT15_KSante', traits: ['Wraith', 'Protector'] },
            { name: 'Yuumi', cost: 4, apiName: 'TFT15_Yuumi', traits: ['Battle Academia', 'Prodigy'] },
            { name: 'Volibear', cost: 4, apiName: 'TFT15_Volibear', traits: ['Luchador', 'Edgelord'] },
            { name: 'Senna', cost: 4, apiName: 'TFT15_Senna', traits: ['Mighty Mech', 'Executioner'] },
            { name: 'Swain', cost: 3, apiName: 'TFT15_Swain', traits: ['Crystal Gambit', 'Bastion'] },
            { name: 'Ziggs', cost: 3, apiName: 'TFT15_Ziggs', traits: ['The Crew', 'Strategist'] },
            { name: 'Janna', cost: 2, apiName: 'TFT15_Janna', traits: ['Crystal Gambit', 'Strategist', 'Protector'] }
        ],
        C: [
            { name: 'TwistedFate', cost: 3, apiName: 'TFT15_TwistedFate', traits: ['Rogue Captain', 'The Crew'] },
            { name: 'Darius', cost: 3, apiName: 'TFT15_Darius', traits: ['Supreme Cells', 'Heavyweight'] },
            { name: 'Ashe', cost: 4, apiName: 'TFT15_Ashe', traits: ['Crystal Gambit', 'Duelist'] },
            { name: 'Jhin', cost: 4, apiName: 'TFT15_Jhin', traits: ['Wraith', 'Sniper'] },
            { name: 'KaiSa', cost: 4, apiName: 'TFT15_KaiSa', traits: ['Supreme Cells', 'Duelist'] },
            { name: 'Sett', cost: 2, apiName: 'TFT15_Sett', traits: ['Soul Fighter', 'Juggernaut'] }
        ],
        D: [
            { name: 'Garen', cost: 1, apiName: 'TFT15_Garen', traits: ['Battle Academia', 'Bastion'] },
            { name: 'Yone', cost: 5, apiName: 'TFT15_Yone', traits: ['Mighty Mech', 'Edgelord'] }
        ]
    },

    /**
     * Get all champions from all tiers
     * @returns {Array} Array of all champions
     */
    getAllChampions() {
        return Object.values(this.tiers).flat();
    },

    /**
     * Find champion by name
     * @param {string} name - Champion name
     * @returns {Object|null} Champion object or null
     */
    findChampionByName(name) {
        const allChamps = this.getAllChampions();
        return allChamps.find(champ =>
            champ.name.toLowerCase() === name.toLowerCase()
        ) || null;
    },

    /**
     * Get champions by tier
     * @param {string} tier - Tier letter (S, A, B, C, D)
     * @returns {Array} Array of champions in tier
     */
    getChampionsByTier(tier) {
        return this.tiers[tier.toUpperCase()] || [];
    },

    /**
     * Get champions by cost
     * @param {number} cost - Champion cost (1-5)
     * @returns {Array} Array of champions with specified cost
     */
    getChampionsByCost(cost) {
        return this.getAllChampions().filter(champ => champ.cost === cost);
    }
};

// Freeze data to prevent modifications
Object.freeze(TFT_DATA);
