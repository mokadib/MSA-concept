const {Sequelize} = require('sequelize');

const db = new Sequelize({
    dialect: 'postgres',
    database: 'concept',
    username: 'root',
    password: 'root',
    host: 'postgres',
    port: 5432
});

db.sync({force: true, alter: true}).then(() => {
    console.log('Database synced');
});

module.exports = db;
