import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import { HomePage } from './pages/homepage/homepage.component';
import { ShopPage } from './pages/shop/shop.component';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={ <HomePage/> } />
        <Route exact path='/shop' element={ <ShopPage/> } />
      </Routes>
    </div>
  );
}

export default App;
