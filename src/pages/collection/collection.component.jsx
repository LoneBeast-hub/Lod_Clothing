import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selectors';
import CollectionItem from '../../components/collection-item/collection-item.component';
import { CollectionPageContainer, TitleContainer, ItemsContainer } from './collection.styles';

const CollectionPage = ({ collection }) => {
    const { title, items } = collection;
    return(
        <CollectionPageContainer>
            <TitleContainer> {title} </TitleContainer>
            <ItemsContainer>
                {items.map((item) => {
                    return(<CollectionItem key={item.id} item={item} />)
                })}
            </ItemsContainer>
        </CollectionPageContainer>
    );
}

const mapStateToProps = (state, ownProps) => {
    return({
        collection: selectCollection(ownProps.collectionId)(state)
    });
}

export default connect(mapStateToProps)(CollectionPage);