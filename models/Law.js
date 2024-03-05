const Sequelize = require('sequelize');
const db = require('../database/db-connect');

const Law = db.define('law', {
    id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
    },
    title: {
        type: Sequelize.STRING
    },
    published: {
        type: Sequelize.BOOLEAN
    }
});

module.exports = Law;