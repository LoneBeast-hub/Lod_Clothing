import { connect } from "react-redux";
import { compose } from "redux";
import { CollectionPageMod } from "./collectionMod.component";
import { createStructuredSelector } from "reselect";
import { selectIsCollectionLoaded } from "../../redux/shop/shop.selectors";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

const mapStateToProps = createStructuredSelector({
    isLoading: (state) => {
        return !selectIsCollectionLoaded(state);
    }
})

export const CollectionPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionPageMod);