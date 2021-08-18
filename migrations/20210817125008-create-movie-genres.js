"use strict";
module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable("movie_genres", {
            gen_id: {
                type: Sequelize.INTEGER,
                allowNull: true,
                references: { model: "genres", key: "gen_id" },
            },
            mov_id: {
                type: Sequelize.INTEGER,
                allowNull: true,
                references: { model: "movie", key: "mov_id" },
            },
            created_at: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updated_at: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    down: async(queryInterface, Sequelize) => {
        await queryInterface.dropTable("movie_genres");
    },
};