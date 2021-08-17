"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("movie_cast", {
      role: {
        type: Sequelize.STRING,
      },
      act_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: "actor", key: "act_id" },
      },
      mov_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: "movie", key: "mov_id" },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("movie_casts");
  },
};
