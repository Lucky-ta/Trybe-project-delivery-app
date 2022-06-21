const { setNewSalle, getSalesById, filterSellerOrdersById } = require('../services/SalleService');

const postSalles = async (req, res) => {
  // console.log(req.body);
  try {
    const { id: bodyId, ...bodyWithoutId } = req.body;
    console.log(bodyWithoutId);
    const result = await setNewSalle(bodyWithoutId);
    return res.status(result.status).json(result.data);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

const getSalesByUserId = async (req, res) => {
  const { id } = req.body;
  console.log(id);
  const result = await getSalesById(id);

  res.status(result.status).json(result.data);
};

const getSellerOrdersById = async (req, res) => {
  const { id } = req.params;
  const numberId = Number(id);
  const result = await filterSellerOrdersById(numberId);
  return res.status(result.status).json(result.data);
};

module.exports = { postSalles, getSalesByUserId, getSellerOrdersById };
