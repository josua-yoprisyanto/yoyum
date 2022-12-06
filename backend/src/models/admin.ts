'use strict';
import { Model } from 'sequelize';

interface adminAttributes{
  id: number,
  email: string,
  password: string,
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Admin extends Model<adminAttributes> implements adminAttributes{
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    id!: number
    email!: string
    password!: string
    static associate(models: any) {
      // define association here
    }
  }
  Admin.init({
    id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false},
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Admin',
    tableName: 'admins'
  });
  return Admin;
};