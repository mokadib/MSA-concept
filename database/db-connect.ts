import { Sequelize } from 'sequelize-typescript';
import * as dotenv from 'dotenv';
import LawModel from "../models/Law.model";
import ArticleModel from "../models/Article.model";
dotenv.config();

if (process.env.NODE_ENV === 'test') {
    dotenv.config({ path: '.env.test' });
} else {
    dotenv.config();
}

const sequelize = new Sequelize({
    // dialect: 'postgres',
    // database: process.env.DATABASE_NAME,
    // username: process.env.DATABASE_USER,
    // password: process.env.DATABASE_PASSWORD,
    // host: process.env.DATABASE_HOST,
    // port: 5432,
    // models: [__dirname + [LawModel,ArticleModel]],
    // sync: { force: true },

    dialect: 'postgres',
    database: 'concept-test',
    username: 'root',
    password: 'root',
    host: 'localhost',
    port: 5433,
    models: [__dirname + [LawModel,ArticleModel]],
    sync: { force: true },
});

sequelize.addModels([LawModel,ArticleModel]);

sequelize.sync({ force: true, logging: console.log });


export default sequelize;