export const categoriesDataSelector = store => store.categoriesData;

export const currentCategorySelector = store => {
    const { categories, currentId } = store.categoriesData;
    return categories.find(c => c.id === currentId);
}