import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import CustomerPage from '../pages/CustomerPage';

import LoginPage from '../pages/LoginPage';
import OrdersPage from '../pages/OrdersPage';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={ <LoginPage /> } />
        <Route path="/" element={ <Navigate to="/login" /> } />
        <Route path="/customer/products" element={ <CustomerPage /> } />
        <Route path="/customer/orders" element={ <OrdersPage /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
