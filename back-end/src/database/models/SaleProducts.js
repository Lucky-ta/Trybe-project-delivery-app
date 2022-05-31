'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SaleProducts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      SaleProducts.belongsToMany(models.Sales, {
        foreignKey: 'sale_id',
      })
      SaleProducts.belongsToMany(models.Products, {
        foreignKey: 'product_id',
      })
    }
  }
  SaleProducts.init({
    sale_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'SaleProducts',
  });
  return SaleProducts;
};