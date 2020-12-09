import React from 'react';
import { useParams } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';
import LoadingSpinner from '../components/LoadingSpinner';
import { Row, Col, Image } from 'react-bootstrap';
import ImgWithFallback from '../components/ImgWithFallback';

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
            content
          }
         
        }
      }
`;

const Story = () => {
    const { id } = useParams();
    
    const { loading, error, data } = useQuery(NEWS_ITEM, {
        variables: { id },
    });
    
    if (loading) return <LoadingSpinner />;
    if (error) return `Error! ${error}`;
    
    return <Row>
        <Col>
            <Row>
                <Col style={titleStyle}>
                <h1>{data.newsItem.title}</h1>
                </Col>
            </Row>
            <Row>
                <Col><ImgWithFallback opts={{src : data.newsItem.img}}/></Col>
            </Row>
            <Row>
                <Col>content</Col>
            </Row>
        </Col>
    </Row>
}

const titleStyle = {
    padding : '20px 0',
}
    
export default Story;