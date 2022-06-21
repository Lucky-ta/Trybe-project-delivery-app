import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavBarProducts from '../components/NavBarProducts';
import SellerOrderDetailCard from '../components/SellerOrderDetailCard';
import formatDate from '../utils/dateFunction';

function SellerOrdersDetailsPage() {
  const sotrageSalles = JSON.parse(localStorage.getItem('salles'));
  const storageOrderSalles = JSON.parse(localStorage.getItem('orderSalles'));
  const storageStatus = localStorage.getItem('status');
  const { id } = useParams();

  const filterOrder = () => sotrageSalles
    .filter((salle) => salle.id === Number(id));

  const order = filterOrder();

  const [status, setStatus] = useState(order[0].status);

  const calculateTotalPrice = () => storageOrderSalles.filteredProducts
    .reduce((total, item, index) => total + Number(item[0].price) * storageOrderSalles
      .salles[index].quantity, 0);

  const handleStatus = () => {
    setStatus('Preparando');

    localStorage.setItem('status', 'Preparando');
  };

  const handleinTransitStatus = () => {
    setStatus('Em Trânsito');
    localStorage.setItem('status', 'Em Trânsito');
  };

  useEffect(() => {
    if (storageStatus) setStatus('Preparando');
  }, []);

  return (
    <div>
      <NavBarProducts />
      <div>
        <span
          data-testid="seller_order_details__element-order-details-label-order-id"
        >
          {`PEDIDO: ${id}`}

        </span>
        <span
          data-testid="seller_order_details__element-order-details-label-order-date"
        >
          {`DATA: ${formatDate(order[0].saleDate)}`}

        </span>
        <span
          data-testid="seller_order_details__element-order-details-label-delivery-status"
        >
          {storageStatus || status}

        </span>
        <button
          data-testid="seller_order_details__button-preparing-check"
          type="button"
          onClick={ handleStatus }
          disabled={ status !== 'Pendente' }
        >
          PREPARAR PEDIDO

        </button>
        <button
          data-testid="seller_order_details__button-dispatch-check"
          type="button"
          disabled={ storageStatus !== 'Preparando' }
          onClick={ handleinTransitStatus }
        >
          SAIU PARA ENTREGA

        </button>
        { storageOrderSalles.filteredProducts
          .map((product, index) => (<SellerOrderDetailCard
            products={ product }
            orders={ storageOrderSalles.salles }
            index={ index + 1 }
            key={ index }
          />)) }
      </div>
      <p
        data-testid="seller_order_details__element-order-total-price"
      >
        {`Total: ${calculateTotalPrice().toFixed(2).replace('.', ',')}`}

      </p>
    </div>
  );
}

export default SellerOrdersDetailsPage;
