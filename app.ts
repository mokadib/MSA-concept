import express from 'express';
import sequelize from './database/db-connect';
import cors from 'cors';
import { ApolloServer, gql } from 'apollo-server-express';
import resolvers from './graphql/resolvers';
import typeDefs from './graphql/typeDefs';
import * as dotenv from 'dotenv';

if (process.env.NODE_ENV === 'test') {
	dotenv.config({path: '.env.test'});
} else {
	dotenv.config();
}

// Apollo Server instance
export const server = new ApolloServer({typeDefs, resolvers});

const app = express();

// Apply CORS middleware
app.use(cors());
// Apply JSON middleware to accept json data
app.use(express.json());

async function startApollo() {
	await server.start();
}

// async function syncDb() {
// 	try {
// 		await sequelize.sync({ force: true, logging: console.log });
// 	} catch (error) {
// 		console.error('Error syncing database:', error);
// 		await sequelize.close();
// 	}
// }

//autenticate db
async function syncDb() {
	try {
		await sequelize.authenticate();
		console.log('Connection has been established successfully.');
	} catch (error) {
		console.error('Unable to connect to the database:', error);
	}
}

// Initialize server and start Apollo Server
async function initializeServer() {
	try {
		await syncDb();
		await startApollo();
		server.applyMiddleware({app});
		const PORT = process.env.PORT || 4000;
		app.listen(PORT, () => {
		});
	} catch (error) {
		console.error('Error initializing server:', error);
	}
}

initializeServer();

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
		res.status(500).json({error: 'Internal Server Error'});
	}
});

app.post('/add-law', async (req, res) => {
    try {
        const result = await server.executeOperation({
            query: gql`
                mutation AddLaw($title: String!, $published: Boolean!) {
                    createLaw(title: $title, published: $published) {
                        id
                        title
                        published
                    }
                }
			`,
			variables: {
				title: req.body.title,
				published: req.body.published,
			},
        });
		res.json(result.data);
    } catch (error) {
		console.error(error);
		res.status(500).json({error: 'Internal Server Error'});
	}
});

//creat test to get lawbyid
app.get('/law/:id', async (req, res) => {
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
			variables: {
				id: req.params.id,
			},
		});
		res.json(result.data);
	}catch (error) {
		console.error(error);
		res.status(500).json({error: 'Internal Server Error'});
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
					}
				}
			`,
		});
		res.json(result.data);
	} catch (error) {
		console.error(error);
		res.status(500).json({error: 'Internal Server Error'});
	}
});

app.post('/add-article', async (req, res) => {
	try {
		const result = await server.executeOperation({
			query: gql`
				mutation AddArticle($title: String!, $body: String!, $lawId: UUID!) {
					createArticle(title: $title, body: $body, lawId: $lawId) {
						id
						title
						body
					}
				}
			`,
			variables: {
				title: req.body.title,
				body: req.body.body,
				lawId: req.body.lawId,
			},
		});
		res.json(result.data);
	} catch (error) {
		console.error(error);
		res.status(500).json({error: 'Internal Server Error'});
	}
});

app.get('/article/:id', async (req, res) => {
	try {
		const result = await server.executeOperation({
			query: gql`
				query ArticleById($id: UUID!) {
					articleById(id: $id) {
						id
						title
						body
					}
				}
			`,
			variables: {
				id: req.params.id,
			},
		});
		res.json(result.data);
	} catch (error) {
		console.error(error);
		res.status(500).json({error: 'Internal Server Error'});
	}
});
export default {app, server};
