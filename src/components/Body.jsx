import React, { useState } from 'react';
import { Switch, Route } from "react-router-dom";
import Story from '../views/Story';
import Home from '../views/Home';
import Page404 from '../views/Page404';
import { Container } from 'react-bootstrap';
import { AnimateOnChange } from 'react-animation';

const Body = ({acs}) => {
    const [open, setOpen] = useState(false);
    
    return <Container style={{margin : '65px auto'}}>
        <AnimateOnChange >
            <Switch >
                <Route path="/" exact><Home acs={acs} /></Route>
                <Route path="/story/:id"><Story acs={acs} /></Route>
                <Route component={Page404} />
            </Switch>
        </AnimateOnChange>
    </Container>
}

export default Body;