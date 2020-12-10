import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Nav } from 'react-bootstrap';
import styled from '@emotion/styled';
import { Toggles2 } from 'react-bootstrap-icons';

const Header = ({handleTheme, theme, themes}) => {
    return <HeaderWrapper>
        <Nav style={navStyle}>
            <Button variant={theme === 1 ? 'dark' : 'light'} style={themeStyle}>
                <Link to="/">
                    <HeaderText>
                        <h1><span style={brandStyle}>newsler</span></h1>
                    </HeaderText>
                </Link>
            </Button>
            <Button onClick={handleTheme} variant={theme === 1 ? 'dark' : 'light'} 
                style={{...themeStyle, gridColumnStart : 3}}><Toggles2 />
                {themes[theme].title}
            </Button>
        </Nav>
    </HeaderWrapper>
};

const themeStyle = {
    backgroundColor : 'var(--colorMain)'
};

const navStyle = {
    display : 'grid', 
    gridTemplateColumns : 'auto 6fr auto',
    padding: '0 10px',
};

const HeaderWrapper = styled.header`
    position: fixed;
    z-index: 5000;
    background-color: var(--colorMain);
    width: 100%;
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
};

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
`;

export default Header;