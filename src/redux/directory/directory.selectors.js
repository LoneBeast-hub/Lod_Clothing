import { createSelector } from "reselect";

// input selector
const selectDirectory = (state) => {
    return state.directory;
}

// output selector
export const selectDirectorySections = createSelector([selectDirectory], (directory) => {
    return directory.sections;
})