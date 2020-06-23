import React from 'react';
import logo from '../../img/logoMR2.png';
import logoNav from '../../img/logoMR.png';
//import backgroundImage from '../img/hero.jpg';
import styled from 'styled-components';

const HeaderSmall = styled.header `
    height: 8vh;
    width: 100%;

    background-color: white;

    box-shadow: 0 0 .5rem .3rem #0089aa;

    display: flex;
    justify-content: space-between;
    align-items: center;

    overflow: hidden;

    position: fixed;

    z-index: 100;
    
`

const Logo = styled.img `
    height: 3vh;
    width: auto;

    padding-left: 1rem;

`
const Title = styled.h1 `
    
    font-size: 1.5rem;
    font-weight: 500;

    color: #0089aa;

    padding-right: 1.5rem;
    
`

const NavButton = styled.img `
    height: 2rem;
    width: auto;

    padding-right: 1rem;
    border-radius: 50%;

`

const headerSmall = () => {
    return (
        <HeaderSmall>
            <Logo src={logo} alt="logo" />
            <Title>
                Canyon View Trail
            </Title>
            <NavButton src={logoNav} alt="LogoNav" />
        </HeaderSmall>
    );
}

export default headerSmall;