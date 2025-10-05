/**
 * TFT Set 15 Items Data
 * Organized by tier ranking
 */

const ITEMS_DATA = {
    tiers: {
        S: [
            { name: "Deathblade", id: "TFT_Item_Deathblade", tier: "S" },
            { name: "Bloodthirster", id: "TFT_Item_Bloodthirster", tier: "S" },
            { name: "Infinity Edge", id: "TFT_Item_InfinityEdge", tier: "S" },
            { name: "Guinsoo's Rageblade", id: "TFT_Item_GuinsoosRageblade", tier: "S" },
            { name: "Last Whisper", id: "TFT_Item_LastWhisper", tier: "S" },
            { name: "Archangel's Staff", id: "TFT_Item_ArchangelsStaff", tier: "S" },
            { name: "Blue Buff", id: "TFT_Item_BlueBuff", tier: "S" },
            { name: "Jeweled Gauntlet", id: "TFT_Item_JeweledGauntlet", tier: "S" },
            { name: "Morellonomicon", id: "TFT_Item_Morellonomicon", tier: "S" },
            { name: "Statikk Shiv", id: "TFT_Item_StatikkShiv", tier: "S" },
            { name: "Spear of Shojin", id: "TFT_Item_SpearOfShojin", tier: "S" },
        ],
        A: [
            { name: "Giant Slayer", id: "TFT_Item_MadredsBloodrazor", tier: "A" },
            { name: "Edge of Night", id: "TFT_Item_GuardianAngel", tier: "A" },
            { name: "Hextech Gunblade", id: "TFT_Item_HextechGunblade", tier: "A" },
            { name: "Quicksilver", id: "TFT_Item_Quicksilver", tier: "A" },
            { name: "Titan's Resolve", id: "TFT_Item_TitansResolve", tier: "A" },
            { name: "Hand of Justice", id: "TFT_Item_UnstableConcoction", tier: "A" },
            { name: "Chalice of Power", id: "TFT_Item_Chalice", tier: "A" },
            { name: "Ionic Spark", id: "TFT_Item_IonicSpark", tier: "A" },
            { name: "Protector's Vow", id: "TFT_Item_FrozenHeart", tier: "A" },
            { name: "Redemption", id: "TFT_Item_Redemption", tier: "A" },
            { name: "Adaptive Helm", id: "TFT_Item_AdaptiveHelm", tier: "A" },
            { name: "Sunfire Cape", id: "TFT_Item_RedBuff", tier: "A" },
        ],
        B: [
            { name: "Thief's Gloves", id: "TFT_Item_ThiefsGloves", tier: "B" },
            { name: "Runaan's Hurricane", id: "TFT_Item_RunaansHurricane", tier: "B" },
            { name: "Bramble Vest", id: "TFT_Item_BrambleVest", tier: "B" },
            { name: "Dragon's Claw", id: "TFT_Item_DragonsClaw", tier: "B" },
            { name: "Gargoyle Stoneplate", id: "TFT_Item_GargoyleStoneplate", tier: "B" },
            { name: "Shroud of Stillness", id: "TFT_Item_Shroud", tier: "B" },
            { name: "Sterak's Gage", id: "TFT_Item_SteraksGage", tier: "B" },
            { name: "Warmog's Armor", id: "TFT_Item_WarmogsArmor", tier: "B" },
            { name: "Crownguard", id: "TFT_Item_Crownguard", tier: "B" },
            { name: "Evenshroud", id: "TFT_Item_Evenshroud", tier: "B" },
        ],
        C: [
            { name: "Tactician's Crown", id: "TFT_Item_ForceOfNature", tier: "C" },
            { name: "Zeke's Herald", id: "TFT_Item_ZekesHerald", tier: "C" },
            { name: "Locket of Iron Solari", id: "TFT_Item_LocketOfTheIronSolari", tier: "C" },
            { name: "Rabadon's Deathcap", id: "TFT_Item_RabadonsDeathcap", tier: "C" },
        ],
    }
};

// API helper for items
const ITEMS_API = {
    getItemImageUrl(itemId) {
        const imageName = `${itemId}.png`;
        return `https://ddragon.leagueoflegends.com/cdn/15.5.1/img/tft-item/${imageName}`;
    },

    generatePlaceholder(name) {
        const canvas = document.createElement('canvas');
        canvas.width = 48;
        canvas.height = 48;
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = '#2a2a2a';
        ctx.fillRect(0, 0, 48, 48);
        ctx.fillStyle = '#fff';
        ctx.font = 'bold 20px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(name.charAt(0), 24, 24);
        return canvas.toDataURL();
    }
};
