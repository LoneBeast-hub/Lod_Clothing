import './App.css';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/homepage/homepage.component';
import { ShopPage } from './pages/shop/shop.component';
import Header from './components/header/header.component'
import { SignInAndSignUpPage } from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { Component } from 'react';
import { auth } from './firebase/firebase.utils';
import { createUserProfileDocument } from './firebase/firebase.utils';
import { onSnapshot } from '@firebase/firestore';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';

class App extends Component {
  unsubscribeFromAuth = null
  componentDidMount() {
    const {setCurrentUser} = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if(userAuth) {
        // get the return value of userDocRef from the create profile func
        const userDocRef = await createUserProfileDocument(userAuth);
        
        // snapshot to set the value of our user info inside our state
        onSnapshot(userDocRef, (snapshot) => {
          setCurrentUser( {
            id: snapshot.id,
            ...snapshot.data()
          })
        })
      }
      setCurrentUser(userAuth)
    })
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
          <Route exact path='/shop' element={ <ShopPage/> } />
          <Route exact path='/signin' element={ <SignInAndSignUpPage/> } />
        </Routes>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return({
    setCurrentUser: (user) => {
      return(dispatch(setCurrentUser(user)));
    }
  });
}

export default connect(null, mapDispatchToProps)(App);
