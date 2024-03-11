    import { gql } from '@apollo/client';

    export const typeDefs = gql`
        type Mutation {
            ############################################################
            # Law Mutations
            ############################################################
            createLaw(title: String!, published: Boolean!): Law!
            updateLaw(id: UUID!, title: String!, published: Boolean!): updatedResponse!
            deleteLaw(id: UUID!): DeleteLawResponse!
            
            ############################################################
            # Article Mutations
            ############################################################
            createArticle(title: String!, body: String!, lawId: UUID!): Article!
            updateArticle(id: UUID!, title: String!, body: String!, lawId: UUID!): UpdatedResponse!
            deleteArticle(id: UUID!): DeleteLawResponse!
            
        }
        
        type Query {
            ############################################################
            # Law Queries
            ############################################################
            laws: [Law!]!
            lawById(id:UUID):Law!

            ############################################################
            # Article Queries
            ############################################################
            articles: [Article!]!
            articleById(id:UUID):Article!
        }

        type Law {
            id: UUID!
            title: String!
            published: Boolean!
            articles: [Article!]!
        }
        
        type Article {
            id: UUID!
            title: String!
            body: String!
            law: Law!
        }
     
        type UpdatedResponse {
            success: Boolean!
            message: String
        }

        type updatedResponse {
            success: Boolean!
            message: String
        }
        
        type DeleteLawResponse {
            success: Boolean!
            message: String
        }
        
        scalar UUID
    `

    export default typeDefs;