import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/index';
import Register from './pages/register';
import Login from './pages/login';
import ProductDetail from './pages/productDetail';
import Cart from './pages/cart';
import NotFound from './components/not-found/notfound';
import Adminlogin from './pages/admin-login';
import Address from './pages/address';
import Confirm from './pages/confirm';
import Success from './pages/success';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="Register" element={<Register />} />
        <Route path="Login" element={<Login />} />
        <Route path="ProductDetail" element={<ProductDetail />} />
        <Route path="Cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
        <Route path="admin-login" element={<Adminlogin />} />
        <Route path="Address" element={<Address />} />
        <Route path="Confirm" element={<Confirm />} />
        <Route path="Success" element={<Success />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
