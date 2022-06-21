import React, { useEffect, useState } from 'react';
import NavBarProducts from '../components/NavBarProducts';
import OrdersPageCards from '../components/OrdersPageCards';
import { getSalles } from '../service/salleApi';
import formatDate from '../utils/dateFunction';

function OrdersPage() {
  const storageUser = JSON.parse(localStorage.getItem('user'));
  const [salles, SetSalles] = useState([]);

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
        const formatedDate = formatDate(saleData.saleDate);
        return (
          <OrdersPageCards key={ index } saleData={ saleData } date={ formatedDate } />
        );
      })}
    </div>
  );
}

export default OrdersPage;
