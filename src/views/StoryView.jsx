import React from 'react';
import { useParams } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';
import LoadingSpinner from '../components/LoadingSpinner';
import { Row, Col, Card, ListGroup } from 'react-bootstrap';
import ImgWithFallback from '../components/ImgWithFallback';
import CommentSingle from '../components/CommentSingle';
import { Link45deg } from 'react-bootstrap-icons';
import styled from '@emotion/styled';

const NEWS_ITEM = gql`
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
`;

const StoryView = ({theme}) => {
    const { id } = useParams();
    
    const { loading, error, data } = useQuery(NEWS_ITEM, {
        variables: { id },
    });
    
    if (loading) return <LoadingSpinner />;
    if (error) return `Error! ${error}`;
    
    return <Col style={themeStyle}>
        <Row>
            <Col style={titleStyle}>
                <a href={data.newsItem.url} target='_blank' 
                style={{...themeStyle, float : 'left'}}>
                    <LinkIconWrapper ><Link45deg /></LinkIconWrapper>
                </a> 
                <h1 style={themeStyle}>{data.newsItem.title}</h1>
            </Col>
        </Row>
        <Row>
            <Col>
                <ImgWithFallback opts={
                    {src : data.newsItem.img, fluid : true, 
                    style : {display : 'block', margin : '0 auto'}}
                    } />
            </Col>
        </Row>
        <Row>
            <Col style={contentStyle}>{data.newsItem.content}</Col>
        </Row>
        <ListGroup variant='flush' id='comments' name='comments'>
        <ListGroup.Item style={themeStyle}>
            <h3 id='comments' name='comments'>Comments</h3>
        </ListGroup.Item>
            {data.newsItem.comments.map( (comment, i) => {
                return <CommentSingle key={comment.id} theme={theme} comment={comment} />
            })}
        </ListGroup>
    </Col>
};

const LinkIconWrapper = styled.div`
    display : inline-grid;
    position: relative;
    bottom: -5px;
    margin-right : 10px;
    align-items : center;
    font-size : 22px;
    width : 30px;
    height : 30px;
    border-radius : 100%;
    box-shadow : 1px 1px 3px 0px var(--colorAccent);
    cursor : pointer;
    & svg {
        margin : 0 auto;
    }
`;

const contentStyle = {
    paddingTop : '20px',
    paddingBottom : '60px',
}

const titleStyle = {
    padding : '20px 20px',
}

const themeStyle = {
    backgroundColor : 'var(--colorMain)',
    color : 'var(--colorAccent)',
};
    
export default StoryView;