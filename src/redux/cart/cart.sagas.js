import { takeLatest, all, call, put } from 'redux-saga/effects';
import { userActionTypes } from '../user/user.types';
import { clearCart } from './cart.actions';

// saga code that continues and completes our asynchronous code to clear cart on user sign out
export function* clearCartOnSignOut() {
    yield put(clearCart())
}

// Listen to the sign out success action to proceed
export function* onSignOutSuccess() {
    yield takeLatest(userActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut)
}

// export all saga generator functions related to cart
export function* cartSagas() {
    yield all([
        call(onSignOutSuccess)
    ])
}