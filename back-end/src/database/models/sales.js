'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sales extends Model {
    static associate(models) {
      Sales.belongsTo(models.User, {
        foreignKey: 'userId', as: 'client',
      })
      Sales.belongsTo(models.User, {
        foreignKey: 'sellerId', as: 'seller',
      })
    }
  }
  Sales.init({
    userId: DataTypes.NUMBER,
    sellerId: DataTypes.NUMBER,
    totalPrice: DataTypes.NUMBER,
    deliveryAddress: DataTypes.STRING,
    deliveryNumber: DataTypes.STRING,
    saleDate: DataTypes.DATE,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Sales',
    underscored: true,
  });
  return Sales;
};