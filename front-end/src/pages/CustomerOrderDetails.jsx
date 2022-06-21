import React from 'react';
import { useParams } from 'react-router-dom';
import CustomerOrderCart from '../components/CustomerOrderCart';
import NavBarProducts from '../components/NavBarProducts';
import formatDate from '../utils/dateFunction';

function CustomerOrderDetails() {
  const { id } = useParams();
  const STATUS_ID = 'customer_order_details__element-order-details-label-delivery-status';
  const sellers = ['Delivery App Admin', 'Fulana Pereira', 'Cliente Zé Birita'];
  const storageCart = JSON.parse(localStorage.getItem('cart'));
  const storageSalles = JSON.parse(localStorage.getItem('salles'));

  const calculateTotalPrice = () => storageCart
    .reduce((total, item) => total + item.price * item.quantity, 0);

  const findSalleById = () => storageSalles.filter((sale) => sale.id === Number(id));
  return (
    <div>
      <NavBarProducts />
      <div>
        <p data-testid="customer_order_details__element-order-details-label-order-id">
          {`PEDIDO: ${findSalleById()[0].id}`}
        </p>
        <p data-testid="customer_order_details__element-order-details-label-seller-name">
          {`P.Vend: ${sellers[findSalleById()[0].sellerId - 1]}`}
        </p>
        <p data-testid="customer_order_details__element-order-details-label-order-date">
          {`Data: ${formatDate(findSalleById()[0].saleDate)}`}
        </p>
        <p data-testid={ STATUS_ID }>{findSalleById()[0].status}</p>
        <button
          disabled
          type="button"
          data-testid="customer_order_details__button-delivery-check"
        >
          Marcar como entregue
        </button>
        {storageCart.map((salle, index) => (
          <CustomerOrderCart salle={ salle } index={ index + 1 } key={ index } />
        ))}
      </div>
      <span data-testid="customer_order_details__element-order-total-price">
        {`Total: ${calculateTotalPrice().toFixed(2).replace('.', ',')}`}
      </span>
    </div>
  );
}

export default CustomerOrderDetails;
