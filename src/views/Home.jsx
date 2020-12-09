import React from 'react';
import NewsList from '../components/NewsList';
import { useQuery, gql } from '@apollo/client';
import LoadingSpinner from '../components/LoadingSpinner';

const NEWS_ITEMS = gql`
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
`;

const Home = ({theme}) => {
    const { loading, error, data } = useQuery(NEWS_ITEMS);
    
    if (loading) return <LoadingSpinner />;
    if (error) return <p>Error</p>;
    
    return <NewsList theme={theme} items={data.newsList.rows} />
};

export default Home;