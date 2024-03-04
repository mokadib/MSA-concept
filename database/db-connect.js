// db.js
const { Pool } = require('pg');

const pgClient = new Pool({
    user: 'root',
    password: 'root',
    host: 'postgres',
    database: 'concept',
    port: 5432
});


pgClient.on('connect', () => console.log('Connected to PostgresSQL'));
pgClient.on('error', err => console.error('Error connecting to PostgresSQL:', err));

module.exports = {pgClient};
