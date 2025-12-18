// Ingredient Database
export const ingredientCategories = {
    vegetable: {
        label: "Sebze & Meyve",
        items: [
            { id: "domates", name: "Domates", icon: "🍅" },
            { id: "sogan", name: "Soğan", icon: "🧅" },
            { id: "biber", name: "Biber", icon: "🌶️" },
            { id: "sarimsak", name: "Sarımsak", icon: "🧄" },
            { id: "patates", name: "Patates", icon: "🥔" },
            { id: "havuc", name: "Havuç", icon: "🥕" },
            { id: "patlican", name: "Patlıcan", icon: "🍆" },
            { id: "kabak", name: "Kabak", icon: "🥒" }, // Using cucumber icon for zucchini similarity or generic green
            { id: "maydanoz", name: "Maydanoz", icon: "🌿" },
            { id: "limon", name: "Limon", icon: "🍋" }
        ]
    },
    meat: {
        label: "Et & Şarküteri",
        items: [
            { id: "kiyma", name: "Kıyma", icon: "🥩" },
            { id: "tavuk", name: "Tavuk", icon: "🍗" },
            { id: "sucuk", name: "Sucuk", icon: "🌭" }, // Hotdog as proxy for sucuk visually
            { id: "yumurta", name: "Yumurta", icon: "🥚" }
        ]
    },
    dairy: {
        label: "Süt & Kahvaltılık",
        items: [
            { id: "yogurt", name: "Yoğurt", icon: "🍦" }, // Ice cream proxy or bowl
            { id: "sut", name: "Süt", icon: "🥛" },
            { id: "peynir", name: "Peynir", icon: "🧀" },
            { id: "tereyagi", name: "Tereyağı", icon: "🧈" }
        ]
    },
    pantry: {
        label: "Bakliyat & Kiler",
        items: [
            { id: "pirinc", name: "Pirinç", icon: "🍚" },
            { id: "makarna", name: "Makarna", icon: "🍝" },
            { id: "mercimek", name: "Mercimek", icon: "🍲" },
            { id: "bulgur", name: "Bulgur", icon: "🌾" },
            { id: "salca", name: "Salça", icon: "🥫" },
            { id: "un", name: "Un", icon: "🥡" }
        ]
    }
};

export function getAllIngredients() {
    let all = [];
    Object.values(ingredientCategories).forEach(cat => {
        all = [...all, ...cat.items.map(item => ({ ...item, category: cat.label }))];
    });
    return all;
}
