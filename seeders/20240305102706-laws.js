'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('laws', [{
            id: '45afd3e0-5e3e-11eb-ae93-0242ac130002',
            title: 'first law',
            published: false,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            id: '45afd3e0-5e3e-11eb-ae93-0242ac130003',
            title: 'second law',
            published: true,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            id: '45afd3e0-5e3e-11eb-ae93-0242ac130004',
            title: 'third law',
            published: false,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            id: '45afd3e0-5e3e-11eb-ae93-0242ac130005',
            title: 'fourth law',
            published: true,
            createdAt: new Date(),
            updatedAt: new Date()
        }], {});

    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    }
};
