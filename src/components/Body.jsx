import React from 'react';
import { Switch, Route } from "react-router-dom";
import Story from '../pages/Story';
import Home from '../pages/Home';
import Page404 from '../pages/Page404';
import { Container } from 'react-bootstrap';

const Body = ({acs}) => <>
<Container style={{marginTop : '55px'}}>
    <Switch>
        <Route path="/"><Home acs={acs} /></Route>
        <Route path="/story"><Story acs={acs} /></Route>
        <Route component={Page404} />
    </Switch>
</Container>
</>

export default Body;