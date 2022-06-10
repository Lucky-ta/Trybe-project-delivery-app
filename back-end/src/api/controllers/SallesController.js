const { setNewSalle } = require('../services/SalleService');

const postSallesById = async (req, res) => {
  try {
    const result = await setNewSalle(req.body);
    return res.status(result.status).json(result.data);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = { postSallesById };
