import PropTypes from 'prop-types';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getOrderSalles } from '../service/salleApi';
import formatDate from '../utils/dateFunction';

function OrderSellerCard({ order }) {
  const navigate = useNavigate();

  const redirectOrderDetails = async () => {
    const result = await getOrderSalles(order.id);
    localStorage.setItem('orderSalles', JSON.stringify(result));
    return navigate(`/seller/orders/${order.id}`);
  };

  return (
    <div onClick={ redirectOrderDetails } onKeyDown role="button" tabIndex={ 0 }>
      <span
        data-testid={ `seller_orders__element-order-id-${order.id}` }
      >
        { order.id }

      </span>
      <h3
        data-testid={ `seller_orders__element-delivery-status-${order.id}` }
      >
        { order.status }

      </h3>
      <p
        data-testid={ `seller_orders__element-order-date-${order.id}` }
      >
        { formatDate(order.saleDate) }

      </p>
      <p
        data-testid={ `seller_orders__element-card-price-${order.id}` }
      >
        { order.totalPrice.replace('.', ',') }

      </p>
      <p
        data-testid={ `seller_orders__element-card-address-${order.id}` }
      >
        { `${order.deliveryAddress}, ${order.deliveryNumber}` }

      </p>
    </div>
  );
}

OrderSellerCard.propTypes = {
  order: PropTypes.shape({
    deliveryAddress: PropTypes.string,
    id: PropTypes.number,
    saleDate: PropTypes.string,
    status: PropTypes.string,
    totalPrice: PropTypes.string,
    deliveryNumber: PropTypes.string,
  }).isRequired,
};

export default OrderSellerCard;
