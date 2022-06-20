const { Sales } = require('../../database/models');
const { SaleProducts } = require('../../database/models');

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

module.exports = { setNewSalle, getSalesById };
