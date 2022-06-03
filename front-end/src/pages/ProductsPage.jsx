import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
// import { Container, Row } from 'react-bootstrap';
import NavBarProducts from '../components/NavBarProducts';
import { Api } from '../service/Api';
import ProductCard from '../components/ProductCard';
import '../styles/products.css';

function CustomerPage() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await Api.get('/customer/products');
    setProducts(response.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <NavBarProducts />
      <div className="">
        <div className="container-md d-flex flex-row mx-auto mw-80%">
          {products.map((product) => (
            <ProductCard key={ product.id } { ...product } />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CustomerPage;
