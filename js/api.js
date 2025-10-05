/**
 * API Handler for fetching champion images and data
 */

const TFT_API = {
    /**
     * Get champion image URL from Community Dragon (TFT Set 15)
     * @param {string} apiName - Champion API name (e.g., 'TFT15_Braum')
     * @returns {string} Full URL to champion image
     */
    getChampionImageUrl(apiName) {
        // Community Dragon format: /characters/{name}/hud/{name}_square.tft_set15.png
        const lowerName = apiName.toLowerCase();
        return `https://raw.communitydragon.org/latest/game/assets/characters/${lowerName}/hud/${lowerName}_square.tft_set15.png`;
    },

    /**
     * Get fallback champion image URL from Data Dragon
     * @param {string} championName - Champion name without prefix
     * @returns {string} Full URL to champion image
     */
    getFallbackImageUrl(championName) {
        return `${CONFIG.api.dataDragon}/img/champion/${championName}.png`;
    },

    /**
     * Get base game character icon
     * @param {string} championName - Champion name in lowercase
     * @returns {string} Full URL to character square icon
     */
    getCharacterSquareUrl(championName) {
        const lowerName = championName.toLowerCase();
        return `https://raw.communitydragon.org/latest/game/assets/characters/${lowerName}/hud/${lowerName}_square.png`;
    },

    /**
     * Generate SVG placeholder for champion
     * @param {string} championName - Champion name
     * @returns {string} Data URL for SVG placeholder
     */
    generatePlaceholder(championName) {
        return `data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="64" height="64"%3E%3Crect fill="%23333" width="64" height="64"/%3E%3Ctext x="50%25" y="50%25" fill="%23fff" font-size="10" text-anchor="middle" dominant-baseline="middle"%3E${championName}%3C/text%3E%3C/svg%3E`;
    },

    /**
     * Setup image error handling with multiple fallbacks
     * @param {HTMLImageElement} img - Image element
     * @param {Object} champion - Champion data object
     */
    setupImageFallbacks(img, champion) {
        const championName = champion.apiName.replace('TFT15_', '');
        let fallbackAttempt = 0;

        img.onerror = function() {
            fallbackAttempt++;

            switch(fallbackAttempt) {
                case 1:
                    // Fallback 1: Try Data Dragon
                    this.src = TFT_API.getFallbackImageUrl(championName);
                    break;
                case 2:
                    // Fallback 2: Try character square from base game
                    this.src = TFT_API.getCharacterSquareUrl(championName);
                    break;
                case 3:
                    // Final fallback: SVG placeholder
                    this.src = TFT_API.generatePlaceholder(champion.name);
                    this.onerror = null; // Prevent infinite loop
                    break;
            }
        };
    },

    /**
     * Preload champion images
     * @param {Array} champions - Array of champion objects
     * @returns {Promise} Promise that resolves when images are loaded
     */
    async preloadImages(champions) {
        const promises = champions.map(champ => {
            return new Promise((resolve) => {
                const img = new Image();
                img.onload = resolve;
                img.onerror = resolve; // Resolve even on error
                img.src = this.getChampionImageUrl(champ.apiName);
            });
        });

        return Promise.all(promises);
    }
};
