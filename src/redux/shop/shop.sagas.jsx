import { takeLatest, call, put, all } from 'redux-saga/effects';
import { shopActionTypes } from './shop.types';
import { collection, getDocs } from '@firebase/firestore';
import { db, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { fetchCollectionsSuccess, fetchCollectionsFailure } from './shop.actions';

// saga generator function that continues and completes the asynchronous task
export function* fetchCollectionsAsync() {
    const collectionRef = collection(db, 'collections');

    try {
        // get the snapshot from collectionRef using yield in contrast to await since we are using generator function to get our asynchronous data from firestore
        const snapshot = yield getDocs(collectionRef);
        // assign our modified snapshot(collection) to collectionsMap
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
        // dispatch our successful collection fetch using saga put
        yield put(fetchCollectionsSuccess(collectionsMap));
    } catch(error) {
        // dispatch our failed collection fetch using put
        yield put(fetchCollectionsFailure(error.message));
    }
}

// saga generator function that init our redux saga (Note: with this, our app isFetching property is set to true at fetch start)
export function* fetchCollectionsStart() {
    yield takeLatest(
        shopActionTypes.FETCH_COLLECTIONS_START, 
        fetchCollectionsAsync
    );
}

export function* shopSagas() {
    yield all([
        call(fetchCollectionsStart)
    ])
}