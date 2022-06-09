import React, {
  useCallback,
  useContext, useEffect, useLayoutEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate } from 'react-router-dom';
import NavBarProducts from '../components/NavBarProducts';
import { Api } from '../service/Api';
import ProductCard from '../components/ProductCard';
import AppContext from '../context/App Context';

function CustomerPage() {
  const { cart, setCart } = useContext(AppContext);
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();

  const fetchProducts = async () => {
    const response = await Api.get('/customer/products');
    setProducts(response.data);
  };

  const calculateTotalPrice = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  };

  const updateCartLocalStorage = useCallback(() => {
    const filteredCart = cart.filter((item) => item.quantity !== 0);
    localStorage.setItem('cart', JSON.stringify(filteredCart));
  }, [cart]);

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
      cart.push(cartProduct);
    }
    setCart([...cart]);
    return updateCartLocalStorage();
  };

  const setCartFromLS = useCallback(() => {
    const cartFromLS = JSON.parse(localStorage.getItem('cart'));
    if (cartFromLS) setCart(cartFromLS);
  }, [setCart]);

  const getQuantityFromCart = (product) => (cart.find((item) => item.id === product.id)
    ? cart.find((item) => item.id === product.id).quantity : 0);

  useEffect(() => {
    updateCartLocalStorage();
    fetchProducts();
  }, [updateCartLocalStorage]);

  useLayoutEffect(() => {
    setCartFromLS();
  }, [setCartFromLS]);

  return (
    <div>
      <NavBarProducts />
      <div>
        <div>
          {products.map((product) => (
            <ProductCard
              key={ product.id }
              { ...product }
              updateCart={
                (quantity) => updateCart(quantity, product)
              }
              quantityP={ getQuantityFromCart(product) }
            />
          ))}
        </div>
      </div>
      <div>
        <button
          data-testid="customer_products__button-cart"
          type="button"
          onClick={ () => navigate('/customer/checkout') }
          disabled={ calculateTotalPrice() === 0 }
        >
          <h3
            data-testid="customer_products__checkout-bottom-value"
          >
            Total: R$
            {' '}
            {calculateTotalPrice().toFixed(2).replace('.', ',')}
          </h3>
        </button>
      </div>
    </div>
  );
}

export default CustomerPage;
