import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import CustomerPage from '../pages/CustomerPage';
import RegisterPage from '../pages/RegisterPage';

import LoginPage from '../pages/LoginPage';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={ <LoginPage /> } />
        <Route path="/" element={ <Navigate to="/login" /> } />
        <Route path="/customer/products" element={ <CustomerPage /> } />
        <Route path="/register" element={ <RegisterPage /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
