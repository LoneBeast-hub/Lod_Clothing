import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { CollectionPreview } from '../collection-preview/collection-preview.component';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

// styled components
import { CollectionOverviewContainer } from './collection-overview.styles';

const CollectionsOverview = ({ collections }) => {
    return(
        <CollectionOverviewContainer>
            {
                collections.map(({id, ...otherCollectionProps}) => {
                    return(
                        <CollectionPreview key={id} {...otherCollectionProps} />
                    );
                })
            }
        </CollectionOverviewContainer>
    );
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview);