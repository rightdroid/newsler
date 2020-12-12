import { gql } from "@apollo/client";

const queries = {
    GET_NEWS_ITEMLIST : gql`
    query {
        newsList(skip: 0 limit : 0) {
            rows
            {
                id
                title
                img
                url
                comments
                {
                    id
                }
            }
        }
    }
    `,
    GET_NEWS_ITEM: gql`
    query GetNewsItem($id: ID!){
        newsItem(id: $id)
        { 
          title
          content
          url
          img
          comments
          {
            id
            content
            email
            createdDate
          }
         
        }
      }
    `,
    CREATE_COMMENT : gql`
    mutation CreateComment($input: CreateCommentInput!) {
        createComment(input: $input) {
            id
            email
            content
            createdDate
        }
    }
    `,
};
Object.freeze(queries);

export default queries;