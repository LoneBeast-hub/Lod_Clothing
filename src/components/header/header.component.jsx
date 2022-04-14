import './header.styles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';

const Header = ({ currentUser }) => {
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
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return({
        currentUser: state.user.currentUser
    })
}

export default connect(mapStateToProps)(Header);