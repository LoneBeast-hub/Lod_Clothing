import './shop.styles.scss';
import CollectionsOverview from '../../components/collection-overview/collection-overview.component'
import { CollectionPageMod } from '../collection/collectionMod.component';
import { Route, Routes } from 'react-router-dom';

const ShopPage = () => {
    return(
        <div className="shop-page">
            <Routes>
                <Route  path='' element={<CollectionsOverview/>} />
                <Route path=':collectionId' element={<CollectionPageMod/>} />
            </Routes>
        </div>
    );
}



export default ShopPage;