const {pgClient} = require("../database/db-connect");

const resolvers = {
    Query: {
        ///////////////////////////////////////////////////////////////////////
        /*LAW queries*/
        ///////////////////////////////////////////////////////////////////////
        laws: async () => {
            try {
                const result = await pgClient.query('select * from laws;');
                return result.rows;
            } catch (error) {
                console.log(error);
                throw error;
            }
        },
        lawById: async (_, { id }) => {
            try {
                const result = await pgClient.query('select * from laws where id = $1;', [id]);
                return result.rows[0];
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
                const result = await pgClient.query('select * from articles;');
                return result.rows;
            } catch (error) {
                console.log(error);
                throw error;
            }
        },
        articleById: async (_, { id }) => {
            try {
                const result = await pgClient.query('select * from articles where id = $1;', [id]);
                return result.rows[0];
            } catch (error) {
                console.log(error);
                throw error;
            }
        },
    },
}

module.exports = {resolvers};
