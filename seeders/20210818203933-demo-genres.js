'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('genres', [{
                gen_id: 1001,
                gen_title: 'Action',
                created_at: new Date(),
                updated_at: new Date()
            }, {
                gen_id: 1002,
                gen_title: 'Adventure',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                gen_id: 1003,
                gen_title: 'Animation',
                created_at: new Date(),
                updated_at: new Date()
            }, {
                gen_id: 1004,
                gen_title: 'Biography',
                created_at: new Date(),
                updated_at: new Date()
            }, {
                gen_id: 1005,
                gen_title: 'Comedy',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                gen_id: 1006,
                gen_title: 'Crime',
                created_at: new Date(),
                updated_at: new Date()
            }, {
                gen_id: 1007,
                gen_title: 'Drama',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                gen_id: 1008,
                gen_title: 'Horror',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                gen_id: 1009,
                gen_title: 'Music',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                gen_id: 1010,
                gen_title: 'Mystery',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                gen_id: 1011,
                gen_title: 'Romance',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                gen_id: 1012,
                gen_title: 'Thriller',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                gen_id: 1013,
                gen_title: 'War',
                created_at: new Date(),
                updated_at: new Date()
            },
        ]);
    },

    down: async(queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('genres', null, {});
    }
};