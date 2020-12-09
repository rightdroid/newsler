import React from 'react';
import NewsItemCard from './NewsItemCard';
import styled from '@emotion/styled';
import { generatePath } from 'react-router-dom';

const NewsListWrapper = styled.div`
    display: grid;
    grid-template-columns : repeat(2, 1fr);
    grid-gap: 25px;
`;

const NewsList = ({theme, items}) => <NewsListWrapper>
    {
        items.map( ({ id, title, img, url, comments }, i) => {
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
    </NewsListWrapper>;

export default NewsList;