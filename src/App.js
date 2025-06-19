import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/index';
import Register from './pages/register';
import Login from './pages/login';
import ProductDetail from './pages/productDetail';
import Cart from './pages/cart';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="Register" element={<Register />} />
        <Route path="Login" element={<Login />} />
        <Route path="/ProductDetail" element={<ProductDetail />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
