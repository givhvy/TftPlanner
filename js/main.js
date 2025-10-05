/**
 * Main Application Entry Point
 * Initializes all modules when DOM is ready
 */

// Current active tab
let currentTab = 'comps';

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

        // Initialize tab switching
        initTabSwitching();
        console.log('✓ Tab switching initialized');

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

// Tab switching functionality
function initTabSwitching() {
    const tabs = document.querySelectorAll('.tab');
    const content = document.getElementById('tierContent');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabName = tab.dataset.tab;

            // Update active tab
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // Switch content
            currentTab = tabName;
            renderTabContent(tabName, content);
        });
    });
}

// Render content based on tab
function renderTabContent(tabName, container) {
    container.innerHTML = '';

    switch(tabName) {
        case 'comps':
            TFT_UI.renderTierList(TFT_DATA.tiers);
            break;
        case 'items':
            renderItemsTierList(container);
            break;
        case 'augments':
            renderAugmentsTierList(container);
            break;
        default:
            container.innerHTML = '<p style="text-align:center; padding:2rem; color:#888;">Coming soon...</p>';
    }
}

// Render items tier list
function renderItemsTierList(container) {
    Object.entries(ITEMS_DATA.tiers).forEach(([tier, items]) => {
        const tierRow = document.createElement('div');
        tierRow.className = 'tier-row';

        // Tier badge
        const badge = document.createElement('div');
        badge.className = `tier-badge tier-${tier.toLowerCase()}`;
        badge.innerHTML = `
            ${tier}
            <div class="tier-label">${tier} TIER</div>
        `;

        // Items container
        const itemsContainer = document.createElement('div');
        itemsContainer.className = 'champions-container';

        items.forEach(item => {
            const itemCard = document.createElement('div');
            itemCard.className = 'champion-card';

            const img = document.createElement('img');
            img.src = ITEMS_API.getItemImageUrl(item.id);
            img.alt = item.name;
            img.className = 'item-icon';
            img.onerror = function() {
                this.src = ITEMS_API.generatePlaceholder(item.name);
            };

            const name = document.createElement('div');
            name.className = 'champion-name';
            name.textContent = item.name;

            itemCard.appendChild(img);
            itemCard.appendChild(name);
            itemsContainer.appendChild(itemCard);
        });

        tierRow.appendChild(badge);
        tierRow.appendChild(itemsContainer);
        container.appendChild(tierRow);
    });
}

// Render augments tier list
function renderAugmentsTierList(container) {
    Object.entries(AUGMENTS_DATA.tiers).forEach(([tier, augments]) => {
        const tierRow = document.createElement('div');
        tierRow.className = 'tier-row';

        // Tier badge
        const badge = document.createElement('div');
        badge.className = `tier-badge tier-${tier.toLowerCase()}`;
        badge.innerHTML = `
            ${tier}
            <div class="tier-label">${tier} TIER</div>
        `;

        // Augments container
        const augmentsContainer = document.createElement('div');
        augmentsContainer.className = 'champions-container';

        augments.forEach(augment => {
            const augmentCard = document.createElement('div');
            augmentCard.className = 'champion-card';

            const img = document.createElement('img');
            img.src = AUGMENTS_API.getAugmentImageUrl(augment.id);
            img.alt = augment.name;
            img.className = 'item-icon';
            img.onerror = function() {
                this.src = AUGMENTS_API.generatePlaceholder(augment.name);
            };

            const name = document.createElement('div');
            name.className = 'champion-name';
            name.textContent = augment.name;

            const type = document.createElement('div');
            type.className = 'augment-type';
            type.textContent = augment.type;
            type.style.fontSize = '0.7rem';
            type.style.color = augment.type === 'Prismatic' ? '#f4c542' : augment.type === 'Gold' ? '#ffa502' : '#aaa';

            augmentCard.appendChild(img);
            augmentCard.appendChild(name);
            augmentCard.appendChild(type);
            augmentsContainer.appendChild(augmentCard);
        });

        tierRow.appendChild(badge);
        tierRow.appendChild(augmentsContainer);
        container.appendChild(tierRow);
    });
}

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
