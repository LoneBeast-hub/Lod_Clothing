import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';

import { HomePage } from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Checkout from './pages/checkout/checkout.component';

import Header from './components/header/header.component'
import { SignInAndSignUpPage } from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { Component } from 'react';
import { connect } from 'react-redux';
import { selectCurrentUser } from './redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';
import { checkUserSession } from './redux/user/user.actions';

class App extends Component {
  unsubscribeFromAuth = null
  componentDidMount() {
    const { checkUserSession } = this.props;

    checkUserSession();
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header/>
        <Routes>
          <Route exact path='/' element={ <HomePage/> } />
          <Route exact path='/shop/*' element={ <ShopPage/> } />
          <Route exact path='/signin' element={ this.props.currentUser? <Navigate to='/' /> : <SignInAndSignUpPage/> } />
          <Route exact path='/checkout' element={ <Checkout/> } />
        </Routes>
      </div>
    );
  }
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
