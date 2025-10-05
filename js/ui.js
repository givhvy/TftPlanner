/**
 * UI Rendering and Interaction Handler
 */

const TFT_UI = {
    /**
     * Create a champion icon element
     * @param {Object} champion - Champion data object
     * @returns {HTMLElement} Champion icon div element
     */
    createChampionIcon(champion) {
        const icon = document.createElement('div');
        icon.className = `champion-icon cost-${champion.cost}`;
        icon.setAttribute('data-champion', champion.name);
        icon.onclick = () => TFT_MODAL.show(champion);

        // Create image
        const img = document.createElement('img');
        img.src = TFT_API.getChampionImageUrl(champion.apiName);
        img.alt = champion.name;
        img.loading = 'lazy';

        // Setup fallback handling
        TFT_API.setupImageFallbacks(img, champion);

        // Create cost badge
        const badge = document.createElement('div');
        badge.className = 'cost-badge';
        badge.textContent = '★'.repeat(champion.cost);

        icon.appendChild(img);
        icon.appendChild(badge);

        return icon;
    },

    /**
     * Create a tier row with champions
     * @param {string} tier - Tier letter (S, A, B, C, D)
     * @param {Array} champions - Array of champions in tier
     * @returns {HTMLElement} Tier row div element
     */
    createTierRow(tier, champions) {
        const tierRow = document.createElement('div');
        tierRow.className = 'tier-row';
        tierRow.setAttribute('data-tier', tier);

        // Create tier badge
        const tierBadge = document.createElement('div');
        tierBadge.className = `tier-badge tier-${tier.toLowerCase()}`;
        tierBadge.innerHTML = `${tier}<div class="tier-label">${tier} Tier</div>`;

        // Create champions container
        const championsContainer = document.createElement('div');
        championsContainer.className = 'champions-container';

        // Add champions
        champions.forEach(champion => {
            championsContainer.appendChild(this.createChampionIcon(champion));
        });

        tierRow.appendChild(tierBadge);
        tierRow.appendChild(championsContainer);

        return tierRow;
    },

    /**
     * Create situational tier row
     * @returns {HTMLElement} Situational tier row
     */
    createSituationalRow() {
        const situationalRow = document.createElement('div');
        situationalRow.className = 'tier-row';
        situationalRow.innerHTML = `
            <div class="tier-badge tier-d">
                <div class="situational-badge">SITUATIONAL</div>
            </div>
            <div class="champions-container">
                <div style="color: #666; text-align: center; width: 100%;">
                    Comps that work in specific situations or with perfect items
                </div>
            </div>
        `;
        return situationalRow;
    },

    /**
     * Render the complete tier list
     */
    renderTierList() {
        const content = document.getElementById('tierContent');
        content.innerHTML = '';

        // Render each tier
        Object.entries(TFT_DATA.tiers).forEach(([tier, champions]) => {
            content.appendChild(this.createTierRow(tier, champions));
        });

        // Add situational tier
        content.appendChild(this.createSituationalRow());
    },

    /**
     * Filter champions based on search term
     * @param {string} searchTerm - Search input value
     */
    filterChampions(searchTerm) {
        const term = searchTerm.toLowerCase().trim();
        const icons = document.querySelectorAll('.champion-icon');

        icons.forEach(icon => {
            const championName = icon.getAttribute('data-champion').toLowerCase();
            const matches = championName.includes(term);
            icon.style.display = matches ? 'block' : 'none';
        });
    },

    /**
     * Setup search functionality with debouncing
     */
    setupSearch() {
        const searchBox = document.getElementById('searchBox');
        let debounceTimer;

        searchBox.addEventListener('input', (e) => {
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => {
                this.filterChampions(e.target.value);
            }, CONFIG.ui.searchDebounceMs);
        });
    },

    /**
     * Setup tab switching
     */
    setupTabs() {
        const tabs = document.querySelectorAll('.tab');

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // Remove active from all tabs
                tabs.forEach(t => t.classList.remove('active'));

                // Add active to clicked tab
                tab.classList.add('active');

                // Get tab type
                const tabType = tab.getAttribute('data-tab');

                // Handle tab switching logic
                console.log(`Switched to ${tabType} tab`);
                // TODO: Implement different views for items and augments
            });
        });
    },

    /**
     * Update patch info
     */
    updatePatchInfo() {
        const patchVersion = document.getElementById('patchVersion');
        const lastUpdated = document.getElementById('lastUpdated');

        if (patchVersion) {
            patchVersion.textContent = CONFIG.tft.patch;
        }

        // Calculate last updated time (mock implementation)
        if (lastUpdated) {
            lastUpdated.textContent = '15 Hours Ago';
        }
    },

    /**
     * Initialize UI
     */
    init() {
        this.renderTierList();
        this.setupSearch();
        this.setupTabs();
        this.updatePatchInfo();
    }
};
