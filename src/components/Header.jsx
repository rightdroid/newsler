import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Nav } from 'react-bootstrap';
import styled from '@emotion/styled';

const Header = ({handleTheme, theme, themes}) => <HeaderWrapper>
    <Nav style={{display : 'grid', gridTemplateColumns : '2fr 4fr'}}>
        <HeaderText>
            <h1><span style={brandStyle}>newsler</span></h1>
        </HeaderText>
        <ul>
            <Button variant={theme == 1 ? 'dark' : 'light'} style={themeStyle}>
                <NavLink to="/" exact activeClassName="pageActive">Home</NavLink>
            </Button>
            <Button variant={theme == 1 ? 'dark' : 'light'} style={themeStyle}>
                <NavLink to="/story" exact activeClassName="pageActive">Random news story</NavLink>
            </Button>
            <Button onClick={handleTheme} variant={theme == 1 ? 'dark' : 'light'} 
                style={themeStyle}>
                {themes[theme].title}
            </Button>
        </ul>
    </Nav>
</HeaderWrapper>

const themeStyle = {
    backgroundColor : 'var(--colorMain)'
}

const HeaderWrapper = styled.header`
    position: fixed;
    z-index: 5000;
    background-color: var(--colorMain);
    width: 100vw;
    padding: 5px 0;
    top: 0;
    box-shadow: 0 1px 7px 1px rgb(100,100,100,0.5);
    & ul
    {
        margin-bottom : 0;
    }
`;

const brandStyle = {
    letterSpacing: '-1px',
    fontFamily: 'fantasy',
    color: 'rgb(165 42 42)',
    fontSize: '28px',
}

const buttonStyle = {
    color : 'var(--colorAccent)',
    backgroundColor : 'var(--colorButton)',
}

const HeaderText = styled.div`
    display: block;
    color : var(--colorAccent);
    text-align: center;
    letter-spacing: -2px;
    & h1
    {
        font-family : monospace, sans-serif;
        font-size : 24px;
        margin-bottom : 0;
    }
`

export default Header;