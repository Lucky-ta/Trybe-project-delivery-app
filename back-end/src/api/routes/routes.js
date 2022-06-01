const express = require('express');
const { UseController } = require('../controllers/UserController');

const router = express.Router();

router.post('/login', UseController)

module.exports = {
    router
}