import React from 'react';
import { Switch, Route } from "react-router-dom";
import StoryView from '../views/StoryView';
import HomeView from '../views/HomeView';
import Page404View from '../views/Page404View';
import { Container } from 'react-bootstrap';

const Body = ({theme}) => {
    return <Container style={{margin : '65px auto'}}>
        <Switch >
            <Route path="/" exact><HomeView theme={theme} /></Route>
            <Route path="/story/:id"><StoryView theme={theme} /></Route>
            <Route><Page404View theme={theme} /></Route>
        </Switch>
    </Container>
}

export default Body;