import React from 'react';
import { useQuery, gql } from '@apollo/client';
import NewsItemCard from '../components/NewsItemCard';
import { Spinner, Row, Col } from 'react-bootstrap';
import NewsList from '../components/NewsList';

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
`

const Home = ({theme}) => {
    const { loading, error, data } = useQuery(NEWS_ITEMS);
    
    if (loading) return <Spinner animation="grow" />;
    if (error) return <p>Error</p>;
    
    return <NewsList theme={theme} />
}

export default Home;