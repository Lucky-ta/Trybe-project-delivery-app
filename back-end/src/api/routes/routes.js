const express = require('express');
const { userLogin, userRegister } = require('../controllers/UserController');
const { getProducts } = require('../controllers/ProductController');
// const jwtUtils = require('../utils/jwt');

const router = express.Router();

router.post('/login', userLogin);
router.post('/register', userRegister);

router.get(
  '/customer/products',
  // jwtUtils.verifyToken,
  getProducts,
);

module.exports = {
    router,
};
