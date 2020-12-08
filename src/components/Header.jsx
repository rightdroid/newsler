import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Nav } from 'react-bootstrap';

const Header = ({ title, paragraph }) => <>
<header>Newsler - totally not fake news</header>
    <Nav>
        <ul>
            <Button>
                <NavLink to="/" exact activeClassName="pageActive">Home</NavLink>
            </Button>
            <Button>
                <NavLink to="/story" exact activeClassName="pageActive">Random news story</NavLink>
            </Button>
            
        </ul>
    </Nav>
</>

export default Header;