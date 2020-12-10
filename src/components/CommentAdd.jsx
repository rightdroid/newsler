import React from 'react';
import { ListGroup, Form, Button } from 'react-bootstrap';
import styled from '@emotion/styled';
import { PersonCircle, Clock, HandThumbsUp } from 'react-bootstrap-icons';
import Moment from 'react-moment';
import { gql, useMutation } from '@apollo/client';
import { useState } from 'react';

const CREATE_COMMENT = gql`
  mutation CreateComment($input: CreateCommentInput!) {
    createComment(input: $input) {
        id
        email
        content
        createdDate
    }
  }
`;

const CommentAdd = ({theme, storyId}) => {
    
    const [createComment, 
        { loading : mutationLoading, error : mutationError}
    ] = useMutation(CREATE_COMMENT, 
        // {
        //     update(cache, {data : {createComment}}){
        //         cache.modify(
        //             {
        //                 fields : {
        //                     art
        //                 }
        //             }
        //         )
        //     }
        // }
    );
    const [commentSent, setCommentSent] = useState(false);
    let emailInput, contentInput;
    
    return commentSent ? <div style={{textAlign : 'center', padding : '40px 0'}}><HandThumbsUp 
            style={{fontSize : '35px', color: 'var(--colorAccent)'}}/>
        </div> : <ListGroup.Item style={{...themeStyle, display : 'grid', gridTemplateColumns : '2fr 6fr'}}>
        <ProfileImage>
            <PersonCircle style={{width : '100%', height : '100%'}}/>
        </ProfileImage>
        <CommentBody>
            <CommentBodyHeader><Clock /> <Moment /> </CommentBodyHeader>
            <CommentBodyContent>
                <Form onSubmit={e => {
                    e.preventDefault();
                    createComment({variables : 
                        {
                            input : {
                                newsId : storyId,
                                email : emailInput.value,
                                content : contentInput.value,
                            }
                        }
                    });
                    emailInput.value = '';
                    contentInput.value = '';
                    
                    setCommentSent(true);
                    setTimeout(() => {
                        setCommentSent(false);
                    }, 2000);
                }} >
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" 
                            required ref={node => {emailInput = node}}/>
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword">
                        <Form.Label>Comment</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="comment content..." 
                            required ref={node => {contentInput = node}}/>
                    </Form.Group>
                    <Button  type="submit" 
                    variant={theme === 1 ? 'dark' : 'light'} 
                    style={{...themeStyle, 
                    border : '1px solid var(--colorAccent)',
                    margin : '10px 0'}}>Submit</Button>
                </Form>
                {mutationLoading && <p>Loading...</p>}
                {mutationError && <p>Error :( Please try again</p>}
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

export default CommentAdd;