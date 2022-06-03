import React from 'react';
import PropTypes from 'prop-types';

export default function ProductCard({ id, url_image: urlImage, name, price }) {
  // TODO: mudar o div para Link
  return (
    <div className="card m-2 mx-auto col-md w-200px">
      <img
        src={ urlImage }
        alt="Imagem do Produto"
        data-testid={ `customer_products__img-card-bg-image-${id}` }
      />
      <h3 data-testid={ `customer_products__element-card-title-${id}` }>{name}</h3>
      <p data-testid={ `customer_products__element-card-price-${id}` }>{price}</p>
    </div>
  );
}

ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  url_image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
