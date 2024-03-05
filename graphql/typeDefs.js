const {gql} = require("@apollo/client");

const typeDefs = gql`
    type Law {
        id: UUID!
        title: String!
        published: Boolean!
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
    type Query {
        articles: [Article!]!
        articleById(id:UUID):Article!
    }
    
    scalar UUID
`

module.exports = {typeDefs};