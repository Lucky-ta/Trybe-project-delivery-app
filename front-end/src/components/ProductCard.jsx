import React, { useRef } from 'react';
import PropTypes from 'prop-types';

export default function ProductCard({ id, urlImage, name, price, updateCart }) {
  const quantity = useRef(0);

  const updateQty = (number) => {
    if (number < 0) {
      quantity.current = 0;
      return null;
    }
    quantity.current = (number);
    updateCart(quantity.current);
  };

  // TODO: mudar o div para Link para o produto
  return (
    <div className="">
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
      <div className="">
        <button
          className="buttonProduct mx-2"
          type="button"
          onClick={ () => updateQty(quantity.current - 1) }
          data-testid={ `customer_products__button-card-rm-item-${id}` }
        >
          -
        </button>
        <input
          className=""
          type="number"
          name="quantity"
          min="0"
          value={ quantity.current }
          data-testid={ `customer_products__input-card-quantity-${id}` }
          onChange={ (e) => updateQty(e.target.value) }
        />
        <button
          className="mx-2"
          type="button"
          onClick={ () => updateQty(quantity.current + 1) }
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
};
