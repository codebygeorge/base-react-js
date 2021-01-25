export const catsDataSelector = store => store.catsData;

export const catSelector = (store, catId) => store.catsData.cats.find(c => c.id === catId);