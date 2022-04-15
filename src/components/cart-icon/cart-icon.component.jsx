import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

const CartIcon = ({toggleCartHidden, itemCount}) => {
    return(
        <div className="cart-icon" onClick={toggleCartHidden} >
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'> {itemCount} </span>
        </div>
    );
}

// update the total quantity of cart items
const mapStateToProps = (state) => {
    // return the total quantity of cart items
    return({
        itemCount: selectCartItemsCount(state)
    });
}

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