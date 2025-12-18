export function calculateMatches(selectedIngredientIds, recipes) {
    return recipes.map(recipe => {
        const required = recipe.requiredIngredients;
        const optional = recipe.optionalIngredients || [];

        // Find which required ingredients are missing
        const missingRequired = required.filter(req => !selectedIngredientIds.includes(req));

        // Calculate match percentage based on required ingredients
        // If 0 required ingredients, it's a special case (maybe 100% if we have the item?) - assuming recipes always have required items
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
        matchScore = Math.min(100, matchScore); // Allow it to be 100 even with bonuses

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
    }).sort((a, b) => b.matchScore - a.matchScore); // Best matches first
}
