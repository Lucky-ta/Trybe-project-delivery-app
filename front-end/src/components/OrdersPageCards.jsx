import PropTypes from 'prop-types';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function OrdersPageCards({ saleData, date }) {
  const navigate = useNavigate();
  const handleCart = () => {
    navigate(`/customer/orders/${saleData.id}`);
  };

  return (
    <div onClick={ handleCart } onKeyDown role="button" tabIndex={ 0 }>
      <span data-testid={ `customer_orders__element-order-id-${saleData.id}` }>
        {saleData.id}
      </span>
      <h3
        data-testid={ `customer_orders__element-delivery-status-${saleData.id}` }
      >
        {saleData.status}
      </h3>
      <span data-testid={ `customer_orders__element-order-date-${saleData.id}` }>
        {date}
      </span>
      <p data-testid={ `customer_orders__element-card-price-${saleData.id}` }>
        {saleData.totalPrice.replace('.', ',')}
      </p>
    </div>
  );
}

OrdersPageCards.propTypes = {
  saleData: PropTypes.shape({
    saleDate: PropTypes.string,
    id: PropTypes.number,
    status: PropTypes.string,
    totalPrice: PropTypes.string,
  }).isRequired,
  date: PropTypes.string.isRequired,
};

export default OrdersPageCards;
