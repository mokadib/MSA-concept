const {gql} = require("@apollo/client");

const typeDefs = gql`
    type Law {
        id: UUID!
        title: String!
        published: Boolean!
    }
    type Mutation {
        createLaw(title: String!, published: Boolean!): Law!
        updateLaw(id: UUID!, title: String!, published: Boolean!): updatedResponse!
        deleteLaw(id: UUID!): DeleteLawResponse!
    }
    type updatedResponse {
        success: Boolean!
        message: String
    }
    type DeleteLawResponse {
        success: Boolean!
        message: String
    }
    type Query {
        laws: [Law!]!
        lawById(id:UUID):Law!
    }
    type Article {
        id: UUID!
        title: String!
        body: String!
        Law: Law!
    }
    type Mutation {
        createArticle(title: String!, body: String!, lawId: UUID!): Article!
        updateArticle(id: UUID!, title: String!, body: String!, lawId: UUID!): UpdatedResponse!
        deleteArticle(id: UUID!): DeleteLawResponse!
    }
    type UpdatedResponse {
        success: Boolean!
        message: String
    }
    type Query {
        articles: [Article!]!
        articleById(id:UUID):Article!
    }
    
    scalar UUID
`

module.exports = {typeDefs};