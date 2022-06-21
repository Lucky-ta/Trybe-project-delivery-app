import { Api } from './Api';

const postSale = async (token, sale) => {
  const result = await Api.post('/customer/orders', sale, {
    headers: { Authorization: token },
  });
  return result.data;
};

const getSalles = async (token) => {
  const result = await Api.get('/customer/orders', {
    headers: { Authorization: token },
  });
  return result.data;
};

const getOrderSalles = async (id) => {
  const result = await Api.get(`/seller/orders/${id}`);
  return result.data;
};

export { postSale, getSalles, getOrderSalles };
