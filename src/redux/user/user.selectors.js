import { createSelector } from "reselect";

// input selector
const selectUser = (state) => {
    return(state.user);
}

// select current User output selector
export const selectCurrentUser = createSelector([selectUser], (user) => {
    return(user.currentUser);
})