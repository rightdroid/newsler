import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ImgWithFallback from './ImgWithFallback';

const NewsItemCard = ({id, title, img, commentsCount, theme}) => <Card
    className='newsItemCard'>
    <ImgWithFallback imgType='card' opts={{variant : 'top', src : img}} />
    <Card.Body style={themeStyle} >
        <Card.Title style={themeStyle}>{title}</Card.Title>
    </Card.Body>
    <ListGroup style={themeStyle}>
        <ListGroupItem style={themeStyle}>
            <Link to={`/story/${id}`} style={themeStyle}>Comments : {commentsCount}</Link>
            </ListGroupItem>
    </ListGroup>
</Card>

const themeStyle = {
    backgroundColor : 'var(--colorSecondary)',
    color : 'var(--colorAccent)',
}

export default NewsItemCard;