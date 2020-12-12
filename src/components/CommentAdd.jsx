import React from 'react';
import { ListGroup, Form, Button, Spinner } from 'react-bootstrap';
import styled from '@emotion/styled';
import { PersonCircle, Clock } from 'react-bootstrap-icons';
import Moment from 'react-moment';
import { useMutation } from '@apollo/client';
import queries from '../shared/constants/queries';

const COMMENT_SENT_STATUS = [
    {id: 0, responseText : ''}, // default, light
    {id: 1, responseText : 'Comments Successfully Sent. Thank you!'}, // success
    {id: 2, responseText : 'Oops! Error occurred: '}, // fail
]
Object.freeze(COMMENT_SENT_STATUS);

const CommentAdd = ({theme, storyId}) => {
    
    let emailInput, contentInput;
    const [createComment, 
        { data, loading, error }
    ] = useMutation(queries.CREATE_COMMENT, 
        // TODO make cache updating work
        // {
            // update(cache, {data : {createComment}}){
            //     cache.modify(
            //         {
            //             fields: {
            //                 comments(existingComments = []) {
            //                     const newCommentRef = cache.writeFragment({
            //                         data: createComment,
            //                         fragment: gql`
            //                             fragment NewComment on Comment {
            //                             id
            //                             type
            //                             }
            //                         `
            //                     });
            //                   return [...existingComments, newCommentRef];
            //                 }
            //               }
            //         }
            //     )
            // }
        // }
    );
    
    const handleCreateComment = e => {
        e.preventDefault();
        
        createComment({variables : 
            {
                input : {
                    newsId : storyId,
                    email : emailInput.value,
                    content : contentInput.value,
                }
            }
        }).then(({ data }) => {
            // successful resolve
            // clear input fields
            emailInput.value = '';
            contentInput.value = '';
        })
        .catch(e => {
            // handle errors
        });
        
    }
    
    return <ListGroup.Item style={{...themeStyle, display : 'grid', gridTemplateColumns : '2fr 6fr'}}>
        <ProfileImage>
            <PersonCircle style={{width : '100%', height : '100%'}}/>
        </ProfileImage>
        <CommentBody>
            <CommentBodyHeader><Clock /> <Moment /> </CommentBodyHeader>
            <CommentBodyContent>
                <Form onSubmit={handleCreateComment} >
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" 
                            required ref={node => {emailInput = node}}/>
                    </Form.Group>
                    <Form.Group controlId="formGroupContent">
                        <Form.Label>Comment</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Enter comment content..." 
                            required ref={node => {contentInput = node}}/>
                    </Form.Group>
                    <CommentFormFooter>
                        <Button  type="submit" 
                        variant={theme === 1 ? 'dark' : 'light'} 
                        style={{...themeStyle, 
                        border : '1px solid var(--colorAccent)',
                        margin : '10px 0'}}>Submit</Button>
                        {data && <p>{COMMENT_SENT_STATUS[1].responseText}</p>}
                        {loading && <Spinner animation='grow' variant='warning' />}
                        {error && <p>{COMMENT_SENT_STATUS[2].responseText} {error.message}</p>}
                    </CommentFormFooter>
                </Form>
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
const CommentFormFooter = styled.div`
    display : grid;
    grid-template-columns : 1fr 4fr;
    grid-gap: 25px;
    align-items : center;
`;

const themeStyle = {
    backgroundColor : 'var(--colorMain)',
    color : 'var(--colorAccent)',
};

export default CommentAdd;