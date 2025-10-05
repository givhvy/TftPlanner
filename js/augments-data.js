/**
 * TFT Set 15 Augments Data
 * Organized by tier ranking
 */

const AUGMENTS_DATA = {
    tiers: {
        S: [
            { name: "Adaptive Style", id: "TFT15_Augment_AdaptiveStyle", tier: "S", type: "Silver" },
            { name: "Aim For The Top!", id: "TFT15_Augment_AimForTheTop", tier: "S", type: "Silver" },
            { name: "All That Shimmers", id: "TFT9_Augment_AllThatShimmers", tier: "S", type: "Prismatic" },
            { name: "Delayed Start", id: "TFT9_Augment_DelayedStart", tier: "S", type: "Gold" },
            { name: "Nine Thousand Volts", id: "TFT9_Augment_NineThousandVolts", tier: "S", type: "Gold" },
            { name: "Schoolyard Justice", id: "TFT15_Augment_SchoolyardJustice", tier: "S", type: "Silver" },
            { name: "Rigged Shops+", id: "TFT15_Augment_RiggedShopsPlus", tier: "S", type: "Prismatic" },
            { name: "Silver Destiny", id: "TFT9_Augment_SilverDestiny", tier: "S", type: "Prismatic" },
        ],
        A: [
            { name: "Silver Destiny++", id: "TFT9_Augment_SilverDestinyPlus", tier: "A", type: "Prismatic" },
            { name: "Keepers I", id: "TFT9_Augment_KeepersI", tier: "A", type: "Silver" },
            { name: "Band of Thieves I", id: "TFT9_Augment_BandOfThievesI", tier: "A", type: "Silver" },
            { name: "Latent Forge", id: "TFT9_Augment_LongTimeCrafting", tier: "A", type: "Silver" },
            { name: "Eye For An Eye+", id: "TFT9_Augment_EyeForAnEyePlus", tier: "A", type: "Gold" },
            { name: "Second Wind I", id: "TFT9_Augment_SecondWindI", tier: "A", type: "Silver" },
            { name: "Kingslayer", id: "TFT9_Augment_Kingslayer", tier: "A", type: "Gold" },
            { name: "Over Encumbered", id: "TFT9_Augment_OverEncumbered", tier: "A", type: "Gold" },
            { name: "Stand United I", id: "TFT9_Augment_StandUnitedI", tier: "A", type: "Silver" },
            { name: "Tectonic Titan", id: "TFT9_Augment_TectonicTitan", tier: "A", type: "Gold" },
            { name: "Firesale", id: "TFT9_Augment_Firesale", tier: "A", type: "Gold" },
            { name: "Diversified Portfolio+", id: "TFT9_Augment_DiversifiedPortfolioPlus", tier: "A", type: "Gold" },
        ],
        B: [
            { name: "Best Friends I", id: "TFT9_Augment_BestFriendsI", tier: "B", type: "Silver" },
            { name: "Latent Crest", id: "TFT9_Augment_LatentCrest", tier: "B", type: "Silver" },
            { name: "Preparation I", id: "TFT9_Augment_PreparationI", tier: "B", type: "Silver" },
            { name: "Pandora's Items", id: "TFT9_Augment_PandorasItems", tier: "B", type: "Gold" },
            { name: "Pandora's Bench", id: "TFT9_Augment_PandorasBench", tier: "B", type: "Gold" },
            { name: "Rolling For Days I", id: "TFT9_Augment_RollingForDaysI", tier: "B", type: "Silver" },
            { name: "Component Buffet", id: "TFT9_Augment_CustomerIsAlwaysRight", tier: "B", type: "Silver" },
            { name: "Missed Connections", id: "TFT9_Augment_MissedConnections", tier: "B", type: "Silver" },
            { name: "Item Collector I", id: "TFT9_Augment_ItemCollectorI", tier: "B", type: "Silver" },
            { name: "Branching Out", id: "TFT9_Augment_BranchingOut", tier: "B", type: "Gold" },
        ],
        C: [
            { name: "Good For Something I", id: "TFT9_Augment_GoodForSomethingI", tier: "C", type: "Silver" },
            { name: "Titanic Titan", id: "TFT9_Augment_TitanicTitan", tier: "C", type: "Gold" },
            { name: "Ones Twos Three", id: "TFT9_Augment_OneTwosThree", tier: "C", type: "Silver" },
            { name: "Silver Spoon", id: "TFT9_Augment_SilverSpoon", tier: "C", type: "Silver" },
            { name: "Iron Assets", id: "TFT9_Augment_IronAssets", tier: "C", type: "Silver" },
        ],
    }
};

// API helper for augments
const AUGMENTS_API = {
    getAugmentImageUrl(augmentId) {
        // Extract filename from ID
        const parts = augmentId.split('_');
        const name = parts.slice(2).join('-');
        return `https://ddragon.leagueoflegends.com/cdn/15.5.1/img/tft-augment/${name}.png`;
    },

    generatePlaceholder(name) {
        const canvas = document.createElement('canvas');
        canvas.width = 48;
        canvas.height = 48;
        const ctx = canvas.getContext('2d');

        // Gradient background
        const gradient = ctx.createLinearGradient(0, 0, 48, 48);
        gradient.addColorStop(0, '#4a5568');
        gradient.addColorStop(1, '#2d3748');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 48, 48);

        // Border
        ctx.strokeStyle = '#718096';
        ctx.lineWidth = 2;
        ctx.strokeRect(1, 1, 46, 46);

        // Text
        ctx.fillStyle = '#fff';
        ctx.font = 'bold 16px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(name.charAt(0), 24, 24);

        return canvas.toDataURL();
    }
};
