import PropTypes from 'prop-types';
import React from 'react';

function CustomerOrderCart({ salle, index }) {
  return (
    <div>
      <span
        data-testid={ `customer_order_details__element-order-table-item-number-${index}` }
      >
        {index}
      </span>
      <h3
        data-testid={ `customer_order_details__element-order-table-name-${index}` }
      >
        {salle.name}
      </h3>
      <p
        data-testid={ `customer_order_details__element-order-table-quantity-${index}` }
      >
        {salle.quantity}
      </p>
      <p
        data-testid={ `customer_order_details__element-order-table-sub-total-${index}` }
      >
        {salle.price.replace('.', ',')}
      </p>
      <p
        data-testid={ `customer_order_details__element-order-total-price-${index}` }
      >
        {JSON.stringify((salle.price * salle.quantity)).replace('.', ',')}
      </p>
    </div>
  );
}

CustomerOrderCart.propTypes = {
  index: PropTypes.number.isRequired,
  salle: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number,
  }).isRequired,
};

export default CustomerOrderCart;
