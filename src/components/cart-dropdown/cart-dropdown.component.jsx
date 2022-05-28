import { CustomButton } from '../custom-button/custom-button.component';
import { CartItem } from '../cart-item/cart-item.component';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { useNavigate } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

// styled Components
import { CartDropdownContainer, CartItemsContainer, EmptyMessageContainer, CustomButtonContainer } from './cart-dropdown.styles';

const CartDropdown = ({ cartItems, dispatch }) => {
    let navigate = useNavigate();
    return(
        <CartDropdownContainer>
            <CartItemsContainer>
                {cartItems.length?
                    cartItems.map((cartItem) => {
                        return(<CartItem key={cartItem.id} item={cartItem} />)
                    }) :
                    <EmptyMessageContainer>Your Cart is empty</EmptyMessageContainer>
                }
            </CartItemsContainer>
            <CustomButtonContainer as={CustomButton} onClick={() => {
                navigate('/checkout');
                dispatch(toggleCartHidden())
            }} >GO TO CHECKOUT</CustomButtonContainer>
        </CartDropdownContainer>
    );
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default connect(mapStateToProps)(CartDropdown);