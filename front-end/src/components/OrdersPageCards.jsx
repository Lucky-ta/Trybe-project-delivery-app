import PropTypes from 'prop-types';
import React from 'react';

function OrdersPageCards({ saleData }) {
  return (
    <div>
      <span data-testid={ `customer_orders__element-order-id-${saleData.id}` }>
        {saleData.id}
      </span>
      <h3
        data-testid={ `customer_orders__element-delivery-status-${saleData.id}` }
      >
        {saleData.status}
      </h3>
      <span data-testid={ `customer_orders__element-order-date-${saleData.id}` }>
        {saleData.saleDate}
      </span>
      <span data-testid={ `customer_orders__element-card-price-${saleData.id}` }>
        {saleData.totalPrice}
      </span>
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
};

export default OrdersPageCards;
