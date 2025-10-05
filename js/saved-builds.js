/**
 * TFT Saved Builds Display
 * Load and manage saved team compositions
 */

// Load and display all saved builds
function loadSavedBuilds() {
    const builds = JSON.parse(localStorage.getItem('tft_builds') || '[]');
    const grid = document.getElementById('buildsGrid');
    const emptyState = document.getElementById('emptyState');

    if (builds.length === 0) {
        grid.style.display = 'none';
        emptyState.style.display = 'block';
        return;
    }

    grid.style.display = 'grid';
    emptyState.style.display = 'none';
    grid.innerHTML = '';

    builds.forEach(build => {
        const card = createBuildCard(build);
        grid.appendChild(card);
    });
}

// Create a build card
function createBuildCard(build) {
    const card = document.createElement('div');
    card.className = 'build-card';

    // Header with build info and actions
    const header = document.createElement('div');
    header.className = 'build-header';

    const info = document.createElement('div');
    info.className = 'build-info';

    const title = document.createElement('h3');
    title.textContent = build.name;

    const meta = document.createElement('div');
    meta.className = 'build-meta';

    const date = new Date(build.date);
    const dateStr = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

    meta.innerHTML = `
        <span>📅 ${dateStr}</span>
        <span>🎮 Patch ${build.patch}</span>
    `;

    info.appendChild(title);
    info.appendChild(meta);

    const actions = document.createElement('div');
    actions.className = 'build-actions';

    const shareBtn = document.createElement('button');
    shareBtn.className = 'btn-icon-small';
    shareBtn.innerHTML = '🔗';
    shareBtn.title = 'Share';
    shareBtn.onclick = () => shareBuild(build);

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn-icon-small delete';
    deleteBtn.innerHTML = '🗑️';
    deleteBtn.title = 'Delete';
    deleteBtn.onclick = () => deleteBuild(build.id);

    actions.appendChild(shareBtn);
    actions.appendChild(deleteBtn);

    header.appendChild(info);
    header.appendChild(actions);

    // Mini board preview
    const miniBoard = createMiniBoard(build.units);

    // Traits summary
    const traitsSummary = createTraitsSummary(build.units);

    // Stats and load button
    const stats = createBuildStats(build);

    card.appendChild(header);
    card.appendChild(miniBoard);
    card.appendChild(traitsSummary);
    card.appendChild(stats);

    return card;
}

// Create mini hexagon board preview
function createMiniBoard(units) {
    const board = document.createElement('div');
    board.className = 'mini-board';

    for (let i = 0; i < 28; i++) {
        const cell = document.createElement('div');
        cell.className = 'mini-hex';

        const unit = units[i];
        if (unit) {
            cell.classList.add('has-unit');
            const img = document.createElement('img');
            img.src = TFT_API.getChampionImageUrl(unit.apiName);
            img.alt = unit.name;
            img.onerror = function() {
                this.src = TFT_API.generatePlaceholder(unit.name);
            };
            cell.appendChild(img);
        }

        board.appendChild(cell);
    }

    return board;
}

// Create traits summary
function createTraitsSummary(units) {
    const container = document.createElement('div');
    container.className = 'traits-summary';

    const traitsMap = new Map();

    units.forEach(unit => {
        if (!unit) return;
        unit.traits.forEach(trait => {
            traitsMap.set(trait, (traitsMap.get(trait) || 0) + 1);
        });
    });

    const sortedTraits = Array.from(traitsMap.entries())
        .sort((a, b) => b[1] - a[1])
        .slice(0, 6); // Show top 6 traits

    sortedTraits.forEach(([trait, count]) => {
        const badge = document.createElement('div');
        badge.className = `mini-trait ${count >= 2 ? 'active' : ''}`;
        badge.textContent = `${trait} (${count})`;
        container.appendChild(badge);
    });

    return container;
}

// Create build stats section
function createBuildStats(build) {
    const stats = document.createElement('div');
    stats.className = 'build-stats';

    const units = build.units.filter(u => u !== null);
    const unitCount = units.length;
    const totalGold = units.reduce((sum, u) => sum + u.cost, 0);

    const statGroup = document.createElement('div');
    statGroup.className = 'stat-group';

    statGroup.innerHTML = `
        <div class="stat">
            <span class="stat-icon">👥</span>
            <span>${unitCount}/10</span>
        </div>
        <div class="stat">
            <span class="stat-icon">💰</span>
            <span>${totalGold}</span>
        </div>
    `;

    const loadBtn = document.createElement('a');
    loadBtn.className = 'btn-load';
    loadBtn.textContent = 'Load Build';
    loadBtn.href = `builder.html?build=${btoa(JSON.stringify(build))}`;

    stats.appendChild(statGroup);
    stats.appendChild(loadBtn);

    return stats;
}

// Share build
function shareBuild(build) {
    const buildData = btoa(JSON.stringify(build));
    const url = `${window.location.origin}${window.location.pathname.replace('saved-builds.html', 'builder.html')}?build=${buildData}`;

    navigator.clipboard.writeText(url).then(() => {
        alert('Build link copied to clipboard! 🔗');
    }).catch(() => {
        // Fallback for browsers that don't support clipboard API
        const input = document.createElement('input');
        input.value = url;
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
        alert('Build link copied to clipboard! 🔗');
    });
}

// Delete build
function deleteBuild(buildId) {
    if (!confirm('Delete this build?')) return;

    let builds = JSON.parse(localStorage.getItem('tft_builds') || '[]');
    builds = builds.filter(b => b.id !== buildId);
    localStorage.setItem('tft_builds', JSON.stringify(builds));

    loadSavedBuilds();
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadSavedBuilds();
    console.log('✓ Saved builds loaded');
});
