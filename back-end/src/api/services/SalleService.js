const { Sales } = require('../../database/models');
const { SaleProducts } = require('../../database/models');
const { getProducts } = require('./ProductService');

const setNewSalle = async (body) => {
  const result = await Sales.create(body);
  if (result) {
    const { id } = result.dataValues;
    const { productId, quantity } = body;

    productId.forEach(async (pId, index) => {
      await SaleProducts.create({
        saleId: id,
        productId: pId,
        quantity: quantity[index],
      });
    });

    return { status: 201, data: result };
  }
  return { status: 404, data: 'deu ruim' };
};

const getSalesById = async (id) => {
  const query = await Sales.findAll({
    where: {
      userId: id,
    },
  });
  if (!query) {
    return {
      status: 400,
      data: { message: 'Erro' },
    };
  }
  return { status: 200, data: query };
};

const filterSellerOrdersById = async (saleId) => {
  const salles = await SaleProducts.findAll({ where: { saleId } });
  const products = await getProducts();
  // console.log(salles[0].dataValues.productId);
  const allSales = salles.map((salle) => salle.dataValues);
  const allProduct = products.map((product) => product.dataValues);

  const filteredProducts = allSales
  .map((sale) => allProduct.filter((product) => product.id === sale.productId));

  if (!salles) {
    return {
      status: 404,
      data: { message: 'Deu ruim' },
    };
  } return {
    status: 200,
    data: { salles, filteredProducts },
  };
};

module.exports = { setNewSalle, getSalesById, filterSellerOrdersById };
