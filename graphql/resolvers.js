const sequelize = require('../database/db-connect');
const Law = require('../models/Law');
const Article = require('../models/Article');
const resolvers = {
    Query: {
        ///////////////////////////////////////////////////////////////////////
        /*LAW queries*/
        ///////////////////////////////////////////////////////////////////////
        laws: async () => {
            try {
                const laws = await Law.findAll();
                // console.log('Fetched laws:', laws);
                // return await Law.findAll();
                return laws;
            } catch (error) {
                console.log(error);
                throw error;
            }
        },
        lawById: async (_, {id}) => {
            try {
                return await Law.findByPk(id);
            } catch (error) {
                console.log(error);
                throw error;
            }
        },
        ///////////////////////////////////////////////////////////////////////
        /*ARTICLE queries*/
        ///////////////////////////////////////////////////////////////////////
        articles: async () => {
            try {
                return await Article.findAll();
            } catch (error) {
                console.log(error);
                throw error;
            }
        },
        articleById: async (_, {id}) => {
            try {
                return await Article.findByPk(id);
            } catch (error) {
                console.log(error);
                throw error;
            }
        },
    },
}

module.exports = {resolvers};
