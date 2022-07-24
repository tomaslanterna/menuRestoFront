import logo from './logo.svg';
import './App.css';
import RestoProfile from './stack/RestoProfile';
import { CartProvider } from './context/CartContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MesaProvider } from './context/MesaContext';

function App() {
  return (
    <div className="App">
      <MesaProvider>
        <CartProvider>
          <BrowserRouter>
            <Routes>
              <Route path='/resto/:restoId/:mesaId' element={<RestoProfile />} />
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </MesaProvider>
    </div>
  );
}

export default App;
