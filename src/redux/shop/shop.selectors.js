import { createSelector } from "reselect";

// input
const selectShop = (state) => {
    return state.shop;
}

// output
export const selectCollections = createSelector([selectShop], (shop) => {
    return shop.collections;
})

export const selectCollectionsForPreview = createSelector([selectCollections], (collections) => {
    if(collections) {
        return(Object.keys(collections).map(key => {
            return(collections[key])
        }));
    } else {
        return([])
    }
})

export const selectCollection = (collectionUrlParam) => {
    return(createSelector([selectCollections], (collections) => {
        // return the collection matching the url param id
        return(collections? collections[collectionUrlParam] : null)
    }));
}