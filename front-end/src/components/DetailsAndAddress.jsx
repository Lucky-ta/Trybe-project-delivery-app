import PropTypes from 'prop-types';
import React from 'react';

export default function DetailsAndAddress({ finishSale, body }) {
  return (
    <div>
      <select
        data-testid="customer_checkout__select-seller"
        onChange={ (e) => { body.sellerId = e.target.value; } }
      >
        <option value={ 1 }>Delivery App Admin</option>
        <option value={ 2 }>Fulana Pereira</option>
        <option value={ 3 }>Cliente Zé Birita</option>
      </select>
      <input
        type="text"
        data-testid="customer_checkout__input-address"
        onChange={ (e) => { body.deliveryAddress = e.target.value; } }
      />
      <input
        type="text"
        data-testid="customer_checkout__input-addressNumber"
        onChange={ (e) => { body.deliveryNumber = e.target.value; } }
      />
      <button
        type="button"
        data-testid="customer_checkout__button-submit-order"
        onClick={ finishSale }
      >
        Finalizar pedido
      </button>
    </div>
  );
}

DetailsAndAddress.propTypes = {
  body: PropTypes.shape({
    deliveryNumber: PropTypes.number,
    deliveryAddress: PropTypes.string,
    sellerId: PropTypes.number,
  }).isRequired,
  finishSale: PropTypes.func.isRequired,
};
