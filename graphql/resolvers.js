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
                return await Law.findAll();
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
    Mutation: {
        ///////////////////////////////////////////////////////////////////////
        /*Law mutations*/
        ///////////////////////////////////////////////////////////////////////
        createLaw: async (_, {title, published}) => {
            try {
                return await Law.create(title, published);
            } catch (error) {
                console.log(error);
                throw error;
            }
        },
        deleteLaw: async (_, {id}) => {
            try {
                let response = await Law.destroy({where: {id}}) > 0;
                if (response === true) {
                    return {
                        success: true,
                        message: `Law with id ${id} has been deleted`
                    }
                } else {
                    return {
                        success: false,
                        message: `Law with id ${id} has not been deleted`
                    }
                }
            } catch (error) {
                console.log(error);
                throw error;
            }
        },
        updateLaw: async (_, {id, title, published}) => {
            try {
                let response = await Law.update({title, published}, {where: {id}}) > 0;
                if (response === false) {
                    return {
                        success: false,
                        message: `Law with id ${id} has not been updated`
                    }
                }
            } catch (error) {
                console.log(error);
                throw error;
            }
        },
        ///////////////////////////////////////////////////////////////////////
        /*Article mutations*/
        ///////////////////////////////////////////////////////////////////////
        createArticle: async (_, {title, content, lawId}) => {
            try {
                return await Article.create({title, content, lawId});
            } catch (error) {
                console.log(error);
                throw error;
            }
        },
        deleteArticle: async (_, {id}) => {
            try {
                let response = await Article.destroy({where: {id}}) > 0;
                if (response === true) {
                    return {
                        success: true,
                        message: `Article with id ${id} has been deleted`
                    }
                } else {
                    return {
                        success: false,
                        message: `Article with id ${id} has not been deleted`
                    }
                }
            } catch (error) {
                console.log(error);
                throw error;
            }
        },
        updateArticle: async (_, {id, title, content, lawId}) => {
            try {
                let response = await Article.update({title, content, lawId}, {where: {id}}) > 0;
                if (response === true) {
                    return {
                        success: true,
                        message: `Article with id ${id} has been updated`
                    }
                } else {
                    return {
                        success: await Article.update({title, content, lawId}, {where: {id}}) > 0,
                        message: `Article with id ${id} has been updated`
                    }
                }
            } catch (error) {
                console.log(error);
                throw error;
            }
        },
    }

}

module.exports = {resolvers};
