const { Product } = require('../../database/models');

const getProducts = async () => {
  const query = await Product.findAll();
  return query;
};

module.exports = {
    getProducts,
};