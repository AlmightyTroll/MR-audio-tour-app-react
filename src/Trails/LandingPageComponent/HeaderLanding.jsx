import React from 'react';
import logo from '../../img/logoWhiteMR.png';
import backgroundImage from '../../img/hero.jpg';
import styled from 'styled-components';

const HeaderLanding = styled.header`
    height: 70vh;
    font-size: calc(10px + 2vmin);

    font-family: caslon serrif;
    background-color: #0089aa;

    display: flex;
    flex-direction: column; 
`

const BackgroundImage = styled.img `
    position: absolute;
    height: 70%;
    width: 100%;

    opacity: 10%;
    overflow: hidden;
`

const Logo = styled.img `
    height: auto;
    width: 40%;

    position: relative;
    top: 1rem;
    left: 1rem;
`
const Title = styled.h1 `
    color: white;
    font-size: 3rem;
    font-weight: 500;

    margin-top: 4rem;
`

const Phrase = styled.p `
    color: white;
    font-size: 1.75rem;

    margin: 3rem 0;
`

const SVGWave = styled.svg `
    z-index: 100;
    width: 100%;
`

const headerLanding = () => {
    return (
        <HeaderLanding>
            <BackgroundImage src={backgroundImage} alt="backgroundImage" /> 
            <Logo src={logo} alt="logo" />
            <Title>
                Manuels River <br /> Audio Tour
            </Title>
            <Phrase>
                Discover Outdoors!
            </Phrase>
            <SVGWave >
                <svg src="../img/wave-good.svg" viewBox="0 -30 1100 320"><path fill="#ffffff" fillOpacity="1" d="M0,288L80,282.7C160,277,320,267,480,229.3C640,192,800,128,960,112C1120,96,1280,128,1360,144L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
            </SVGWave>   
        </HeaderLanding>
    );
}

export default headerLanding;