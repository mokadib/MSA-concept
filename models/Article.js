const Sequelize = require('sequelize');
const db = require('../database/db-connect');

const Article = db.define('article', {
    id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
    },
    title: {
        type: Sequelize.STRING
    },
    body: {
        type: Sequelize.TEXT
    },
    law_id: {
        type: Sequelize.UUID
    }
});

module.exports = Article;