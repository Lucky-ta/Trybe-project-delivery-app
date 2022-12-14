import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import FormLogin from '../components/FormLogin';

function LoginPage() {
  const navigate = useNavigate();
  const storageUser = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    if (storageUser) {
      navigate('/customer/products');
    }
  });

  return (
    <div>
      <FormLogin />
    </div>
  );
}

export default LoginPage;
