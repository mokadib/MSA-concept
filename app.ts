import express from 'express';
import sequelize from './database/db-connect';
import cors from 'cors';
import dotenv from 'dotenv';
import { ApolloServer, gql } from 'apollo-server-express';
import resolvers from './graphql/resolvers';
import typeDefs from './graphql/typeDefs';

dotenv.config();

// Apollo Server instance
const server = new ApolloServer({ typeDefs, resolvers });

async function startApollo() {
    await server.start();
}

async function syncDb() {
    await sequelize.sync({ force: true, logging: console.log });
}

// Express app
const app = express();

// Apply CORS middleware
app.use(cors());

// Apply Apollo Server middleware
syncDb().then(() => {
    startApollo().then(() => server.applyMiddleware({ app }));
});

app.get('/law/:id', async (req, res) => {
    const { id } = req.params;
    console.log(id);
    try {
        const result = await server.executeOperation({
            query: gql`
                query LawById($id: UUID!) {
                    lawById(id: $id) {
                        id
                        title
                        published
                    }
                }
            `,
            variables: { id: id.toString()},
        });
        res.json(result.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/laws', async (_, res) => {
    try {
        const result = await server.executeOperation({
            query: gql`
                query Laws {
                    laws {
                        id
                        title
                        published
                    }
                }
            `,
        });
        res.json(result.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/article/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await server.executeOperation({
            query: gql`
                query ArticleById($id: UUID!) {
                    articleById(id: $id) {
                        id
                        title
                        body
                        law {
                            id
                            title
                            published
                        }
                    }
                }
            `,
            variables: { id },
        });
        res.json(result.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/articles', async (_, res) => {
    try {
        const result = await server.executeOperation({
            query: gql`
                query Articles {
                    articles {
                        id
                        title
                        body
                        law {
                            id
                            title
                            published
                        }
                    }
                }
            `,
        });
        res.json(result.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server ready at http://localhost:${PORT}`);
});
