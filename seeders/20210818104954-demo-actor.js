'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('actor', [{
                act_id: '101',
                act_fname: 'James',
                act_lname: 'Stewart',
                act_gender: 'M',
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                act_id: '102',
                act_fname: 'Deborah',
                act_lname: 'Kerr',
                act_gender: 'F',
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                act_id: '103',
                act_fname: 'Peter',
                act_lname: 'OToole',
                act_gender: 'M',
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                act_id: '104',
                act_fname: ' Robert',
                act_lname: 'De Niro',
                act_gender: 'M',
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                act_id: '105',
                act_fname: 'F.Murray',
                act_lname: 'Abraham',
                act_gender: 'M',
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                updatedAt: new Date(),
                createdAt: new Date(),
                act_id: 106,
                act_fname: 'Harrison',
                act_lname: 'Ford',
                act_gender: 'M'
            }, {
                createdAt: new Date(),
                updatedAt: new Date(),
                act_id: 107,
                act_fname: 'Nicole',
                act_lname: 'Kidman',
                act_gender: 'F'
            },
            {
                createdAt: new Date(),
                updatedAt: new Date(),
                act_id: 108,
                act_fname: 'Stephen',
                act_lname: 'Baldwin',
                act_gender: 'M'
            }, {
                updatedAt: new Date(),
                createdAt: new Date(),
                act_id: 109,
                act_fname: 'Jack',
                act_lname: 'Nicholson',
                act_gender: 'M'
            }, {
                createdAt: new Date(),
                updatedAt: new Date(),
                act_id: 110,
                act_fname: 'Mark',
                act_lname: 'Wahlberg',
                act_gender: 'M'
            }, {
                createdAt: new Date(),
                updatedAt: new Date(),
                act_id: 111,
                act_fname: 'Woody',
                act_lname: 'Allen',
                act_gender: 'M'
            }, {
                createdAt: new Date(),
                updatedAt: new Date(),
                act_id: 112,
                act_fname: 'Claire',
                act_lname: 'Danes',
                act_gender: 'F'
            },
            {
                updatedAt: new Date(),
                createdAt: new Date(),
                act_id: 113,
                act_fname: 'Tim',
                act_lname: 'Robbins',
                act_gender: 'M'
            },
            {
                createdAt: new Date(),
                updatedAt: new Date(),
                act_id: 114,
                act_fname: 'Kevin',
                act_lname: 'Spacey',
                act_gender: 'M'
            },
            {
                createdAt: new Date(),
                updatedAt: new Date(),
                act_id: 115,
                act_fname: 'Kate',
                act_lname: 'Winslet',
                act_gender: 'F'
            },
            {
                updatedAt: new Date(),
                createdAt: new Date(),
                act_id: 116,
                act_fname: 'Robin',
                act_lname: 'Williams ',
                act_gender: 'M'
            },
            {
                createdAt: new Date(),
                updatedAt: new Date(),
                act_id: 117,
                act_fname: 'Jon',
                act_lname: 'Voight',
                act_gender: 'M'
            }, {
                createdAt: new Date(),
                updatedAt: new Date(),
                act_id: 118,
                act_fname: 'Ewan',
                act_lname: 'McGregor',
                act_gender: 'M'
            }, {
                createdAt: new Date(),
                updatedAt: new Date(),
                act_id: 119,
                act_fname: 'Christian',
                act_lname: 'Bale',
                act_gender: 'M'
            }, {
                createdAt: new Date(),
                updatedAt: new Date(),
                act_id: 120,
                act_fname: 'Maggie',
                act_lname: 'Gyllenhaal',
                act_gender: 'F'
            }, {
                createdAt: new Date(),
                updatedAt: new Date(),
                act_id: 121,
                act_fname: 'Dev',
                act_lname: 'Patel',
                act_gender: 'M'
            }, {
                createdAt: new Date(),
                updatedAt: new Date(),
                act_id: 122,
                act_fname: 'Sigourney',
                act_lname: 'Weaver',
                act_gender: 'F'
            }, {
                createdAt: new Date(),
                updatedAt: new Date(),
                act_id: 123,
                act_fname: 'David',
                act_lname: 'Aston',
                act_gender: 'M'
            }, {
                createdAt: new Date(),
                updatedAt: new Date(),
                act_id: 124,
                act_fname: 'Ali',
                act_lname: 'Astin',
                act_gender: 'F'
            }
        ]);
    },

    down: async(queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('actor', null, {});
    }
};