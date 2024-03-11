import {Model, DataType, Column, Table, HasMany} from 'sequelize-typescript';
import ArticleModel from "./Article.model";

@Table({
    tableName: 'laws',
    timestamps: true,
    modelName: 'LawModel',
})

export class LawModel extends Model {

    @Column({
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
        primaryKey: true,
    })

    declare id : string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })

    declare title: string;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
    })
   declare published: boolean;

    @HasMany(() => ArticleModel)
    declare articles: ArticleModel[];
}

export default LawModel;