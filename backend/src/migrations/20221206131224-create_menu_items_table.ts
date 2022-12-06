'use strict';
import { DataTypes, QueryInterface} from 'sequelize'

module.exports = {
  up: async (queryInterface: QueryInterface, _: any) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     await queryInterface.createTable('menu_items', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      seller_id:{
        allowNull: false,
        type: DataTypes.INTEGER
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING
      },
      img:{
        type: DataTypes.STRING
      },
      price:{
        allowNull: false,
        type: DataTypes.INTEGER
      },
      type:{
        allowNull: false,
        type: DataTypes.ENUM('food', 'drink', 'other')
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

    await queryInterface.addConstraint('menu_items', {
      type: 'foreign key',
      name: 'menu_items_ibfk_1',
      fields: ['seller_id'],
      references:{
        table: 'sellers',
        field: 'id'
      },
      onUpdate: 'RESTRICT',
      onDelete: 'CASCADE'
    })
  },

  down: async (queryInterface: QueryInterface, _: any) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('menu_items')
  }
};
