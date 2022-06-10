import { Api } from './Api';

const postSale = async (token, sale) => {
  const result = await Api.post('/customer/orders', sale, {
    headers: { Authorization: token },
  });
  return result.data;
};

export default postSale;
