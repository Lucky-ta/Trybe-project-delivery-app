'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      Product.hasMany(models.SaleProducts)
    }
  }
  Product.init({
    name: DataTypes.STRING,
    price: DataTypes.NUMBER,
    urlImage: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Product',
    tableName: 'products',
    underscored: true,
  });
  return Product;
};