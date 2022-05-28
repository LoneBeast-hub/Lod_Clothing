import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';

// styled Components
import { CartIconContainer, ShoppingIconContainer, ItemCountContainer } from './cart-icon.styles';

const CartIcon = ({toggleCartHidden, itemCount}) => {
    return(
        <CartIconContainer onClick={toggleCartHidden} >
            <ShoppingIconContainer as={ShoppingIcon} className='shopping-icon' />
            <ItemCountContainer className='item-count'> {itemCount} </ItemCountContainer>
        </CartIconContainer>
    );
}

// update the total quantity of cart items
const mapStateToProps = createStructuredSelector({
    // return the total quantity of cart items
    itemCount: selectCartItemsCount
})

// change the value of hidden property of cart object
const mapDispatchToProps = (dispatch) => {
    return({
        toggleCartHidden: () => {
            return(
                dispatch(toggleCartHidden())
            );
        }
    });
}

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);