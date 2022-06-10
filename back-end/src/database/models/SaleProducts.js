'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SaleProducts extends Model {
    static associate(models) {
      models.Product.belongsToMany(models.Sales, {
        foreignKey: 'productId', otherKey: 'saleId' , through: SaleProducts, as: 'sales'
      })
      models.Sales.belongsToMany(models.Product, {
        foreignKey: 'saleId', otherKey: 'productId' , through: SaleProducts, as: 'products'
      })
    }
  }
  SaleProducts.init({
    saleId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'SaleProducts',
    underscored: true,
    tableName: 'salesProducts'
  });
  return SaleProducts;
};
