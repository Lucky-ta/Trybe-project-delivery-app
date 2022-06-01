import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import CustomerPage from '../pages/CustomerPage';

import LoginPage from '../pages/LoginPage';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={ <LoginPage /> } />
        <Route path="/" element={ <Navigate to="/login" /> } />
        <Route path="/customer/products" element={ <CustomerPage /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
