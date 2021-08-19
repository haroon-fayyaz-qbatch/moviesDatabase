'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {

        return queryInterface.bulkInsert('movie_direction', [{
                dir_id: 201,
                mov_id: 901,
                created_at: new Date(),
                updated_at: new Date()
            }, {
                dir_id: 202,
                mov_id: 902,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                dir_id: 203,
                mov_id: 903,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                dir_id: 204,
                mov_id: 904,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                dir_id: 205,
                mov_id: 905,
                created_at: new Date(),
                updated_at: new Date()
            }, {
                dir_id: 206,
                mov_id: 906,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                dir_id: 207,
                mov_id: 907,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                dir_id: 208,
                mov_id: 908,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                dir_id: 209,
                mov_id: 909,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                dir_id: 210,
                mov_id: 910,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                dir_id: 211,
                mov_id: 911,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                dir_id: 212,
                mov_id: 912,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                dir_id: 213,
                mov_id: 913,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                dir_id: 214,
                mov_id: 914,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                dir_id: 215,
                mov_id: 915,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                dir_id: 216,
                mov_id: 916,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                dir_id: 217,
                mov_id: 917,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                dir_id: 218,
                mov_id: 918,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                dir_id: 219,
                mov_id: 919,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                dir_id: 220,
                mov_id: 920,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                dir_id: 218,
                mov_id: 921,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                dir_id: 215,
                mov_id: 922,
                created_at: new Date(),
                updated_at: new Date()
            }, {
                dir_id: 221,
                mov_id: 923,
                created_at: new Date(),
                updated_at: new Date()
            },
        ]);
    },

    down: async(queryInterface, Sequelize) => {

        await queryInterface.bulkDelete('movie_direction', null, {});

    }
};