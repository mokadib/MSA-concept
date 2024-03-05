const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { db } = require('./database/db-connect');
const lawsRouter = require('./routes/laws'); // Correct import for the router

const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const { typeDefs } = require('./graphql/typeDefs');
const { resolvers } = require('./graphql/resolvers');

// Apollo Server instance
const server = new ApolloServer({ typeDefs, resolvers });

async function startApollo() {
    await server.start();
}

async function syncDb() {
    await db.sync();
}

// Express app
const app = express();

// Apply CORS middleware
app.use(cors());

// Apply laws router middleware
app.use('/', lawsRouter); // Mount the laws router at the root path

// Apply Apollo Server middleware
startApollo().then(() => server.applyMiddleware({ app, path: '/graphql' }));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server ready at http://localhost:${PORT}${server.graphqlPath}`);
});
