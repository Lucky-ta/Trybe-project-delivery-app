import React, { useEffect, useState } from 'react';
import NavBarProducts from '../components/NavBarProducts';
import OrderSellerCard from '../components/OrderSellerCard';

function SellerOrdersPage() {
  const [sellerOrder, setSellerOrder] = useState([]);
  const storageSalles = JSON.parse(localStorage.getItem('salles'));
  const storageUser = JSON.parse(localStorage.getItem('user'));

  const filterSallerOrders = () => storageSalles
    .filter((salle) => salle.sellerId === storageUser.id);

  useEffect(() => {
    const sellerOrders = filterSallerOrders();
    setSellerOrder(sellerOrders);
  }, []);

  return (
    <div>
      <NavBarProducts />
      { sellerOrder
        .map((order, index) => <OrderSellerCard order={ order } key={ index } />) }
    </div>
  );
}

export default SellerOrdersPage;
