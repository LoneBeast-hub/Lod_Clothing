import './App.css';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/homepage/homepage.component';
import { ShopPage } from './pages/shop/shop.component';
import { Header } from './components/header/header.component';
import { SignInAndSignUpPage } from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { Component } from 'react';
import { auth } from './firebase/firebase.utils';
import { createUserProfileDocument } from './firebase/firebase.utils';
import { onSnapshot } from '@firebase/firestore';

export class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if(userAuth) {
        // get the return value of userDocRef from the create profile func
        const userDocRef = await createUserProfileDocument(userAuth);
        
        // snapshot to set the value of our user info inside our state
        onSnapshot(userDocRef, (snapshot) => {
          this.setState({ currentUser: {
            id: snapshot.id,
            ...snapshot.data()
          } })
          console.log(this.state)
        })
      }
      this.setState({ currentUser: userAuth })
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Routes>
          <Route exact path='/' element={ <HomePage/> } />
          <Route exact path='/shop' element={ <ShopPage/> } />
          <Route exact path='/signin' element={ <SignInAndSignUpPage/> } />
        </Routes>
      </div>
    );
  }
}

export default App;
