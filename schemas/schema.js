const schema = {
    type: 'object',
    properties: {
        id: { type: 'number' },
        name: { type: 'string' },
        ingredients: {
            type: 'array',
            items: {
                type: 'string',
            }
        },
        instructions: {
            type: 'array',
            items: {
                type: 'string',
            }
        },
        prepTimeMinutes: { type: 'number' },
        cookTimeMinutes: { type: 'number' },
        servings: { type: 'number' },
        difficulty: { type: 'string' },
        cuisine: { type: 'string' },
        caloriesPerServing: { type: 'number' },
        tags: {
            type: 'array',
            items: {
                type: 'string',
            }
        },
        userId: { type: 'number' },
        image: { type: 'string' },
        rating: { type: 'number' },
        reviewCount: { type: 'number' },
        mealType: {
            type: 'array',
            items: {
                type: 'string',
            }
        },
    }
}

export default schema