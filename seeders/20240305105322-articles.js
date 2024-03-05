'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('articles', [
            {
                id: 'eb176a18-010d-4a0a-b37e-cb0028ac9b2a',
                title: 'Article 1',
                body: 'This is the body of article 1',
                law_id: '45afd3e0-5e3e-11eb-ae93-0242ac130003',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id: '156318e7-2e2e-463d-831b-7c4d36b18180',
                title: 'Article 2',
                body: 'This is the body of article 2',
                law_id: '45afd3e0-5e3e-11eb-ae93-0242ac130003',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id: '42b18c70-4578-4a05-abe3-dca229215b14',
                title: 'Article 3',
                body: 'This is the body of article 3',
                law_id: '45afd3e0-5e3e-11eb-ae93-0242ac130003',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id: 'f24b394e-d9b6-4642-b89a-550f4c71ad46',
                title: 'Article 4',
                body: 'This is the body of article 4',
                law_id: '45afd3e0-5e3e-11eb-ae93-0242ac130003',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id: '1a037bb8-dfe5-4f37-80d4-97b41d0da46d',
                title: 'Article 5',
                body: 'This is the body of article 5',
                law_id: '45afd3e0-5e3e-11eb-ae93-0242ac130003',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {});

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
