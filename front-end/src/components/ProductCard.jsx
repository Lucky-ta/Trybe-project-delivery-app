import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function ProductCard(props) {
  const { id, urlImage, name, price, quantityP, updateCart } = props;
  const [quantity, setQuantity] = useState(quantityP);

  const updateQty = (number) => {
    console.log(id);
    if (number < 0) {
      setQuantity(0);
      return null;
    }
    setQuantity(number);
    updateCart(number);
  };

  // TODO: mudar o div para Link para o produto
  return (
    <div>
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
      <div>
        <button
          type="button"
          onClick={ () => updateQty(quantity - 1) }
          data-testid={ `customer_products__button-card-rm-item-${id}` }
        >
          -
        </button>
        <input
          type="number"
          name="quantity"
          min="0"
          value={ quantity }
          data-testid={ `customer_products__input-card-quantity-${id}` }
          onChange={ (e) => updateQty(+e.target.value) }
        />
        <button
          type="button"
          onClick={ () => updateQty(quantity + 1) }
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
  quantityP: PropTypes.number.isRequired,
};
