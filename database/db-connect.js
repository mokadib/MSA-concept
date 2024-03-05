const {Sequelize} = require('sequelize');
const dotenv = require('dotenv');
dotenv.config();

const db = new Sequelize({
    dialect: 'postgres',
    database: process.env.DATABASE_NAME,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    host: process.env.DATABASE_HOST,
    port: 5432
});

db.sync({force: true, alter: true}).then(() => {
    console.log('Database synced');
});

module.exports = db;
