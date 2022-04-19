import './checkout-item.styles.scss';
import { connect } from 'react-redux';
import { clearItemFromCart, removeItem, addItem } from '../../redux/cart/cart.actions';

const CheckoutItem = ({ cartItem, clearItem, removeItem, addItem }) => {
    const {imageUrl, price, name, quantity} = cartItem;
    return(
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item" />
            </div>
            <span className="name"> {name} </span>
            <span className="quantity">
                <div className='arrow' onClick={() => {
                    removeItem(cartItem)
                }} >&#10094;</div>
                <span className="value">{quantity}</span>
                <div className='arrow' onClick={() => {
                    addItem(cartItem)
                }} >&#10095;</div>
            </span>
            <span className="price"> {price} </span>
            <span className="remove-button" onClick={() => {
                return(clearItem(cartItem));
            }} > &#10005; </span>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return({
        clearItem: (item) => {
            return(dispatch(clearItemFromCart(item)))
        },
        removeItem: (item) => {
            return(dispatch(removeItem(item)))
        },
        addItem: (item) => {
            return(dispatch(addItem(item)))
        }
    })
}

export default connect(null, mapDispatchToProps)(CheckoutItem);