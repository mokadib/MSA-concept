const express = require('express');
const {ApolloServer, gql} = require('apollo-server-express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const {pgClient: pg} = require('./database/db-connect');
const {typeDefs} = require('./graphql/typeDefs');
const {resolvers} = require('./graphql/resolvers');


// Apollo Server instance
const server = new ApolloServer({typeDefs, resolvers});

async function startApollo() {
    await server.start();
}

// Express app
const app = express();

// Apply CORS middleware
app.use(cors());

// Apply Apollo Server middleware
startApollo().then(() => server.applyMiddleware({app, path: '/graphql'}));

app.get('/law/:id', async (req, res) => {
    const {id} = req.params;
    const query = `SELECT * FROM laws WHERE id = $1`;
    const values = [id];
    try {
        const result = await pg.query(query, values);
        res.json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Internal Server Error'});
    }
});

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server ready at http://localhost:${PORT}${server.graphqlPath}`);
});
