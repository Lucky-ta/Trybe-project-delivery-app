import React, { useCallback, useContext, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
// import { Container, Row } from 'react-bootstrap';
import NavBarProducts from '../components/NavBarProducts';
import { Api } from '../service/Api';
import ProductCard from '../components/ProductCard';
import '../styles/products.css';
import AppContext from '../context/App Context';

function CustomerPage() {
  const { cart, setCart, totalPrice, setTotalPrice } = useContext(AppContext);
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await Api.get('/customer/products');
    setProducts(response.data);
  };

  const calculateTotalPrice = useCallback(() => {
    let total = 0;
    cart.forEach((item) => {
      total += item.price * item.quantity;
    });
    setTotalPrice(total);
  }, [cart, setTotalPrice]);

  const updateCartLocalStorage = useCallback(() => {
    localStorage.setItem('cart', JSON.stringify([...cart]));
    calculateTotalPrice();
  }, [calculateTotalPrice, cart]);

  const addToCard = (product, quantity) => {
    const exists = cart.find((item) => item.id === product.id);

    if (exists) {
      exists.quantity = quantity;
    } else {
      const cartProduct = {
        id: product.id,
        name: product.name,
        price: product.price,
        quantity,
      };
      return setCart([...cart, cartProduct]);
    }
    updateCartLocalStorage();
  };

  const subtractFromCart = async (product, quantity) => {
    const exists = cart.find((item) => item.id === product.id);
    if (!exists) return null;
    if (exists.quantity === 1) {
      const newCart = cart.filter((item) => item.id !== product.id);
      setCart(newCart);
    } else {
      exists.quantity = quantity;
    }
    updateCartLocalStorage();
  };

  const updateCart = (operation, quantity, product) => {
    if (quantity === 0) return null;
    if (operation === 'add') addToCard(product, quantity);
    if (operation === 'subtract') subtractFromCart(product, quantity);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    updateCartLocalStorage();
    calculateTotalPrice();
  }, [cart, updateCartLocalStorage, calculateTotalPrice]);

  return (
    <div>
      <NavBarProducts />
      <div className="productCardContainerDiv">
        <div className="productCardContainer">
          {products.map((product) => (
            <ProductCard
              key={ product.id }
              { ...product }
              cart={ cart }
              updateCart={
                (operation, quantity) => updateCart(operation, quantity, product)
              }
            />
          ))}
        </div>
      </div>
      <div className="totalPriceDiv">
        <p>
          Total: R$
          {' '}
          {totalPrice.toFixed(2).replace('.', ',')}
        </p>
      </div>
    </div>
  );
}

export default CustomerPage;
