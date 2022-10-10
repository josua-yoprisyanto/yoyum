'use strict';
import { Model } from 'sequelize';

interface sellerAttributes{
  id: number,
  name: string,
  number: string,
  email: string,
  password: string,
  active: boolean,
  createdAt: Date,
  updatedAt: Date
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Seller extends Model<sellerAttributes> implements sellerAttributes {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    id!: number
    name!: string
    number!: string
    email!: string
    password!: string
    active!: boolean
    createdAt!: Date
    updatedAt!: Date


    static associate(models: any) {
      // define association here
      Seller.hasMany(models.foodItems, {as: 'food_items'})
      Seller.hasMany(models.drinkItems, {as: 'drink_items'})
      Seller.hasMany(models.otherItems, {as: 'other_items'})
    }
  }
  Seller.init({
    id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER
    },
    name:{
      allowNull: false,
      type: DataTypes.STRING
    },
    number:{
      allowNull: false,
      type: DataTypes.STRING
    },
    email:{
      allowNull: false,
      type: DataTypes.STRING
    },
    password:{
      allowNull: false,
      type: DataTypes.STRING
    },
    active:{      
      type: DataTypes.BOOLEAN,
      defaultValue: true
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
    modelName: 'seller',
  });
  return Seller;
};