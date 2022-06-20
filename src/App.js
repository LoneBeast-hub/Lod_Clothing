import { useEffect } from 'react';
import { GlobalStyle } from './global.styles';
import { Routes, Route, Navigate } from 'react-router-dom';

import { HomePage } from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Checkout from './pages/checkout/checkout.component';

import Header from './components/header/header.component'
import { SignInAndSignUpPage } from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { connect } from 'react-redux';
import { selectCurrentUser } from './redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';
import { checkUserSession } from './redux/user/user.actions';

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession])

  return (
    <div>
    <GlobalStyle/>
      <Header/>
      <Routes>
        <Route exact path='/' element={ <HomePage/> } />
        <Route exact path='/shop/*' element={ <ShopPage/> } />
        <Route exact path='/signin' element={ currentUser? <Navigate to='/' /> : <SignInAndSignUpPage/> } />
        <Route exact path='/checkout' element={ <Checkout/> } />
      </Routes>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = (dispatch) => {
  return({
    checkUserSession: () => {
      return(dispatch(checkUserSession()))
    }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
