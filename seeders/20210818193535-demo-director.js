'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('director', [{
                dir_id: 201,
                dir_fname: 'Alfred',
                dir_lname: 'Hitchcock',
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                dir_id: 201,
                dir_fname: 'Alfred',
                dir_lname: 'Hitchcock',
                createdAt: new Date(),
                updatedAt: new Date()
            },

            {
                dir_id: 202,
                dir_fname: 'Jack',
                dir_lname: 'Clayton',
                createdAt: new Date(),
                updatedAt: new Date()
            },

            {
                dir_id: 203,
                dir_fname: 'David',
                dir_lname: 'Lean',
                createdAt: new Date(),
                updatedAt: new Date()
            },

            {
                dir_id: 204,
                dir_fname: 'Michae',
                dir_lname: 'Cimino',
                createdAt: new Date(),
                updatedAt: new Date()
            },

            {
                dir_id: 205,
                dir_fname: 'Milos',
                dir_lname: 'Forman',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                dir_id: 206,
                dir_fname: 'Ridley',
                dir_lname: 'Scott',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                dir_id: 207,
                dir_fname: 'Stanley',
                dir_lname: 'Kubrick',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                dir_id: 208,
                dir_fname: 'Bryan',
                dir_lname: 'Singer',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                dir_id: 209,
                dir_fname: 'Roman',
                dir_lname: 'Polanski',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                dir_id: 210,
                dir_fname: 'Paul',
                dir_lname: 'Thomas Anderson',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                dir_id: 211,
                dir_fname: 'Woody',
                dir_lname: ' Allen',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                dir_id: 212,
                dir_fname: 'Hayao',
                dir_lname: 'Miyazaki',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                dir_id: 213,
                dir_fname: 'Frank',
                dir_lname: 'Darabont',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                dir_id: 214,
                dir_fname: 'Sam',
                dir_lname: 'Mendes',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                dir_id: 215,
                dir_fname: 'James',
                dir_lname: 'Cameron',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                dir_id: 216,
                dir_fname: 'Gus',
                dir_lname: 'Van Sant',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                dir_id: 217,
                dir_fname: 'John',
                dir_lname: 'Boorman',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                dir_id: 218,
                dir_fname: 'Danny',
                dir_lname: 'Boyle',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                dir_id: 219,
                dir_fname: 'Christopher',
                dir_lname: 'Nolan',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                dir_id: 220,
                dir_fname: 'Richard',
                dir_lname: 'Kelly',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                dir_id: 221,
                dir_fname: 'Kevin',
                dir_lname: ' Spacey',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                dir_id: 222,
                dir_fname: 'Andrei',
                dir_lname: 'Tarkovsky',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                dir_id: 223,
                dir_fname: 'Peter',
                dir_lname: 'Jackson',
                createdAt: new Date(),
                updatedAt: new Date()
            },

        ]);

    },

    down: async(queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('director', null, {});
    }
};