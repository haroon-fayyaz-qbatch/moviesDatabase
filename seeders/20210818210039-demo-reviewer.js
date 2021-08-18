'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {

        return queryInterface.bulkInsert('reviewer', [{
                rev_id: 9001,
                rev_name: 'Righty Sock',
                created_at: new Date(),
                updated_at: new Date()
            }, {
                rev_id: 9002,
                rev_name: 'Jack Malvern',
                created_at: new Date(),
                updated_at: new Date()
            },

            {
                rev_id: 9003,
                rev_name: 'Flagrant Baronessa',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                rev_id: 9004,
                rev_name: 'Alec Shaw',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                rev_id: 9005,
                rev_name: null,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                rev_id: 9006,
                rev_name: 'Victor Woeltjen',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                rev_id: 9007,
                rev_name: 'Simon Wright',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                rev_id: 9008,
                rev_name: 'Neal Wruck',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                rev_id: 9009,
                rev_name: 'Paul Monks',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                rev_id: 9010,
                rev_name: 'Mike Salvati',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                rev_id: 9011,
                rev_name: null,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                rev_id: 9012,
                rev_name: 'Wesley S.Walker',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                rev_id: 9013,
                rev_name: 'Sasha Goldshtein',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                rev_id: 9014,
                rev_name: 'Josh Cates',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                rev_id: 9015,
                rev_name: 'Krug Stillo',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                rev_id: 9016,
                rev_name: 'Scott LeBrun',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                rev_id: 9017,
                rev_name: 'Hannah Steele',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                rev_id: 9018,
                rev_name: 'Vincent Cadena',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                rev_id: 9019,
                rev_name: 'Brandt Sponseller',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                rev_id: 9020,
                rev_name: 'Richard Adams',
                created_at: new Date(),
                updated_at: new Date()
            },
        ]);
    },

    down: async(queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('reviewer', null, {});
    }
};