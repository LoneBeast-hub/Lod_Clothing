import { CollectionsOverviewContainer } from '../../components/collection-overview/collection.container';
import { CollectionPageContainer } from '../collection/collection.container';
import { Route, Routes } from 'react-router-dom';
import { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

class ShopPage extends Component {
    componentDidMount() {
        const { fetchCollectionsStart } = this.props;
        fetchCollectionsStart()
    }

    render() {
        return(
            <div className="shop-page">
                <Routes>
                    <Route  path='' element={<CollectionsOverviewContainer {...this.props} />} />
                    <Route path=':collectionId' element={<CollectionPageContainer {...this.props} />} />
                </Routes>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return({
        fetchCollectionsStart: () => {
            return dispatch(fetchCollectionsStart())
        }
    });
}

export default connect(null, mapDispatchToProps)(ShopPage);