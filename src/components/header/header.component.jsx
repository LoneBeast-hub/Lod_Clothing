import './header.styles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';

const Header = ({ currentUser,hidden }) => {
    return(
        <div className="header">
            <Link className='logo-container' to='/' >
                <Logo className='logo' />
            </Link>
            <div className="options">
                <Link to='/shop' className='option' >SHOP</Link>
                <Link to='' className='option' >CONTACT</Link>
                {
                    // show sign in or sign out depending on the currentUser state
                    currentUser?
                    <div onClick={() => {auth.signOut()}} className='option' >SIGN OUT</div>
                    :
                    <Link to='/signin' className='option'>SIGN IN</Link>
                }
                <CartIcon/>
            </div>
            {/* toggle cart drop down */}
            {hidden? null: <CartDropdown/>}
        </div>
    );
}

// mapping state to props to use the reducer properties
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);