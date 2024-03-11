import {Model, DataType, Table, Column, ForeignKey, BelongsTo} from 'sequelize-typescript';
import LawModel from "./Law.model";

@Table({
    tableName: 'articles',
    timestamps: true,
    modelName: 'ArticleModel',
})

export class ArticleModel extends Model {

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
        type: DataType.STRING,
        allowNull: false,
    })

    declare body: string;

    @ForeignKey(() => LawModel)
    @Column({
        type: DataType.UUID,
        allowNull: false,

    })

    declare law_id: string;

    @BelongsTo(() => LawModel, 'law_id')
    declare law: LawModel;

}


export default ArticleModel;
