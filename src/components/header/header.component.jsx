import './header.styles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';

export const Header = () => {
    return(
        <div className="header">
            <Link className='logo-container' to='/' >
                <Logo className='logo' />
            </Link>
            <div className="options">
                <Link to='/shop' className='option' >SHOP</Link>
                <Link to='' className='option' >CONTACT</Link>
            </div>
        </div>
    );
}