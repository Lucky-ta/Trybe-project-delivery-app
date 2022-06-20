import React, { useEffect, useState } from 'react';
import NavBarProducts from '../components/NavBarProducts';
import OrdersPageCards from '../components/OrdersPageCards';
import { getSalles } from '../service/salleApi';

function OrdersPage() {
  const storageUser = JSON.parse(localStorage.getItem('user'));
  const [salles, SetSalles] = useState([]);

  // https://blog.betrybe.com/javascript/javascript-date-format/#4
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
        // https://blog.betrybe.com/javascript/javascript-date-format/#4
        const date = new Date(saleData.saleDate);git
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
