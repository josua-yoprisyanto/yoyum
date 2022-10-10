'use strict';
import { Model } from 'sequelize';

interface otherAttributes{
  id: number,
  standId: number,
  name: string,
  img: string,
  price: number,
  createdAt: Date,
  updatedAt: Date
}

module.exports = (sequelize: any, DataTypes: any) => {
  class otherItems extends Model<otherAttributes> implements otherAttributes {
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
      otherItems.belongsTo(models.seller, {
        as: 'other_items',
        foreignKey:{name: 'standId'}
      })
    }
  }
  otherItems.init({
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
    modelName: 'otherItems',
  });
  return otherItems;
};