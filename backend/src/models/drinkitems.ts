'use strict';
import { Model } from 'sequelize';

interface drinkAttributes{
  id: number,
  standId: number,
  name: string,
  img: string,
  price: number,
  createdAt: Date,
  updatedAt: Date
}

module.exports = (sequelize: any, DataTypes: any) => {
  class drinkItems extends Model<drinkAttributes> implements drinkAttributes {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    id!: number
    standId!: number
    name!: string
    img!: string
    price!: number
    createdAt!: Date
    updatedAt!: Date
    static associate(models: any) {
      // define association here
      drinkItems.belongsTo(models.seller, {
        as: 'drink_items',
        foreignKey: {name: 'standId'}
      })
    }
  }
  drinkItems.init({
    id:{
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    standId:{
      allowNull: false,
      type: DataTypes.INTEGER
    },
    name:{
      allowNull: false,
      type: DataTypes.STRING
    },
    img:{      
      type: DataTypes.STRING
    },
    price: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'drinkItems',
  });
  return drinkItems;
};