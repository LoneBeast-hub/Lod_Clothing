import { connect } from "react-redux";
import { compose } from "redux";
import CollectionsOverview from './collection-overview.component';
import { createStructuredSelector } from "reselect";
import { selectIsCollectionFetching } from "../../redux/shop/shop.selectors";
import WithSpinner from "../with-spinner/with-spinner.component";

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching
});

export const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionsOverview);