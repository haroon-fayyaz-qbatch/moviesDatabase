"use strict";
module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.bulkInsert("director", [{
                dir_id: 205,
                dir_fname: 'Milos',
                dir_lname: 'Forman',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                dir_id: 206,
                dir_fname: 'Ridley',
                dir_lname: 'Scott',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                dir_id: 207,
                dir_fname: 'Stanley',
                dir_lname: 'Kubrick',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                dir_id: 208,
                dir_fname: 'Bryan',
                dir_lname: 'Singer',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                dir_id: 209,
                dir_fname: 'Roman',
                dir_lname: 'Polanski',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                dir_id: 210,
                dir_fname: 'Paul',
                dir_lname: 'Thomas Anderson',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                dir_id: 211,
                dir_fname: 'Woody',
                dir_lname: ' Allen',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                dir_id: 212,
                dir_fname: 'Hayao',
                dir_lname: 'Miyazaki',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                dir_id: 213,
                dir_fname: 'Frank',
                dir_lname: 'Darabont',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                dir_id: 214,
                dir_fname: 'Sam',
                dir_lname: 'Mendes',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                dir_id: 215,
                dir_fname: 'James',
                dir_lname: 'Cameron',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                dir_id: 216,
                dir_fname: 'Gus',
                dir_lname: 'Van Sant',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                dir_id: 217,
                dir_fname: 'John',
                dir_lname: 'Boorman',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                dir_id: 218,
                dir_fname: 'Danny',
                dir_lname: 'Boyle',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                dir_id: 219,
                dir_fname: 'Christopher',
                dir_lname: 'Nolan',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                dir_id: 220,
                dir_fname: 'Richard',
                dir_lname: 'Kelly',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                dir_id: 221,
                dir_fname: 'Kevin',
                dir_lname: ' Spacey',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                dir_id: 222,
                dir_fname: 'Andrei',
                dir_lname: 'Tarkovsky',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                dir_id: 223,
                dir_fname: 'Peter',
                dir_lname: 'Jackson',
                created_at: new Date(),
                updated_at: new Date()
            },

        ]);


    },


    down: async(queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('director', null, {});
    }
};