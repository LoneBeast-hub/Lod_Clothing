import { shopActionTypes } from "./shop.types";

export const fetchCollectionsStart = () => {
    return({
        type: shopActionTypes.FETCH_COLLECTIONS_START
    });
};

export const fetchCollectionsSuccess = (collectionsMap) => {
    return({
        type: shopActionTypes.FETCH_COLLECTIONS_SUCCESS,
        payload: collectionsMap
    })
}

export const fetchCollectionsFailure = (errorMessage) => {
    return({
        type: shopActionTypes.FETCH_COLLECTIONS_FAILURE,
        payload: errorMessage
    })
}

// export const fetchCollectionsStartAsync = () => {
//     return(
//         (dispatch) => {
//             const collectionRef = collection(db, 'collections');
//             // set isLoading to true
//             dispatch(fetchCollectionsStart())

//             onSnapshot(collectionRef, async (snapshot) => {
//                 const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
//                 // set our collections value to contain the modified value of our snapshot
//                 dispatch(fetchCollectionsSuccess(collectionsMap));
//             }, (error) => {
//                 // set error
//                 dispatch(fetchCollectionsFailure(error.message))
//             })
//         }
//     )
// }