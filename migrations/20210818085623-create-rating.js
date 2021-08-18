'use strict';
module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable('rating', {
            mov_id: {
                type: Sequelize.INTEGER,
                allowNull: true,
                references: { model: "movie", key: "mov_id" },
            },
            rev_id: {
                type: Sequelize.INTEGER,
                allowNull: true,
                references: { model: "reviewer", key: "rev_id" },
            },
            rev_stars: {
                type: Sequelize.INTEGER
            },
            num_o_ratings: {
                type: Sequelize.INTEGER
            },
            created_at: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updated_at: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: async(queryInterface, Sequelize) => {
        await queryInterface.dropTable('rating');
    }
};