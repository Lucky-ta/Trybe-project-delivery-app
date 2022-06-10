import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/App Context';

export default function NavBarProducts() {
  const { setCart } = useContext(AppContext);
  return (
    <nav className="">
      <Link
        className=""
        data-testid="customer_products__element-navbar-link-products"
        to="/customer/products"
      >
        Products

      </Link>
      <Link
        className=""
        data-testid="customer_products__element-navbar-link-orders"
        to="/customer/orders"
      >
        Pedidos

      </Link>
      <h3 data-testid="customer_products__element-navbar-user-full-name">
        {JSON.parse(localStorage.getItem('user')).name}
      </h3>
      <Link
        className=""
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
