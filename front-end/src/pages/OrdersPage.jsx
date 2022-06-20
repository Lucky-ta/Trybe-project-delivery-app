import React, { useEffect, useState } from 'react';
import NavBarProducts from '../components/NavBarProducts';
import OrdersPageCards from '../components/OrdersPageCards';
import { getSalles } from '../service/salleApi';

function OrdersPage() {
  const storageUser = JSON.parse(localStorage.getItem('user'));
  const [salles, SetSalles] = useState([]);

  function adicionaZero(numero) {
    const FUNC_NUMBER = 9;
    if (numero <= FUNC_NUMBER) return `0${numero}`;
    return numero;
  }

  useEffect(() => {
    const fetchSalles = async () => {
      const result = await getSalles(storageUser.token);
      SetSalles(result);
    };
    fetchSalles();
  });

  return (
    <div>
      <NavBarProducts />
      {salles.map((saleData, index) => {
        const date = new Date(saleData.saleDate);
        const formatDate = `${adicionaZero(date.getDate())}/${
          adicionaZero(date.getMonth() + 1)
        }/${date.getFullYear()}`;
        return (
          <OrdersPageCards key={ index } saleData={ saleData } date={ formatDate } />
        );
      })}
    </div>
  );
}

export default OrdersPage;
