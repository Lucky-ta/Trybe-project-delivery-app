import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
// import { Button } from 'react-bootstrap';

export default function ProductCard({ id, urlImage, name, price, updateCart }) {
  const [quantity, setQuantity] = useState(0);
  const [operation, setOperation] = useState('add');

  const updateQuantity = (number) => {
    if (number < quantity) setOperation('subtract');
    setQuantity(number);
  };

  const changeQuantity = useCallback((operationParam) => {
    let newQuantity = quantity;
    if (operationParam === 'add') newQuantity += 1;
    if (operationParam === 'subtract') newQuantity -= 1;
    if (newQuantity < 0) newQuantity = 0;
    // updateQuantity(newQuantity);
    setQuantity(newQuantity);
  }, [quantity]);

  const handleAddToCart = (operationParam) => {
    setOperation(operationParam);
    changeQuantity(operationParam);
    updateCart(operationParam, quantity, { id, name, price });
  };

  useEffect(() => {
    updateCart(operation, quantity, { id, name, price });
  }, [id, name, price, quantity, updateCart, operation]);

  // TODO: mudar o div para Link para o produto
  return (
    <div className="productCard">
      <p
        data-testid={ `customer_products__element-card-price-${id}` }
      >
        {price.replace('.', ',')}
      </p>
      <img
        src={ urlImage }
        alt="Imagem do Produto"
        data-testid={ `customer_products__img-card-bg-image-${id}` }
      />
      <h3 data-testid={ `customer_products__element-card-title-${id}` }>{name}</h3>
      <div className="d-flex flex-row justify-content-between">
        <button
          className="buttonProduct mx-2"
          type="button"
          onClick={ () => handleAddToCart('subtract') }
          data-testid={ `customer_products__button-card-rm-item-${id}` }
        >
          -
        </button>
        <input
          className="inputProduct"
          type="number"
          name="quantity"
          min="0"
          value={ quantity }
          data-testid={ `customer_products__input-card-quantity-${id}` }
          onChange={ (e) => updateQuantity(e.target.value) }
        />
        <button
          className="buttonProduct mx-2"
          type="button"
          onClick={ () => handleAddToCart('add') }
          data-testid={ `customer_products__button-card-add-item--${id}` }
        >
          +
        </button>
      </div>

    </div>
  );
}

ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  urlImage: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  updateCart: PropTypes.func.isRequired,
  // quantity: PropTypes.number.isRequired,
};
