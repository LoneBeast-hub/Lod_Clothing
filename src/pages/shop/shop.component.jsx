import { CollectionsOverviewContainer } from '../../components/collection-overview/collection.container';
import { CollectionPageContainer } from '../collection/collection.container';
import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

const ShopPage = ({ fetchCollectionsStart }) => {
    useEffect(() => {
        fetchCollectionsStart()
    }, [fetchCollectionsStart])

    return(
        <div className="shop-page">
            <Routes>
                <Route  path='' element={<CollectionsOverviewContainer />} />
                <Route path=':collectionId' element={<CollectionPageContainer />} />
            </Routes>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return({
        fetchCollectionsStart: () => {
            return dispatch(fetchCollectionsStart())
        }
    });
}

export default connect(null, mapDispatchToProps)(ShopPage);