import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ImgWithFallback from './ImgWithFallback';
import { ChatDots } from 'react-bootstrap-icons';

const NewsItemCard = ({id, title, img, commentsCount, theme}) => <Card
    className='newsItemCard'>
    <Link to={`/story/${id}`} style={themeStyle}>        
        <ImgWithFallback type='card' opts={{variant : 'top', src : img}} />
    </Link>
    <Card.Body style={themeStyle} >
        <Link to={`/story/${id}`} style={themeStyle}>
            <Card.Title style={themeStyle}>{title}</Card.Title>
        </Link>
    </Card.Body>
    <ListGroup style={{...themeStyle, border: 0}}>
        <ListGroupItem style={{...themeStyle, border: 0}}>
            <Link to={{pathname : `/story/${id}`, hash : '#comments'}} style={themeStyle}><ChatDots /> {commentsCount}</Link>
        </ListGroupItem>
    </ListGroup>
</Card>

const themeStyle = {
    backgroundColor : 'var(--colorSecondary)',
    color : 'var(--colorAccent)',
}

export default NewsItemCard;