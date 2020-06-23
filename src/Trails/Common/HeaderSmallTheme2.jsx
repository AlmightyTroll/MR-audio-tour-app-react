import React from 'react';
import logo from '../../img/logoWhiteMR.png';
import logoNav from '../../img/wavesLogoWhiteMR.png';
//import backgroundImage from '../img/hero.jpg';
import styled from 'styled-components';

const HeaderSmallTheme2 = styled.header `
    height: 8vh;
    width: 100%;

    background-color: #0089aa;

    box-shadow: 0 0 .5rem .3rem white;

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

    color: white;

    padding-right: 1.5rem;
    
`

const NavButton = styled.img `
    height: 2rem;
    width: auto;

    padding-right: 1rem;
    border-radius: 50%;

`

const headerSmallTheme2 = () => {
    return (
        <HeaderSmallTheme2>
            <Logo src={logo} alt="logo" />
            <Title>
                Canyon View Trail
            </Title>
            <NavButton src={logoNav} alt="LogoNav" />
        </HeaderSmallTheme2>
    );
}

export default headerSmallTheme2;