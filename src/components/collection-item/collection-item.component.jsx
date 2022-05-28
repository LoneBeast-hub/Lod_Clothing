import { CustomButton } from '../custom-button/custom-button.component';
import { addItem } from '../../redux/cart/cart.actions';
import { connect } from 'react-redux';

// styled Components
import { CollectionItemContainer, ImageContainer, CollectionFooterContainer, NameContainer, PriceContainer, CustomButtonContainer } from './collection-item.styles';

const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;
    return(
        <CollectionItemContainer>
            <ImageContainer imageUrl={imageUrl} />
            <CollectionFooterContainer>
                <NameContainer> {name} </NameContainer>
                <PriceContainer> {price} </PriceContainer>
            </CollectionFooterContainer>
            <CustomButtonContainer as={CustomButton} inverted onClick={() => {
                return(addItem(item))
            }}>Add to Cart</CustomButtonContainer>
        </CollectionItemContainer>
    );
}

const mapDispatchToProps = (dispatch) => {
    return({
        addItem: (item) => {
            return(
                dispatch(addItem(item))
            );
        }
    });
}

export default connect(null, mapDispatchToProps)(CollectionItem);