import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

export default function CheckoutCard({ product, index }) {
  const { cart, setCart } = useContext(AppContext);

  const removeItem = () => {
    const newCart = cart.filter((c) => c.id !== product.id);
    setCart(newCart);
  };

  return (
    <div>
      <span data-testid={ `customer_checkout__element-order-table-item-number-${index}` }>
        {index + 1}
      </span>
      <h2 data-testid={ `customer_checkout__element-order-table-name-${index}` }>
        {product.name}
      </h2>
      <p data-testid={ `customer_checkout__element-order-table-quantity-${index}` }>
        {product.quantity}
      </p>
      <p data-testid={ `customer_checkout__element-order-table-unit-price-${index}` }>
        {product.price.replace('.', ',')}
      </p>
      <p
        data-testid={ `customer_checkout__element-order-table-sub-total-${index}` }
      >
        {Number(product.price * product.quantity).toFixed(2).replace('.', ',')}
      </p>
      <button
        type="button"
        data-testid={ `customer_checkout__element-order-table-remove-${index}` }
        onClick={ removeItem }
      >
        Remover
      </button>
    </div>
  );
}

CheckoutCard.propTypes = {
  index: PropTypes.number.isRequired,
  product: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.string,
    quantity: PropTypes.number,
  }).isRequired,
};
