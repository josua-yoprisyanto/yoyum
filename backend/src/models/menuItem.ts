'use strict';
import { Model } from 'sequelize';

interface menuItemAttributes{
  id: number;  
  name: string;
  seller_id: any;
  img: string;
  price: number;
  type: any;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class MenuItem extends Model<menuItemAttributes> implements menuItemAttributes {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    id!: number    
    name!: string
    seller_id!: any
    img!: string
    price!: number
    type!: any  
    static associate(models: any) {
      // define association here
      MenuItem.belongsTo(models.Seller, {
        as: 'menu_items',
        foreignKey: 'seller_id'
      })
    }
  }
  MenuItem.init({
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
    seller_id:{
        allowNull: false,
        type: DataTypes.INTEGER
    },
    img:{      
      type: DataTypes.STRING
    },
    price: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    type:{
        allowNull: false,
        type: DataTypes.ENUM('food', 'drink', 'other')
    }
  }, {
    sequelize,
    modelName: 'MenuItem',
    tableName: 'menu_items'
  });
  return MenuItem;
};