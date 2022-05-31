'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sales extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Sales.belongsTo(models.User, {
        foreignKey: 'user_id',
      })
      Sales.belongsTo(models.User, {
        foreignKey: 'seller_id',
      })
    }
  }
  Sales.init({
    user_id: DataTypes.NUMBER,
    seller_id: DataTypes.NUMBER,
    total_price: DataTypes.NUMBER,
    delivery_address: DataTypes.STRING,
    delivery_number: DataTypes.STRING,
    sale_date: DataTypes.DATE,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Sales',
  });
  return Sales;
};