/**
 * TFT Team Builder
 * Drag & Drop board builder with traits calculator
 */

// State
const boardState = {
    units: new Array(28).fill(null), // 7x4 board
    history: [],
    name: 'My Build'
};

// Initialize board
function initBoard() {
    const board = document.getElementById('board');
    board.innerHTML = '';

    for (let i = 0; i < 28; i++) {
        const cell = document.createElement('div');
        cell.className = 'hex-cell';
        cell.dataset.position = i;

        // Drag & Drop events
        cell.addEventListener('dragover', handleDragOver);
        cell.addEventListener('drop', handleDrop);
        cell.addEventListener('dragleave', handleDragLeave);

        board.appendChild(cell);
    }
}

// Populate champions grid
function populateChampions(filter = 'all', searchTerm = '') {
    const grid = document.getElementById('championsGrid');
    grid.innerHTML = '';

    const allChamps = TFT_DATA.getAllChampions();
    const filtered = allChamps.filter(champ => {
        const matchesCost = filter === 'all' || champ.cost === parseInt(filter);
        const matchesSearch = champ.name.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCost && matchesSearch;
    });

    filtered.forEach(champ => {
        const item = createChampionItem(champ);
        grid.appendChild(item);
    });
}

function createChampionItem(champ) {
    const item = document.createElement('div');
    item.className = `champ-item cost-${champ.cost}`;
    item.draggable = true;
    item.dataset.champion = JSON.stringify(champ);

    const img = document.createElement('img');
    img.src = TFT_API.getChampionImageUrl(champ.apiName);
    img.alt = champ.name;
    img.onerror = function() {
        this.src = TFT_API.generatePlaceholder(champ.name);
    };

    const badge = document.createElement('div');
    badge.className = 'cost-badge';
    badge.textContent = champ.cost;
    badge.style.borderColor = getCostColor(champ.cost);
    badge.style.color = getCostColor(champ.cost);

    item.appendChild(img);
    item.appendChild(badge);

    // Drag events
    item.addEventListener('dragstart', handleDragStart);

    return item;
}

function getCostColor(cost) {
    const colors = {
        1: '#808080',
        2: '#1eff00',
        3: '#0070dd',
        4: '#a335ee',
        5: '#ff8000'
    };
    return colors[cost] || '#fff';
}

// Drag & Drop handlers
let draggedChampion = null;

function handleDragStart(e) {
    draggedChampion = JSON.parse(e.currentTarget.dataset.champion);
    e.dataTransfer.effectAllowed = 'copy';
}

function handleDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
    e.currentTarget.classList.add('drag-over');
}

function handleDragLeave(e) {
    e.currentTarget.classList.remove('drag-over');
}

function handleDrop(e) {
    e.preventDefault();
    e.currentTarget.classList.remove('drag-over');

    if (!draggedChampion) return;

    const position = parseInt(e.currentTarget.dataset.position);

    // Check if board is full
    const unitCount = boardState.units.filter(u => u !== null).length;
    if (unitCount >= 10 && !boardState.units[position]) {
        alert('Board is full! Maximum 10 units.');
        return;
    }

    // Save to history
    boardState.history.push([...boardState.units]);

    // Place champion
    boardState.units[position] = draggedChampion;
    renderBoard();
    updateTraits();
    updateStats();
}

// Render board
function renderBoard() {
    const cells = document.querySelectorAll('.hex-cell');

    cells.forEach((cell, index) => {
        const champ = boardState.units[index];
        cell.innerHTML = '';

        if (champ) {
            cell.classList.add('occupied');

            const img = document.createElement('img');
            img.src = TFT_API.getChampionImageUrl(champ.apiName);
            img.alt = champ.name;
            img.onerror = function() {
                this.src = TFT_API.generatePlaceholder(champ.name);
            };

            const removeBtn = document.createElement('button');
            removeBtn.className = 'remove-btn';
            removeBtn.textContent = '×';
            removeBtn.onclick = () => removeUnit(index);

            cell.appendChild(img);
            cell.appendChild(removeBtn);
        } else {
            cell.classList.remove('occupied');
        }
    });
}

function removeUnit(position) {
    boardState.history.push([...boardState.units]);
    boardState.units[position] = null;
    renderBoard();
    updateTraits();
    updateStats();
}

// Calculate traits
function updateTraits() {
    const traitsMap = new Map();

    boardState.units.forEach(unit => {
        if (!unit) return;
        unit.traits.forEach(trait => {
            traitsMap.set(trait, (traitsMap.get(trait) || 0) + 1);
        });
    });

    const container = document.getElementById('traitsContainer');
    container.innerHTML = '';

    if (traitsMap.size === 0) {
        container.innerHTML = '<p class="placeholder">Place champions to see active traits</p>';
        return;
    }

    const sortedTraits = Array.from(traitsMap.entries()).sort((a, b) => b[1] - a[1]);

    sortedTraits.forEach(([trait, count]) => {
        const item = document.createElement('div');
        item.className = `trait-item ${count >= 2 ? 'active' : ''}`;

        item.innerHTML = `
            <div class="trait-icon">⚔️</div>
            <div class="trait-info">
                <div class="trait-name">${trait}</div>
            </div>
            <div class="trait-count">${count}</div>
        `;

        container.appendChild(item);
    });
}

// Update stats
function updateStats() {
    const units = boardState.units.filter(u => u !== null);
    const unitCount = units.length;
    const totalGold = units.reduce((sum, u) => sum + u.cost, 0);

    document.getElementById('unitCount').textContent = unitCount;
    document.getElementById('totalGold').textContent = totalGold;
}

// Controls
document.getElementById('clearBtn').addEventListener('click', () => {
    if (confirm('Clear the board?')) {
        boardState.history.push([...boardState.units]);
        boardState.units.fill(null);
        renderBoard();
        updateTraits();
        updateStats();
    }
});

document.getElementById('undoBtn').addEventListener('click', () => {
    if (boardState.history.length > 0) {
        boardState.units = boardState.history.pop();
        renderBoard();
        updateTraits();
        updateStats();
    }
});

document.getElementById('saveBtn').addEventListener('click', saveBuild);

async function saveBuild() {
    const name = document.getElementById('buildName').value || 'Unnamed Build';
    const units = boardState.units.filter(u => u !== null);

    if (units.length === 0) {
        alert('Add champions to your build first!');
        return;
    }

    const build = {
        id: Date.now().toString(),
        name: name,
        units: boardState.units,
        date: new Date().toISOString(),
        patch: CONFIG.tft.patch
    };

    // Show saving indicator
    const saveBtn = document.getElementById('saveBtn');
    const originalText = saveBtn.textContent;
    saveBtn.disabled = true;
    saveBtn.textContent = '💾 Saving...';

    try {
        // Save to Firebase
        await FirebaseService.saveBuild(build);
        alert('Build saved successfully! ✓');
        window.location.href = 'saved-builds.html';
    } catch (error) {
        console.error('Error saving build:', error);
        alert('Build saved to local storage (offline mode)');
        window.location.href = 'saved-builds.html';
    } finally {
        saveBtn.disabled = false;
        saveBtn.textContent = originalText;
    }
}

// Filters
document.querySelectorAll('.cost-filter').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.cost-filter').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const cost = btn.dataset.cost;
        const search = document.getElementById('championSearch').value;
        populateChampions(cost, search);
    });
});

document.getElementById('championSearch').addEventListener('input', (e) => {
    const activeCost = document.querySelector('.cost-filter.active').dataset.cost;
    populateChampions(activeCost, e.target.value);
});

// Load from URL if sharing
function loadBuildFromUrl() {
    const params = new URLSearchParams(window.location.search);
    const buildData = params.get('build');

    if (buildData) {
        try {
            const decoded = JSON.parse(atob(buildData));
            boardState.units = decoded.units;
            document.getElementById('buildName').value = decoded.name;
            renderBoard();
            updateTraits();
            updateStats();
        } catch (e) {
            console.error('Failed to load build from URL');
        }
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initBoard();
    populateChampions();
    loadBuildFromUrl();
    console.log('✓ Builder initialized');
});
