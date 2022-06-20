import React, { useEffect, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CheckoutCard from '../components/CheckoutCard';
import DetailsAndAddress from '../components/DetailsAndAddress';
import NavBarProducts from '../components/NavBarProducts';
import AppContext from '../context/AppContext';
import { postSale } from '../service/salleApi';

function CheckoutPage() {
  const user = JSON.parse(localStorage.getItem('user'));
  const { setCart, cart } = useContext(AppContext);
  const [body, setBody] = useState({ quantity: [], productId: [] });
  const navigate = useNavigate();

  const calculateTotalPrice = () => cart
    .reduce((total, item) => total + item.price * item.quantity, 0);

  const finishSale = async () => {
    console.log(cart);
    setBody((body.totalPrice = Number(calculateTotalPrice().toFixed(2))));
    setBody((body.status = 'Pendente'));
    setBody((body.userId = user.id));
    cart.forEach((p) => {
      body.quantity.push(p.quantity);
      body.productId.push(p.id);
    });
    console.log(body);
    const response = await postSale(user.token, body);
    navigate(`/customer/orders/${response.id}`);
  };

  useEffect(() => {
    const cartLs = JSON.parse(localStorage.getItem('cart'));
    setCart(cartLs);
  }, []);

  return (
    <div>
      <h1>Checkout Page</h1>
      <NavBarProducts />
      {cart.map((p, index) => (
        <CheckoutCard product={ p } key={ index } index={ index } />
      ))}
      <p data-testid="customer_checkout__element-order-total-price">
        {calculateTotalPrice().toFixed(2).replace('.', ',')}
      </p>
      <DetailsAndAddress finishSale={ finishSale } body={ body } />
    </div>
  );
}

export default CheckoutPage;
