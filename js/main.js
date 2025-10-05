/**
 * Main Application Entry Point
 * Initializes all modules when DOM is ready
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('%c🔥 TFT Academy Loaded', 'color: #f4c542; font-size: 20px; font-weight: bold;');
    console.log(`%cSet ${CONFIG.tft.currentSet} - Patch ${CONFIG.tft.patch}`, 'color: #888;');

    // Initialize modules
    try {
        // Initialize UI
        TFT_UI.init();
        console.log('✓ UI initialized');

        // Initialize Modal
        TFT_MODAL.init();
        console.log('✓ Modal initialized');

        // Preload images for better performance (optional)
        const allChampions = TFT_DATA.getAllChampions();
        TFT_API.preloadImages(allChampions.slice(0, 10)) // Preload first 10
            .then(() => {
                console.log('✓ Initial images preloaded');
            })
            .catch(err => {
                console.warn('Image preloading failed:', err);
            });

        console.log('%c✓ Application ready', 'color: #2ed573; font-weight: bold;');

    } catch (error) {
        console.error('❌ Application initialization failed:', error);
    }
});

// Optional: Global error handler
window.addEventListener('error', (event) => {
    console.error('Global error:', event.error);
});

// Optional: Expose API for debugging (remove in production)
if (typeof window !== 'undefined') {
    window.TFT_DEBUG = {
        config: CONFIG,
        data: TFT_DATA,
        api: TFT_API,
        ui: TFT_UI,
        modal: TFT_MODAL
    };
    console.log('%cDebug mode: Access TFT_DEBUG for developer tools', 'color: #70a1ff;');
}
