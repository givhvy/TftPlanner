/**
 * Modal Handler for Champion Details
 */

const TFT_MODAL = {
    modal: null,
    modalBody: null,
    closeBtn: null,

    /**
     * Initialize modal elements and event listeners
     */
    init() {
        this.modal = document.getElementById('champModal');
        this.modalBody = document.getElementById('modalBody');
        this.closeBtn = document.getElementById('modalCloseBtn');

        // Close button click
        if (this.closeBtn) {
            this.closeBtn.addEventListener('click', () => this.close());
        }

        // Click outside modal to close
        if (this.modal) {
            this.modal.addEventListener('click', (e) => {
                if (e.target === this.modal) {
                    this.close();
                }
            });
        }

        // ESC key to close
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.modal.classList.contains('active')) {
                this.close();
            }
        });
    },

    /**
     * Generate modal content HTML
     * @param {Object} champion - Champion data object
     * @returns {string} HTML string for modal content
     */
    generateModalContent(champion) {
        const imgUrl = TFT_API.getChampionImageUrl(champion.apiName);
        const placeholder = TFT_API.generatePlaceholder(champion.name);

        const traitsHTML = champion.traits
            ? champion.traits.map(trait => `
                <div class="trait-badge">⚔️ ${trait}</div>
              `).join('')
            : '<div class="trait-badge">⚔️ 3 Trait 1</div><div class="trait-badge">🛡️ 2 Trait 2</div>';

        return `
            <div class="modal-header">
                <div class="modal-champion-large">
                    <img src="${imgUrl}"
                         alt="${champion.name}"
                         onerror="this.src='${placeholder}'">
                </div>
                <div class="modal-info">
                    <h2>${champion.name} Comp</h2>
                    <div class="playstyle">
                        PLAYSTYLE: ${champion.cost}-COST CARRY
                    </div>
                    <div class="traits-row">
                        ${traitsHTML}
                    </div>
                </div>
            </div>
            <div class="comp-details">
                <div class="detail-section">
                    <h3>Recommended Items</h3>
                    <p>Best items for ${champion.name} based on current meta</p>
                    <ul>
                        <li>Infinity Edge</li>
                        <li>Last Whisper</li>
                        <li>Runaan's Hurricane</li>
                    </ul>
                </div>
                <div class="detail-section">
                    <h3>Positioning</h3>
                    <p>Optimal board placement for maximum effectiveness</p>
                    <ul>
                        <li>Place ${champion.name} in the backline</li>
                        <li>Position behind frontline tanks</li>
                        <li>Keep safe from assassins</li>
                    </ul>
                </div>
                <div class="detail-section">
                    <h3>When to Play</h3>
                    <p>Look for ${champion.name} early and build around synergies</p>
                    <ul>
                        <li>Strong in early game</li>
                        <li>Requires ${champion.cost}-cost units</li>
                        <li>Best with ${champion.traits ? champion.traits[0] : 'trait'} items</li>
                    </ul>
                </div>
            </div>
        `;
    },

    /**
     * Show modal with champion details
     * @param {Object} champion - Champion data object
     */
    show(champion) {
        if (!this.modal || !this.modalBody) {
            console.error('Modal elements not initialized');
            return;
        }

        // Generate and set content
        this.modalBody.innerHTML = this.generateModalContent(champion);

        // Show modal
        this.modal.classList.add('active');

        // Prevent body scroll
        document.body.style.overflow = 'hidden';
    },

    /**
     * Close modal
     */
    close() {
        if (!this.modal) return;

        this.modal.classList.remove('active');

        // Restore body scroll
        document.body.style.overflow = '';
    }
};
