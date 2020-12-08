import React from 'react';
import { useQuery, gql } from '@apollo/client';
import NewsItemCard from '../components/NewsItemCard';
import { Spinner } from 'react-bootstrap';

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

function Home() {
    const { loading, error, data } = useQuery(NEWS_ITEMS);
    
    if (loading) return <Spinner animation="grow" />;
    if (error) return <p>Error </p>;
    
    return data.newsList.rows.map(({ id, title, img, url, comments }) => (
        <NewsItemCard 
            key={id}
            url={url}
            title={title}
            img={img}
            commentsCount={comments.length}
        />
    ));
}

export default Home;