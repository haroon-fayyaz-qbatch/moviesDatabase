'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('movie_cast', [{
                act_id: 101,
                mov_id: 901,
                role: 'John Scottie Ferguson',
                created_at: new Date(),
                updated_at: new Date()
            }, {
                act_id: 102,
                mov_id: 902,
                role: 'Miss Giddens',
                created_at: new Date(),
                updated_at: new Date()
            },

            {
                act_id: 103,
                mov_id: 903,
                role: 'T.E.Lawrence',
                created_at: new Date(),
                updated_at: new Date()
            },

            {
                act_id: 104,
                mov_id: 904,
                role: 'Michael',
                created_at: new Date(),
                updated_at: new Date()
            },

            {
                act_id: 105,
                mov_id: 905,
                role: 'Antonio Salieri',
                created_at: new Date(),
                updated_at: new Date()
            },

            {
                act_id: 106,
                mov_id: 906,
                role: 'Rick Deckard',
                created_at: new Date(),
                updated_at: new Date()
            },

            {
                act_id: 107,
                mov_id: 907,
                role: 'Alice Harford',
                created_at: new Date(),
                updated_at: new Date()
            },

            {
                act_id: 108,
                mov_id: 908,
                role: 'McManus',
                created_at: new Date(),
                updated_at: new Date()
            },

            {
                act_id: 110,
                mov_id: 910,
                role: 'Eddie Adams',
                created_at: new Date(),
                updated_at: new Date()
            },

            {
                act_id: 111,
                mov_id: 911,
                role: 'Alvy Singer',
                created_at: new Date(),
                updated_at: new Date()
            },

            {
                act_id: 112,
                mov_id: 912,
                role: 'San',
                created_at: new Date(),
                updated_at: new Date()
            },

            {
                act_id: 113,
                mov_id: 913,
                role: 'Andy Dufresne',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                act_id: 114,
                mov_id: 914,
                role: 'Lester Burnham',
                created_at: new Date(),
                updated_at: new Date()
            },

            {
                act_id: 115,
                mov_id: 915,
                role: 'Rose DeWitt Bukater',
                created_at: new Date(),
                updated_at: new Date()
            },

            {
                act_id: 116,
                mov_id: 916,
                role: 'Sean Maguire',
                created_at: new Date(),
                updated_at: new Date()
            },

            {
                act_id: 117,
                mov_id: 917,
                role: 'Ed',
                created_at: new Date(),
                updated_at: new Date()
            },

            {
                act_id: 118,
                mov_id: 918,
                role: 'Renton',
                created_at: new Date(),
                updated_at: new Date()
            },

            {
                act_id: 120,
                mov_id: 920,
                role: 'Elizabeth Darko',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                act_id: 121,
                mov_id: 921,
                role: 'Older Jamal',
                created_at: new Date(),
                updated_at: new Date()
            },

            {
                act_id: 122,
                mov_id: 922,
                role: 'Ripley',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                act_id: 114,
                mov_id: 923,
                role: 'Bobby Darin',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                act_id: 109,
                mov_id: 909,
                role: 'J.J.Gittes',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                act_id: 119,
                mov_id: 919,
                role: 'Alfred Borden',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                act_id: 101,
                mov_id: 901,
                role: 'John Scottie Ferguson',
                created_at: new Date(),
                updated_at: new Date()
            },

            {
                act_id: 102,
                mov_id: 902,
                role: 'Miss Giddens',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                act_id: 103,
                mov_id: 903,
                role: 'T.E.Lawrence',
                created_at: new Date(),
                updated_at: new Date()
            },

            {
                act_id: 104,
                mov_id: 904,
                role: 'Michael',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                act_id: 105,
                mov_id: 905,
                role: 'Antonio Salieri',
                created_at: new Date(),
                updated_at: new Date()
            },

            {
                act_id: 106,
                mov_id: 906,
                role: 'Rick Deckard',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                act_id: 107,
                mov_id: 907,
                role: 'Alice Harford',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                act_id: 108,
                mov_id: 908,
                role: 'McManus',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                act_id: 110,
                mov_id: 910,
                role: 'Eddie Adams',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                act_id: 111,
                mov_id: 911,
                role: 'Alvy Singer',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                act_id: 112,
                mov_id: 912,
                role: 'San',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                act_id: 113,
                mov_id: 913,
                role: 'Andy Dufresne',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                act_id: 114,
                mov_id: 914,
                role: 'Lester Burnham',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                act_id: 115,
                mov_id: 915,
                role: 'Rose DeWitt Bukater',
                created_at: new Date(),
                updated_at: new Date()
            },

            {
                act_id: 116,
                mov_id: 916,
                role: 'Sean Maguire',
                created_at: new Date(),
                updated_at: new Date()
            },

            {
                act_id: 117,
                mov_id: 917,
                role: 'Ed',
                created_at: new Date(),
                updated_at: new Date()
            },

            {
                act_id: 118,
                mov_id: 918,
                role: 'Renton',
                created_at: new Date(),
                updated_at: new Date()
            },

            {
                act_id: 120,
                mov_id: 920,
                role: 'Elizabeth Darko',
                created_at: new Date(),
                updated_at: new Date()
            },

            {
                act_id: 121,
                mov_id: 921,
                role: 'Older Jamal',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                act_id: 122,
                mov_id: 922,
                role: 'Ripley',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                act_id: 114,
                mov_id: 923,
                role: 'Bobby Darin',
                created_at: new Date(),
                updated_at: new Date()
            }, {
                act_id: 109,
                mov_id: 909,
                role: 'J.J.Gittes',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                act_id: 119,
                mov_id: 919,
                role: 'Alfred Borden',
                created_at: new Date(),
                updated_at: new Date()
            }
        ]);
    },

    down: async(queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('movie_cast', null, {});
    }
};