/**
 * TFT Set 15: K.O. Coliseum Champion Data
 * Updated for Patch 15.5
 */

const TFT_DATA = {
    tiers: {
        S: [
            { name: 'Braum', cost: 1, apiName: 'TFT15_Braum', traits: ['Guardian', 'Sentinel'] },
            { name: 'Seraphine', cost: 5, apiName: 'TFT15_Seraphine', traits: ['Spellweaver', 'Support'] },
            { name: 'Zyra', cost: 2, apiName: 'TFT15_Zyra', traits: ['Spellweaver', 'Verdant'] },
            { name: 'Varus', cost: 4, apiName: 'TFT15_Varus', traits: ['Sniper', 'Verdant'] }
        ],
        A: [
            { name: 'Gwen', cost: 5, apiName: 'TFT15_Gwen', traits: ['Mythic', 'Sniper'] },
            { name: 'Viego', cost: 5, apiName: 'TFT15_Viego', traits: ['Mythic', 'Conqueror'] },
            { name: 'Shen', cost: 5, apiName: 'TFT15_Shen', traits: ['Guardian', 'Martial'] },
            { name: 'Jinx', cost: 4, apiName: 'TFT15_Jinx', traits: ['Pyro', 'Sniper'] },
            { name: 'Akali', cost: 4, apiName: 'TFT15_Akali', traits: ['Shadow', 'Martial'] },
            { name: 'Karma', cost: 3, apiName: 'TFT15_Karma', traits: ['Guardian', 'Spellweaver'] }
        ],
        B: [
            { name: 'KSante', cost: 5, apiName: 'TFT15_KSante', traits: ['Guardian', 'Bruiser'] },
            { name: 'Yuumi', cost: 4, apiName: 'TFT15_Yuumi', traits: ['Mythic', 'Support'] },
            { name: 'Volibear', cost: 4, apiName: 'TFT15_Volibear', traits: ['Conqueror', 'Bruiser'] },
            { name: 'Senna', cost: 4, apiName: 'TFT15_Senna', traits: ['Shadow', 'Sniper'] },
            { name: 'Swain', cost: 3, apiName: 'TFT15_Swain', traits: ['Shadow', 'Spellweaver'] },
            { name: 'Ziggs', cost: 3, apiName: 'TFT15_Ziggs', traits: ['Pyro', 'Spellweaver'] },
            { name: 'Janna', cost: 2, apiName: 'TFT15_Janna', traits: ['Wind', 'Support'] }
        ],
        C: [
            { name: 'TwistedFate', cost: 3, apiName: 'TFT15_TwistedFate', traits: ['Mythic', 'Spellweaver'] },
            { name: 'Darius', cost: 3, apiName: 'TFT15_Darius', traits: ['Conqueror', 'Sentinel'] },
            { name: 'Ashe', cost: 4, apiName: 'TFT15_Ashe', traits: ['Wind', 'Sniper'] },
            { name: 'Jhin', cost: 4, apiName: 'TFT15_Jhin', traits: ['Pyro', 'Sniper'] },
            { name: 'KaiSa', cost: 4, apiName: 'TFT15_KaiSa', traits: ['Wind', 'Martial'] },
            { name: 'Sett', cost: 2, apiName: 'TFT15_Sett', traits: ['Bruiser', 'Martial'] }
        ],
        D: [
            { name: 'Garen', cost: 1, apiName: 'TFT15_Garen', traits: ['Guardian', 'Sentinel'] },
            { name: 'Yone', cost: 5, apiName: 'TFT15_Yone', traits: ['Wind', 'Duelist'] }
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
