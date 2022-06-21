import PropTypes from 'prop-types';
import React from 'react';

function SellerOrderDetailCard({ products, index, orders }) {
  const filteredProduct = orders.filter(
    (order) => order.productId === products[0].id,
  );

  return (
    <div>
      <p
        data-testid={ `seller_order_details__element-order-table-item-number-${index}` }
      >
        {index}

      </p>
      <p
        data-testid={ `seller_order_details__element-order-table-name-${index}` }
      >
        {products[0].name}

      </p>
      <p
        data-testid={ `seller_order_details__element-order-table-quantity-${index}` }
      >
        {filteredProduct[0].quantity}

      </p>
      <p
        data-testid={ `seller_order_details__element-order-table-unit-price-${index}` }
      >
        {products[0].price.replace('.', ',')}

      </p>
      <p
        data-testid={ `seller_order_details__element-order-table-sub-total-${index}` }
      >
        {(filteredProduct[0].quantity * products[0].price)
          .toFixed(2)
          .replace('.', ',')}
      </p>
    </div>
  );
}

SellerOrderDetailCard.propTypes = {
  index: PropTypes.number.isRequired,
  orders: PropTypes.shape({
    filter: PropTypes.func.isRequired,
  }).isRequired,
  products: PropTypes.arrayOf(Object).isRequired,
};

export default SellerOrderDetailCard;
