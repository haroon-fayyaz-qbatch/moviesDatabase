"use strict";
module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable("movie", {
            mov_id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            mov_title: {
                type: Sequelize.STRING,
            },
            mov_year: {
                type: Sequelize.INTEGER,
            },
            mov_time: {
                type: Sequelize.INTEGER,
            },
            mov_lang: {
                type: Sequelize.STRING,
            },
            mov_dt_rel: {
                type: Sequelize.DATEONLY,
            },
            mov_rel_country: {
                type: Sequelize.STRING,
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
    down: async(queryInterface, Sequelize) => {
        await queryInterface.dropTable("movie");
    },
};