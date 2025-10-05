/**
 * Configuration file for TFT Academy
 * Contains API endpoints, settings, and constants
 */

const CONFIG = {
    // API Configuration
    api: {
        dataDragon: 'https://ddragon.leagueoflegends.com/cdn/15.5.1',
        communityDragon: 'https://raw.communitydragon.org/latest',
    },

    // TFT Set Information
    tft: {
        currentSet: 15,
        setName: 'K.O. Coliseum',
        patch: '15.5',
    },

    // Image paths
    paths: {
        champion: '/cdragon/tft/assets/tft-champion',
        trait: '/cdragon/tft/assets/tft-trait',
        item: '/cdragon/tft/assets/tft-item',
    },

    // UI Settings
    ui: {
        searchDebounceMs: 300,
        animationDuration: 200,
    },

    // Tier colors
    tierColors: {
        S: { gradient: 'linear-gradient(135deg, #ff4757, #ff6348)', border: '#ff4757' },
        A: { gradient: 'linear-gradient(135deg, #ffa502, #ff7f00)', border: '#ffa502' },
        B: { gradient: 'linear-gradient(135deg, #ffd700, #ffed4e)', border: '#ffd700' },
        C: { gradient: 'linear-gradient(135deg, #7bed9f, #2ed573)', border: '#7bed9f' },
        D: { gradient: 'linear-gradient(135deg, #70a1ff, #1e90ff)', border: '#70a1ff' },
    },

    // Cost colors
    costColors: {
        1: '#808080',
        2: '#1eff00',
        3: '#0070dd',
        4: '#a335ee',
        5: '#ff8000',
    }
};

// Freeze config to prevent modifications
Object.freeze(CONFIG);
