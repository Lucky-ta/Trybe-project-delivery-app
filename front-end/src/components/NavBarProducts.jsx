import React from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

export default function NavBarProducts() {
  return (
    <nav className="navbar">
      <Link
        datatestid="customer_products__element-navbar-link-products"
        to="/customer/products"
      >
        Products

      </Link>
      <Link
        datatestid="customer_products__element-navbar-link-orders"
        to="/customer/orders"
      >
        Pedidos

      </Link>
      <p datatestid="customer_products__element-navbar-user-full-name">
        {localStorage.getItem('userName')}
      </p>
      <Button datatestid="customer_products__element-navbar-link-logout">Logout</Button>
    </nav>
  );
}
