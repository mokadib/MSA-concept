import request from 'supertest';
import app from '../../app';
import { gql } from "apollo-server-express";
import { server } from "../../app";

describe('it should pass the test', () => {

	it('should add a law', async () => {

		const response = await request(app.app)
			.post('/add-law')
			.send({title: 'test law', published: true});

		expect(response.status).toBe(200);
		expect(response.body).toHaveProperty('createLaw');
		console.log(response.body);
	});

	it('should connect to database', async () => {

		const response = await request(app.app).get('/laws');

		expect(response.status).toBe(200);
		console.log(response)
	});

	//TODO: add create a law first this will fail
	test.skip('should create an article', async () => {

		await app.server.stop()
		const response = await request(app.app)
			.post('/add-article')
			.send({title: 'test article', body: 'test body', lawId: ''});

		expect(response.status).toBe(200);
		expect(response.body).toHaveProperty('createArticle');
		console.log(response.body);
	});

	it('should return a list of articles', async () => {
		const response = await request(app.app).get('/articles');

		expect(response.status).toBe(200);
		console.log(response)
	});

	it('should return a law by id', async () => {
		const response = await request(app.app).get('/law/1');

		expect(response.status).toBe(200);
		console.log(response)
	});

	it('should return a article by id', async () => {
		const response = await request(app.app).get('/article/1');

		expect(response.status).toBe(200);
		console.log(response)
	});

});


describe('it test the graphql', () => {
    it('should create a law', async () => {
        const response = await server.executeOperation({
            query: gql`
                mutation createLaw {
                    createLaw(title: "test law", published: true) {
                        id
                        title
                        published
                    }
                }`
        });

        expect(response.data).toBeDefined();
    });

	it('should return a list of laws', async () => {
		const response = await server.executeOperation({
			query: gql`
				query laws {
					laws {
						id
						title
						published
					}
				}
			`
		});
		expect(response.data).toBeDefined();
	});

	//TODO: add create a law first this will fail
	test.skip('should return a law by id', async () => {
		const response = await server.executeOperation({
			query: gql`
				query LawById {
					lawById(id: "1") {
						id
						title
						published
					}
				}
			`
		});
		expect(response.data).toBeDefined();
	});

	//TODO: add create a law first this will fail
	test.skip('should create an article', async () => {
		const response = await server.executeOperation({
			query: gql`
				mutation createArticle {
					createArticle(title: "test article", body: "test body", lawId: "1") {
						id
						title
						body
					}
				}
			`
		});
		expect(response.data).toBeDefined();
	});

	it('should return a list of articles', async () => {
		const response = await server.executeOperation({
			query: gql`
				query Articles {
					articles {
						id
						title
						body
					}
				}
			`
		});
		expect(response.data).toBeDefined();
		console.log(response.data)
	});

	//TODO: add create a law first this will fail
	test.skip('should return a article by id', async () => {
		const response = await server.executeOperation({
			query: gql`
				query ArticleById {
					articleById(id: "1") {
						id
						title
						body
					}
				}
			`
		});
		expect(response.data).toBeDefined();
	});

});