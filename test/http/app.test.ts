import app from "../../app";

describe('it returns a list of laws', () => {
	it('should return a list of laws', async () => {
		const res = await app.get('/laws');
		expect(res.status).toBe(200);
		expect(res.body).toHaveProperty('laws');
	});
});

describe('it returns a list of articles', () => {
    it('should return a list of articles', async () => {
        const res = await app.get('/articles');
        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty('articles');
    });
});

//test to create a law
describe('it creates a law', () => {
    it('should create a law', async () => {
        const res = await app.post('/laws').send({
            name: 'test law',
            description: 'test description'
        });
        expect(res.status).toBe(201);
        expect(res.body).toHaveProperty('law');
    });
});