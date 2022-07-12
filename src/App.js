import logo from './logo.svg';
import './App.css';
import RestoProfile from './stack/RestoProfile';
import { CartProvider } from './context/CartContext';
import { Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Router>
          <Routes>
            <Route exact to path="/resto/:restoId/:mesaId" component={RestoProfile}/>
          </Routes>
        </Router>
      </CartProvider>
    </div>
  );
}

export default App;
