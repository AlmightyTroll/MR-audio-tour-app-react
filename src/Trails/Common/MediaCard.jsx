import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import heroImg from '../../img/hero-small.jpg';
import ControlledCarousel from '../Common/Carousel';

import 'bootstrap/dist/css/bootstrap.min.css';


const MediaCard = styled.div `
    background-color: white;
    width: 100%;
    height: 100vh;

    box-shadow: 0 0 .3rem .1rem #0089aa;

    display: flex;
    flex-direction: column;    

`
const CardTop = styled.div `
    height: 80%;

    display: flex;
    flex-direction: column;
    align-items: center;

    margin-bottom: 1rem;

`
const StopTitleContainer = styled.div `
    width: 65%;
    height: 7%;

    background-color: #0089aa;
    color: white;
    font-size: 1.5rem;

    box-shadow: 0 0 .3rem .1rem #0089aa;

    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    top: 20%;
    left: 73px;

    opacity: 90%;

`

const CarouselContainer = styled.div `
    height: 90%;
    width: 100%;

    background-image: url("http://i.stack.imgur.com/2OrtT.jpg");

    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;

    margin-top: 4rem;
    
`

const CardBottom = styled.div `

    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 1rem;

    overflow: scroll;

`
const AudioPlayer = styled.div `
    width: 75%;

`

const Description = styled.p `
    font-size: 1.3rem; 
    color: #0089aa;       

    padding: 1rem;


`

const mediaCard = (props) => {
    return (

            <MediaCard>
                <CardTop>
                    <StopTitleContainer>
                        {props.stop.name}
                    </StopTitleContainer>
                    <CarouselContainer>
                        <ControlledCarousel />
                    </CarouselContainer>
                    <AudioPlayer>
                        AudioFile
                    </AudioPlayer>
                </CardTop>
                <CardBottom>
                    <Description>
                        <b>Description:</b> <br /> 
                        {props.stop.description}
                    </Description>
                </CardBottom>
            </MediaCard>        
    );
};

export default mediaCard;