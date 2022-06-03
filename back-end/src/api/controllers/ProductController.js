const ProductService = require('../services/ProductService');

const getProducts = async (_req, res) => {
    try {
        const result = await ProductService.getProducts();
        return res.status(200).json(result);
    } catch (e) {
        return res.status(500).json(e.message);
    }
};

module.exports = { getProducts };
