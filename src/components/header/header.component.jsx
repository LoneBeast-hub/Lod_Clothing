import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';

// Cart
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

// Selector
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';

// Css in Js styles
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './header.styles';

const Header = ({ currentUser,hidden }) => {
    return(
        <HeaderContainer>
            <LogoContainer to='/' >
                <Logo className='logo' />
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to='/shop'>SHOP</OptionLink>
                <OptionLink to=''>CONTACT</OptionLink>
                {
                    // show sign in or sign out depending on the currentUser state
                    currentUser?
                    <OptionLink as='div' onClick={() => {auth.signOut()}}>SIGN OUT</OptionLink>
                    :
                    <OptionLink to='/signin'>SIGN IN</OptionLink>
                }
                <CartIcon/>
            </OptionsContainer>
            {/* toggle cart drop down */}
            {hidden? null: <CartDropdown/>}
        </HeaderContainer>
    );
}

// mapping state to props to use the reducer properties
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);