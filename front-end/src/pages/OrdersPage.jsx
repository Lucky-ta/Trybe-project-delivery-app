import React, { useEffect, useState } from 'react';
import NavBarProducts from '../components/NavBarProducts';
import OrdersPageCards from '../components/OrdersPageCards';
import { getSalles } from '../service/salleApi';

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
      {salles.map((saleData, index) => (
        <OrdersPageCards key={ index } saleData={ saleData } />
      ))}
    </div>
  );
}

export default OrdersPage;
