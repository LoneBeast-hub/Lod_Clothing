import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { selectCartTotal } from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { StripeCheckoutButton } from '../../components/stripe-button/stripe-button.component';
// Styled Component
import { CheckoutPageContainer, CheckoutHeaderContainer, HeaderBlockContainer, TotalContainer, TestWarningContainer } from './checkout.styles';

const Checkout = ({ cartItems, total }) => {
    return(
        <CheckoutPageContainer>
            <CheckoutHeaderContainer>
                <HeaderBlockContainer>
                    <span>Product</span>
                </HeaderBlockContainer>
                <HeaderBlockContainer>
                    <span>Description</span>
                </HeaderBlockContainer>
                <HeaderBlockContainer>
                    <span>Quantity</span>
                </HeaderBlockContainer>
                <HeaderBlockContainer>
                    <span>Price</span>
                </HeaderBlockContainer>
                <HeaderBlockContainer>
                    <span>Remove</span>
                </HeaderBlockContainer>
            </CheckoutHeaderContainer>
            {cartItems.map((cartItem) => {
                return(
                    <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                )
            })}
            <TotalContainer>
                <span>Total: ${total} </span>
            </TotalContainer>
            <TestWarningContainer>
                *Please use the following test credit card for payments*
                <br />
                5555 5555 5555 4444 - Exp 12/2023 - CVV: 123
            </TestWarningContainer>
            <StripeCheckoutButton price={total} />
        </CheckoutPageContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(Checkout);