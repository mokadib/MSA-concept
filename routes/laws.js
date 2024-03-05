const express = require('express');
const { resolvers } = require('../graphql/resolvers');
const router = express.Router();

router.get('/law/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const law = await resolvers.Query.lawById(null, { id });
        res.json(law);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/laws', async (req, res) => {
    try {
        const laws = await resolvers.Query.laws();
        res.json(laws);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/articles', async (req, res) => {
    try {
        const articles = await resolvers.Query.articles();
        res.json(articles);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/article/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const article = await resolvers.Query.articleById(null, { id });
        res.json(article);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
