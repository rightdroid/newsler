const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
    scalar Date

    type Comment {
        id: ID!
        email: String!
        content: String!
        createdDate: Date!
    }

    type NewsItem {
        id: ID!
        title: String!
        content: String!
        url: String!
        img: String
        comments: [Comment!]!
    }
    
    type NewsListResult {
        totalRows: Int!
        rows: [NewsItem!]!
    }
    
    input CreateCommentInput {
        newsId: ID!
        email: String!
        content: String!
    }
    
    type Query {
        getCommentContent: String
        newsItem(id: ID!): NewsItem
        newsList(skip: Int! limit: Int!): NewsListResult!
    }
    
    type Mutation {
        createComment(input: CreateCommentInput!): Comment!
    }
`;

const mocks = {
    Date: () => {
      return new Date();
    },
  };

const server = new ApolloServer({
    typeDefs,
    mocks: mocks,
});

server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`)
});