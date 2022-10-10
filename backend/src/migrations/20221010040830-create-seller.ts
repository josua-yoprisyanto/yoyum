'use strict';
module.exports = {
  async up(queryInterface: any, Sequelize: any) {
    await queryInterface.createTable('sellers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },   
      name:{
        allowNull: false,
        type: Sequelize.STRING
      },
      email:{
        allowNull: false,
        type: Sequelize.STRING
      },
      password:{
        allowNull: false,
        type: Sequelize.STRING
      },
      active:{
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface: any, Sequelize: any) {
    await queryInterface.dropTable('sellers');
  }
};