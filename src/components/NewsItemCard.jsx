import React from 'react';
import styled from '@emotion/styled'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

const NewsItemCard = ({id, title, img, commentsCount}) => <Card>
    <Card.Img variant='top' src={img} onError={setDefaultImgSrc} />
    <Card.Body>
        <Card.Title>{title}</Card.Title>
    </Card.Body>
    <ListGroup className="list-group-flush">
        <ListGroupItem>Comments : {commentsCount}</ListGroupItem>
    </ListGroup>
</Card>

const setDefaultImgSrc = e =>{
    const placeholder = 'https://via.placeholder.com/300x200?text=Newsler';
    e.target.src = placeholder;
}

export default NewsItemCard;