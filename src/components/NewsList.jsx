import React from 'react';
import { useQuery, gql } from '@apollo/client';
import NewsItemCard from './NewsItemCard';
import styled from '@emotion/styled';
import { generatePath } from 'react-router-dom';
import LoadingSpinner from './LoadingSpinner';

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

const NewsListWrapper = styled.div`
    display: grid;
    grid-template-columns : repeat(2, 1fr);
    grid-gap: 25px;
`;

const NewsList = ({theme}) => {
    const { loading, error, data } = useQuery(NEWS_ITEMS);
    
    if (loading) return <LoadingSpinner />;
    if (error) return <p>Error</p>;
    
    return <NewsListWrapper>
        {
            data.newsList.rows.map( ({ id, title, img, url, comments }, i) => {
                generatePath('/story-:id', {id : id});
                return <NewsItemCard 
                        key={id}
                        id={id}
                        url={url}
                        title={title}
                        img={img}
                        commentsCount={comments.length}
                        theme={theme}
                    />
            })
        }
        </NewsListWrapper>
};

export default NewsList;