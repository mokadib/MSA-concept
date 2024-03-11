import { Sequelize } from 'sequelize-typescript';
import * as dotenv from 'dotenv';
import LawModel from "../models/Law.model";
import ArticleModel from "../models/Article.model";
dotenv.config();

const sequelize = new Sequelize({
    dialect: 'postgres',
    database: process.env.DATABASE_NAME,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    host: process.env.DATABASE_HOST,
    port: 5432,
    models: [__dirname + [LawModel,ArticleModel]],
    sync: { force: true },
});

sequelize.addModels([LawModel,ArticleModel]);
// LawModel.belongsTo(ArticleModel, { foreignKey: 'law_id' , as: 'law' ,targetKey: 'id'});
// ArticleModel.hasMany(LawModel, { foreignKey: 'law_id' , as: 'articles' ,sourceKey: 'id'});

export default sequelize;