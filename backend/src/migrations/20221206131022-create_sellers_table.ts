'use strict';
import { DataTypes, QueryInterface} from 'sequelize'

module.exports = {
  up: async (queryInterface: QueryInterface, _: any) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: DataTypes.INTEGER });
     */
     await queryInterface.createTable('sellers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },   
      name:{
        allowNull: false,
        type: DataTypes.STRING
      },
      email:{
        allowNull: false,
        type: DataTypes.STRING
      },
      number:{
        allowNull: false,
        type: DataTypes.STRING
      },
      password:{
        allowNull: false,
        type: DataTypes.STRING
      },
      active:{
        type: DataTypes.BOOLEAN
      },
      created_at: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updated_at: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },

  down: async (queryInterface: QueryInterface, _: any) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('sellers')
  }
};
