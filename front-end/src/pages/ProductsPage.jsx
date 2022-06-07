import React, { useCallback, useContext, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate } from 'react-router-dom';
import NavBarProducts from '../components/NavBarProducts';
import { Api } from '../service/Api';
import ProductCard from '../components/ProductCard';
import '../styles/products.css';
import AppContext from '../context/App Context';

function CustomerPage() {
  const { cart, setCart, totalPrice, setTotalPrice } = useContext(AppContext);
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();

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
    const filteredCart = cart.filter((item) => item.quantity !== 0);
    localStorage.setItem('cart', JSON.stringify(filteredCart));
    localStorage.setItem('totalPrice', JSON.stringify(totalPrice));
    calculateTotalPrice();
  }, [cart, totalPrice, calculateTotalPrice]);

  const updateCart = (quantity, product) => {
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
      setCart([...cart, cartProduct]);
    }
    return updateCartLocalStorage();
  };

  useEffect(() => {
    updateCartLocalStorage();
    fetchProducts();
  }, [cart, updateCartLocalStorage]);

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
                (quantity) => updateCart(quantity, product)
              }
            />
          ))}
        </div>
      </div>
      <div className="totalPriceDiv">
        <button
          data-testid="customer_products__button-cart"
          type="button"
          onClick={ () => navigate('/customer/checkout') }
          disabled={ cart.length === 0 }
        >
          <h3
            data-testid="customer_products__checkout-bottom-value"
          >
            Total: R$
            {' '}
            {totalPrice.toFixed(2).replace('.', ',')}
          </h3>
        </button>
      </div>
    </div>
  );
}

export default CustomerPage;
