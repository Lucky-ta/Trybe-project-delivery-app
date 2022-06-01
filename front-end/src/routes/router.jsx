import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';

import LoginPage from '../pages/LoginPage';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={ <LoginPage /> } />
        <Route path="/" element={ <Navigate to="/login" /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
