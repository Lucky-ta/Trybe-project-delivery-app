import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import RegisterPage from '../pages/RegisterPage';
import ProductsPage from '../pages/ProductsPage';
import LoginPage from '../pages/LoginPage';
import OrdersPage from '../pages/OrdersPage';
import CheckoutPage from '../pages/CheckoutPage';
import CustomerOrderDetails from '../pages/CustomerOrderDetails';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={ <LoginPage /> } />
        <Route path="/" element={ <Navigate to="/login" /> } />
        <Route path="/register" element={ <RegisterPage /> } />
        <Route path="/customer/products" element={ <ProductsPage /> } />
        <Route path="/customer/orders" element={ <OrdersPage /> } />
        <Route path="/customer/checkout" element={ <CheckoutPage /> } />
        <Route path="/customer/orders/:id" element={ <CustomerOrderDetails /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
