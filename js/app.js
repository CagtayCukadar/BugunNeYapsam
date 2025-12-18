/**
 * BUGÜN NE YAPSAM - MAIN APPLICATION
 * Consolidated for standalone usage without a server.
 */

/* =========================================
   DATA: Ingredients
   ========================================= */
const ingredientCategories = {
    vegetable: {
        label: "Sebze",
        items: [
            { id: "domates", name: "Domates", icon: "🍅" },
            { id: "sogan", name: "Soğan", icon: "🧅" },
            { id: "kirmizi_sogan", name: "Kırmızı Soğan", icon: "🧅" },
            { id: "sarimsak", name: "Sarımsak", icon: "🧄" },
            { id: "biber", name: "Yeşil Biber", icon: "🌶️" },

            { id: "patates", name: "Patates", icon: "🥔" },

            { id: "havuc", name: "Havuç", icon: "🥕" },
            { id: "patlican", name: "Patlıcan", icon: "🍆" },
            { id: "kabak", name: "Kabak", icon: "🥒" },
            { id: "salatalik", name: "Salatalık", icon: "🥒" },
            { id: "ispanak", name: "Ispanak", icon: "🥬" },
            { id: "marul", name: "Marul", icon: "🥗" },
            { id: "roka", name: "Roka", icon: "🍃" },
            { id: "maydanoz", name: "Maydanoz", icon: "🌿" },
            { id: "dereotu", name: "Dereotu", icon: "🌿" },

            { id: "feslegen", name: "Fesleğen", icon: "🌿" },
            { id: "mantar", name: "Mantar", icon: "🍄" },
            { id: "karnabahar", name: "Karnabahar", icon: "🥦" },
            { id: "brokoli", name: "Brokoli", icon: "🥦" },
            { id: "lahana", name: "Lahana", icon: "🥬" },
            { id: "lahan_kirmizi", name: "Mor Lahana", icon: "🥬" },
            { id: "pirasa", name: "Pırasa", icon: "🥬" },
            { id: "kereviz", name: "Kereviz", icon: "🥔" },
            { id: "enginar", name: "Enginar", icon: "🥬" },
            { id: "bamya", name: "Bamya", icon: "🥬" },
            { id: "taze_fasulye", name: "Taze Fasulye", icon: "🥬" },
            { id: "misir", name: "Mısır", icon: "🌽" },
            { id: "bezelye", name: "Bezelye", icon: "🟢" },

            { id: "taze_sogan", name: "Taze Soğan", icon: "🧅" },
            { id: "yaprak", name: "Asma Yaprağı", icon: "🍃" },
            { id: "semizotu", name: "Semizotu", icon: "🌿" },
            { id: "bamya", name: "Bamya", icon: "🥬" }
        ]
    },
    fruit: {
        label: "Meyve",
        items: [
            { id: "limon", name: "Limon", icon: "🍋" },
            { id: "elma", name: "Elma", icon: "🍎" },
            { id: "muz", name: "Muz", icon: "🍌" },
            { id: "uzum", name: "Üzüm", icon: "🍇" },
            { id: "portakal", name: "Portakal", icon: "🍊" },

            { id: "cilek", name: "Çilek", icon: "🍓" },
            { id: "karpuz", name: "Karpuz", icon: "🍉" },

            { id: "kiraz", name: "Kiraz", icon: "🍒" },
            { id: "nar", name: "Nar", icon: "🥣" },



            { id: "incir", name: "İncir", icon: "🟣" },
            { id: "ayva", name: "Ayva", icon: "🟡" },

            { id: "kayisi", name: "Kayısı", icon: "🟠" },
        ]
    },
    meat: {
        label: "Et & Balık",
        items: [
            { id: "kiyma", name: "Dana Kıyma", icon: "🥩" },
            { id: "kusbasi", name: "Kuşbaşı Et", icon: "🥩" },

            { id: "ciger", name: "Ciğer", icon: "🥩" },
            { id: "tavuk_gogsu", name: "Tavuk Göğsü", icon: "🍗" },
            { id: "tavuk_but", name: "Tavuk But", icon: "🍗" },


            { id: "sucuk", name: "Sucuk", icon: "🌭" },

            { id: "sosis", name: "Sosis", icon: "🌭" },
            { id: "pastirma", name: "Pastırma", icon: "🥓" },

            { id: "yumurta", name: "Yumurta", icon: "🥚" },



        ]
    },
    dairy: {
        label: "Süt & Peynir",
        items: [
            { id: "sut", name: "Süt", icon: "🥛" },
            { id: "yogurt", name: "Yoğurt", icon: "🥣" },
            { id: "suzme_yogurt", name: "Süzme Yoğurt", icon: "🥣" },
            { id: "tereyagi", name: "Tereyağı", icon: "🧈" },

            { id: "krema", name: "Sıvı Krema", icon: "🥛" },
            { id: "beyaz_peynir", name: "Beyaz Peynir", icon: "🧀" },
            { id: "kasar", name: "Kaşar Peyniri", icon: "🧀" },

            { id: "tulum", name: "Tulum Peyniri", icon: "🧀" },




        ]
    },
    pantry: {
        label: "Bakliyat & Tahıl",
        items: [
            { id: "pirinc", name: "Pirinç", icon: "🍚" },
            { id: "bulgur", name: "Bulgur", icon: "🌾" },
            { id: "makarna", name: "Makarna", icon: "🍝" },
            { id: "sehriye", name: "Şehriye", icon: "🍜" },
            { id: "mercimek_kirmizi", name: "Kırmızı Mercimek", icon: "🟠" },
            { id: "mercimek_yesil", name: "Yeşil Mercimek", icon: "🟢" },
            { id: "nohut", name: "Nohut", icon: "🟡" },
            { id: "kuru_fasulye", name: "Kuru Fasulye", icon: "⚪" },
            { id: "barbunya", name: "Barbunya", icon: "🔴" },
            { id: "un", name: "Un", icon: "🥡" },
            { id: "galeta_unu", name: "Galeta Unu", icon: "🥖" },
            { id: "nisasta", name: "Nişasta", icon: "🥡" },
            { id: "irmik", name: "İrmik", icon: "🌾" },

            { id: "ekmek", name: "Ekmek", icon: "🍞" },
            { id: "lavas", name: "Lavaş", icon: "🫓" },
            { id: "yufka", name: "Yufka", icon: "🥟" },

        ]
    },
    oils: {
        label: "Yağ & Sos",
        items: [
            { id: "zeytinyagi", name: "Zeytinyağı", icon: "🍾" },
            { id: "siviyag", name: "Ayçiçek Yağı", icon: "🌻" },
            { id: "tahini", name: "Tahin", icon: "🍯" },
            { id: "pekmez", name: "Pekmez", icon: "🍯" },
            { id: "sirke", name: "Sirke", icon: "🏺" },
            { id: "nar_eksisi", name: "Nar Ekşisi", icon: "🏺" },


            { id: "mayonez", name: "Mayonez", icon: "🥚" },
            { id: "ketcap", name: "Ketçap", icon: "🍅" },

            { id: "salca", name: "Domates Salçası", icon: "🥫" },
            { id: "biber_salcasi", name: "Biber Salçası", icon: "🥫" },

        ]
    },
    spices: {
        label: "Baharat & Kuruyemiş",
        items: [
            { id: "tuz", name: "Tuz", icon: "🧂" },
            { id: "karabiber", name: "Karabiber", icon: "🧂" },
            { id: "pul_biber", name: "Pul Biber", icon: "🌶️" },
            { id: "kekik", name: "Kekik", icon: "🌿" },
            { id: "nane", name: "Kuru Nane", icon: "🍃" },
            { id: "kimyon", name: "Kimyon", icon: "🧂" },
            { id: "sumak", name: "Sumak", icon: "🟣" },
            { id: "zerdecal", name: "Zerdeçal", icon: "🟡" },
            { id: "zencefil", name: "Zencefil", icon: "🫚" },
            { id: "tarcin", name: "Tarçın", icon: "🪵" },
            { id: "seker", name: "Şeker", icon: "🍬" },

            { id: "kakao", name: "Kakao", icon: "🍫" },
            { id: "vanilya", name: "Vanilya", icon: "🌼" },
            { id: "kabartma_tozu", name: "Kabartma Tozu", icon: "🧁" },
            { id: "maya", name: "Maya", icon: "🍞" },
            { id: "ceviz", name: "Ceviz", icon: "🥜" },
            { id: "findik", name: "Fındık", icon: "🥜" },
            { id: "fistik", name: "Fıstık", icon: "🥜" },
            { id: "badem", name: "Badem", icon: "🥜" },
            { id: "susam", name: "Susam", icon: "🥯" },
            { id: "hindistan_cevizi", name: "Hindistan Cevizi", icon: "🥥" },
            { id: "zeytin", name: "Zeytin", icon: "🫒" },
            { id: "tursu", name: "Turşu", icon: "🥒" },
        ]
    }
};

function getAllIngredients() {
    let all = [];
    Object.values(ingredientCategories).forEach(cat => {
        all = [...all, ...cat.items.map(item => ({ ...item, category: cat.label }))];
    });
    return all;
}

/* =========================================
   DATA: Recipes
   ========================================= */
/* =========================================
   DATA: Recipes
   ========================================= */
// Recipes are now loaded from js/recipes.js
// const recipes = [ ... ] -> EXTERNAL FILE



// Note: Re-mapping ingredient IDs in recipes to match new massive list might be needed if IDs changed. 
// I kept IDs consistent (e.g. 'patates', 'sogan') but added new specific ones (tavuk -> tavuk_gogsu match).
// Let's quickly patch a few recipe IDs to match the new inventory perfectly.
// 'tavuk' -> 'tavuk_gogsu' or 'tavuk_but'.
// 'biber' -> 'biber' (yes, yesil biber).
// 'mercimek_yesil' is good.

/* =========================================
   LOGIC: Recommendation Engine
   ========================================= */
function calculateMatches(selectedIngredientIds, recipesData) {
    return recipesData.map(recipe => {
        const required = recipe.requiredIngredients;
        const optional = recipe.optionalIngredients || [];

        // Find which required ingredients are missing
        // Flexible matching: if recipe needs 'tavuk', allow 'tavuk_gogsu' or 'tavuk_but' if we had a generic category, 
        // but here we are strict specific ID matching.
        // Users might select 'tavuk_gogsu' but recipe wants 'tavuk'. 
        // For this iteration, I've updated recipes to use specific keys (e.g., tavuk_gogsu) or generic keys present in list.

        const missingRequired = required.filter(req => !selectedIngredientIds.includes(req));

        // Calculate match percentage
        const totalRequired = required.length;
        const ownedRequired = totalRequired - missingRequired.length;

        // Basic score: Percentage of required ingredients owned
        let matchScore = (ownedRequired / totalRequired) * 100;

        // Bonus points for optional ingredients
        const ownedOptional = optional.filter(opt => selectedIngredientIds.includes(opt)).length;
        if (ownedOptional > 0) {
            matchScore += (ownedOptional * 5); // 5% bonus per optional item
        }

        // Cap at 100
        matchScore = Math.min(100, matchScore);

        // Status determination
        let status = 'low';
        if (matchScore === 100) status = 'perfect';
        else if (matchScore >= 70) status = 'high';
        else if (matchScore >= 40) status = 'medium';

        return {
            ...recipe,
            matchScore: Math.round(matchScore),
            missingIngredients: missingRequired,
            status: status
        };
    }).sort((a, b) => b.matchScore - a.matchScore);
}

/* =========================================
   LOGIC: Main App
   ========================================= */

// State
const state = {
    selectedIngredients: new Set(),
    activeCategory: 'all',
    matches: [],
    searchTerm: ''
};

// DOM Elements
const categoriesNav = document.getElementById('categories-nav');
const ingredientsGrid = document.getElementById('ingredients-grid');
const selectedCountEl = document.getElementById('selected-count');
const clearBtn = document.getElementById('clear-btn');
const recipesContainer = document.getElementById('recipes-container');
const searchInput = document.getElementById('search-input');

// Initialization
function init() {
    renderCategories();
    renderIngredients();
    setupEventListeners();
    updateRecommendations();
}

// Render Functions
function renderCategories() {
    // Dynamic categories from data
    const catKeys = Object.keys(ingredientCategories);
    categoriesNav.innerHTML = `<button class="cat-btn ${state.activeCategory === 'all' ? 'active' : ''}" data-category="all">Tümü</button>`;

    catKeys.forEach(key => {
        const cat = ingredientCategories[key];
        const btn = document.createElement('button');
        btn.className = `cat-btn ${state.activeCategory === key ? 'active' : ''}`;
        btn.dataset.category = key;
        btn.textContent = cat.label;
        categoriesNav.appendChild(btn);
    });
}

function renderIngredients() {
    ingredientsGrid.innerHTML = '';

    let itemsToShow = [];

    // Filter by Category
    if (state.activeCategory === 'all') {
        itemsToShow = getAllIngredients();
    } else {
        itemsToShow = ingredientCategories[state.activeCategory]?.items || [];
    }

    // Filter by Search Term
    if (state.searchTerm) {
        const term = state.searchTerm.toLowerCase("tr-TR");
        itemsToShow = itemsToShow.filter(item =>
            item.name.toLowerCase("tr-TR").includes(term)
        );
    }

    if (itemsToShow.length === 0) {
        ingredientsGrid.innerHTML = `
            <div class="empty-state" style="grid-column: 1/-1; padding: 20px;">
                <p>Malzeme bulunamadı.</p>
            </div>
        `;
        return;
    }

    itemsToShow.forEach(item => {
        const el = document.createElement('div');
        el.className = `ingredient-item ${state.selectedIngredients.has(item.id) ? 'selected' : ''}`;
        el.onclick = () => toggleIngredient(item.id);

        el.innerHTML = `
            <span class="ingredient-icon">${item.icon}</span>
            <span class="ingredient-name">${item.name}</span>
        `;
        ingredientsGrid.appendChild(el);
    });
}

function renderRecipes() {
    recipesContainer.innerHTML = '';

    const relevantRecipes = state.matches.filter(r => r.matchScore > 0);

    if (relevantRecipes.length === 0) {
        if (state.selectedIngredients.size === 0) {
            recipesContainer.innerHTML = `
                <div class="empty-state">
                    <div class="empty-icon">🍽️</div>
                    <h3>Henüz bir seçim yapmadınız</h3>
                    <p>Öneri almak için soldaki panelden en az bir malzeme seçin.</p>
                </div>
            `;
        } else {
            recipesContainer.innerHTML = `
                <div class="empty-state">
                    <div class="empty-icon">🤔</div>
                    <h3>Bu malzemelerle tarif bulamadık</h3>
                    <p>Daha fazla malzeme eklemeyi deneyin.</p>
                </div>
            `;
        }
        return;
    }

    relevantRecipes.forEach(recipe => {
        const card = document.createElement('div');
        card.className = 'recipe-card';

        let badgeClass = '';
        let badgeText = `%${recipe.matchScore} Uyum`;

        if (recipe.status === 'perfect') {
            badgeClass = 'perfect';
            card.classList.add('perfect-match');
        } else if (recipe.status === 'high') {
            badgeClass = 'high';
        }

        // Missing ingredients
        let missingHtml = '';
        if (recipe.missingIngredients.length > 0) {
            const allIng = getAllIngredients();
            const missingNames = recipe.missingIngredients.map(id => {
                const found = allIng.find(i => i.id === id);
                return found ? found.name : id; // fallback to ID if not found
            });
            missingHtml = `<div class="missing-ingredients">Eksikler: ${missingNames.join(', ')}</div>`;
        }

        card.innerHTML = `
            <div class="recipe-image">${recipe.image}</div>
            <div class="recipe-content">
                <div class="recipe-header">
                    <h3 class="recipe-title">${recipe.title}</h3>
                    <span class="match-badge ${badgeClass}">${badgeText}</span>
                </div>
                <div class="recipe-meta">
                    <span>⏱️ ${recipe.time}</span> • <span>📊 ${recipe.difficulty}</span>
                </div>
                <p>${recipe.description}</p>
                ${missingHtml}
            </div>
        `;
        recipesContainer.appendChild(card);
    });
}

// Interaction
function toggleIngredient(id) {
    if (state.selectedIngredients.has(id)) {
        state.selectedIngredients.delete(id);
    } else {
        state.selectedIngredients.add(id);
    }
    updateUI();
}

function updateUI() {
    selectedCountEl.textContent = state.selectedIngredients.size;
    renderIngredients();
    updateRecommendations();
}

function updateRecommendations() {
    const selectedArray = Array.from(state.selectedIngredients);
    state.matches = calculateMatches(selectedArray, recipes);
    renderRecipes();
}

function setupEventListeners() {
    categoriesNav.addEventListener('click', (e) => {
        if (e.target.classList.contains('cat-btn')) {
            // Update active category
            state.activeCategory = e.target.dataset.category;

            // Clear search when switching categories for better UX? 
            // Or keep it? Let's keep it but maybe users expect it to apply to new category.
            // Currently search applies within the active category logic in renderIngredients.

            renderCategories();
            renderIngredients();
        }
    });

    clearBtn.addEventListener('click', () => {
        state.selectedIngredients.clear();
        updateUI();
    });

    // Search Listener
    searchInput.addEventListener('input', (e) => {
        state.searchTerm = e.target.value.trim();
        renderIngredients();
    });
}

// Start
document.addEventListener('DOMContentLoaded', init);
