'use strict';
import { Model } from 'sequelize';

interface foodAttributes{
  id: number,  
  name: string,
  img: string,
  price: number,
  createdAt: Date,
  updatedAt: Date
}

module.exports = (sequelize: any, DataTypes: any) => {
  class foodItems extends Model<foodAttributes> implements foodAttributes {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    id!: number    
    name!: string
    img!: string
    price!: number
    createdAt!: Date
    updatedAt!: Date
    static associate(models: any) {
      // define association here
      foodItems.belongsTo(models.seller, {
        as: 'food_items',
        foreignKey: {name: 'sellerId'}
      })
    }
  }
  foodItems.init({
    id:{
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
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
    modelName: 'foodItems',
  });
  return foodItems;
};