import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import { HomePage } from './pages/homepage/homepage.component';

const HatsPage = () => {
  return(
    <div>
      <h1>HATS</h1>
    </div>
  );
}

function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={ <HomePage/> } />
        <Route exact path='/hats' element={ <HatsPage/> } />
      </Routes>
    </div>
  );
}

export default App;
