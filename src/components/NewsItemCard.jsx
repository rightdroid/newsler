import React from 'react';
import styled from '@emotion/styled'
import { Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NewsItemCard = ({id, title, img, commentsCount, theme}) => <Card
    className='newsItemCard'>
    <Card.Img variant='top' src={img} onError={setDefaultImgSrc} />
    <Card.Body style={themeStyle} >
        <Card.Title style={themeStyle}>{title}</Card.Title>
    </Card.Body>
    <ListGroup style={themeStyle}>
        <ListGroupItem style={themeStyle}>
            <Link to={`/${id}`} style={themeStyle}>Comments : {commentsCount}</Link>
            </ListGroupItem>
    </ListGroup>
</Card>

const themeStyle = {
    backgroundColor : 'var(--colorSecondary)',
    color : 'var(--colorAccent)',
}

const setDefaultImgSrc = e =>{
    const placeholder = 'https://via.placeholder.com/300x200?text=Newsler';
    e.target.src = placeholder;
}

export default NewsItemCard;