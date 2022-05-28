import CollectionsOverview from '../../components/collection-overview/collection-overview.component'
import { CollectionPageMod } from '../collection/collectionMod.component';
import { Route, Routes } from 'react-router-dom';
import { Component } from 'react';
import { collection, onSnapshot } from '@firebase/firestore';
import { db, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop/shop.actions';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageModWithSpinner = WithSpinner(CollectionPageMod);

class ShopPage extends Component {
    state = {
        loading: true
    };

    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const { updateCollections } = this.props
        const collectionRef = collection(db, 'collections');

        this.unsubscribeFromSnapshot = onSnapshot(collectionRef, async (snapshot) => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            updateCollections(collectionsMap);
            this.setState({ loading: false });
        })
    }

    render() {
        const { loading } = this.state
        return(
            <div className="shop-page">
                <Routes>
                    <Route  path='' element={<CollectionsOverviewWithSpinner isLoading={loading} {...this.props} />} />
                    <Route path=':collectionId' element={<CollectionPageModWithSpinner isLoading={loading} {...this.props} />} />
                </Routes>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return({
        updateCollections: (collectionsMap) => {
            return dispatch(updateCollections(collectionsMap));
        }
    });
}

export default connect(null, mapDispatchToProps)(ShopPage);