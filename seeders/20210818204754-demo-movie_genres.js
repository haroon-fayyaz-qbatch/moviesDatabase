'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {

        return queryInterface.bulkInsert('movie_genres', [{
                mov_id: 922,
                gen_id: 1001,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                mov_id: 917,
                gen_id: 1002,
                created_at: new Date(),
                updated_at: new Date()
            }, {
                mov_id: 903,
                gen_id: 1002,
                created_at: new Date(),
                updated_at: new Date()
            }, {
                mov_id: 912,
                gen_id: 1003,
                created_at: new Date(),
                updated_at: new Date()
            }, {
                mov_id: 911,
                gen_id: 1005,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                mov_id: 908,
                gen_id: 1006,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                mov_id: 913,
                gen_id: 1006,
                created_at: new Date(),
                updated_at: new Date()
            }, {
                mov_id: 926,
                gen_id: 1007,
                created_at: new Date(),
                updated_at: new Date()
            }, {
                mov_id: 928,
                gen_id: 1007,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                mov_id: 918,
                gen_id: 1007,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                mov_id: 921,
                gen_id: 1007,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                mov_id: 902,
                gen_id: 1008,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                mov_id: 923,
                gen_id: 1009,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                mov_id: 907,
                gen_id: 1010,
                created_at: new Date(),
                updated_at: new Date()
            }, {
                mov_id: 927,
                gen_id: 1010,
                created_at: new Date(),
                updated_at: new Date()
            }, {
                mov_id: 901,
                gen_id: 1010,
                created_at: new Date(),
                updated_at: new Date()
            }, {
                mov_id: 914,
                gen_id: 1011,
                created_at: new Date(),
                updated_at: new Date()
            }, {
                mov_id: 906,
                gen_id: 1012,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                mov_id: 904,
                gen_id: 1013,
                created_at: new Date(),
                updated_at: new Date()
            },
        ]);
    },

    down: async(queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('movie_genres', null, {});
    }
};