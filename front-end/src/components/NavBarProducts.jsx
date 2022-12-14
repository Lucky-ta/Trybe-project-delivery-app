import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';

export default function NavBarProducts() {
  const currentPath = window.location.pathname;
  const { setCart } = useContext(AppContext);
  return (
    <nav>
      { !currentPath.includes('/seller/orders/') && (
        <Link
          data-testid="customer_products__element-navbar-link-products"
          to="/customer/products"
        >
          Products

        </Link>
      )}
      <Link
        data-testid="customer_products__element-navbar-link-orders"
        to="/customer/orders"
      >
        Pedidos

      </Link>
      <h3 data-testid="customer_products__element-navbar-user-full-name">
        {JSON.parse(localStorage.getItem('user')).name}
      </h3>
      <Link
        data-testid="customer_products__element-navbar-link-logout"
        onClick={ () => {
          localStorage.removeItem('user');
          localStorage.removeItem('cart');
          setCart([]);
        } }
        to="/login"
      >
        Sair
      </Link>
    </nav>
  );
}
