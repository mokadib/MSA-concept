import {IResolvers} from '@graphql-tools/utils';
import LawModel from '../models/Law.model';
import ArticleModel from '../models/Article.model';

const resolvers: IResolvers = {
    Query: {
        laws: async () => {
            return await LawModel.findAll({
                include: [
                    {
                        model: ArticleModel,
                        as: 'articles',
                    },
                ],
            });
        },
        lawById: async (_: any, {id}: { id: string }) => {
            return await LawModel.findByPk(id,{
                include: [
                    {
                        model: ArticleModel,
                        as: 'articles',
                    },
                ],
            });
        },
        articles: async () => {
            return await ArticleModel.findAll({
                include: [
                    {
                        model: LawModel,
                        as: 'law',
                        association: 'law',
                    },
                ],
            });
        },
        articleById: async (_: any, {id}: { id: string }) => {
            return await ArticleModel.findByPk(id, {
                include: [
                    {
                        model: LawModel,
                        as: 'law',
                    },
                ],
            });
        },
    },
    Mutation: {
        createLaw: async (_: any, { title, published }: { title: string; published: boolean }) => {
            return await LawModel.create({ title, published });
        },
        updateLaw: async (_: any, { id, title, published }: { id: string; title: string; published: boolean }) => {
            await LawModel.update({ title, published }, { where: { id } });
            return { success: true, message: 'Law updated successfully' };
        },
        deleteLaw: async (_: any, { id }: { id: string }) => {
            const success = await LawModel.destroy({ where: { id } });
            return { success: success > 0, message: success > 0 ? 'Law deleted successfully' : 'Law not found' };
        },
        createArticle: async (_: any, { title, body, lawId }: { title: string; body: string; lawId: string }) => {
            return await ArticleModel.create({ title, body, law_id: lawId });
        },
        updateArticle: async (_: any, { id, title, body, lawId }: { id: string; title: string; body: string; lawId: string }) => {
            await ArticleModel.update({ title, body, law_id: lawId }, { where: { id } });
            return { success: true, message: 'Article updated successfully' };
        },
        deleteArticle: async (_: any, { id }: { id: string }) => {
            const success = await ArticleModel.destroy({ where: { id } });
            return { success: success > 0, message: success > 0 ? 'Article deleted successfully' : 'Article not found' };
        },
    },
};

export default resolvers;
