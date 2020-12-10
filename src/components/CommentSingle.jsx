import React from 'react';
import { ListGroup } from 'react-bootstrap';
import styled from '@emotion/styled';
import { PersonCircle, Clock } from 'react-bootstrap-icons';
import Moment from 'react-moment';

const CommentSingle = ({theme, comment}) => {
    return <ListGroup.Item key={comment.id} style={{...themeStyle, display : 'grid', gridTemplateColumns : '2fr 6fr'}}>
        <ProfileImage>
            <PersonCircle style={{width : '100%', height : '100%'}}/>
        </ProfileImage>
        <CommentBody>
            <CommentBodyHeader><b style={{fontFamily : 'Calibri'}}>{comment.email}</b> <Clock /> <Moment date={comment.createdDate} durationFromNow /> ago</CommentBodyHeader>
            <CommentBodyContent>
                {comment.content}
            </CommentBodyContent>
        </CommentBody>
    </ListGroup.Item>
};

const ProfileImage = styled.div`
    width : 60px;
    height : 60px;
    border-right : 1px solid var(--colorAccent);
    border-bottom : 1px solid var(--colorAccent);
    border-radius: 100%;
    padding : 7px;
`;

const CommentBody = styled.div`

`;
const CommentBodyHeader = styled.div`
    font-family : monospace, sans-serif;
    font-size : 12px;
`;
const CommentBodyContent = styled.div`

`;

const themeStyle = {
    backgroundColor : 'var(--colorMain)',
    color : 'var(--colorAccent)',
};

export default CommentSingle;