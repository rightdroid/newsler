import React from 'react';
import { Switch, Route } from "react-router-dom";
import About from '../pages/Story';
import Home from '../pages/Home';
import Page404 from '../pages/Page404';

const Body = () => <>
    <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/story" component={About} />
        <Route component={Page404} />
    </Switch>
</>

export default Body;