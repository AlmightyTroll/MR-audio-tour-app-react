import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import ControlledCarousel from '../Common/Carousel';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import 'bootstrap/dist/css/bootstrap.min.css';


const MediaCardContainer = styled.div `

    background-color: #0089aa;
    width: 100%;

    box-shadow: 0 0 .3rem .1rem #0089aa;

    display: flex;
    flex-direction: column;    

`
const CardTop = styled.div `

    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 0 1rem;

`

const CarouselContainer = styled.div `

    width: 100%;

    border: 5px solid white;
    margin-top: 4.5rem;

    border-radius: 5px;

`
const StopTitleContainer = styled.div `

    width: 100%;

    background-color: white;
    color: #0089aa;
    font-size: 1.5rem;
    border-radius: 15px;

    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 1rem;
    padding: 0.5rem;

`
const AudioPlayerContainer = styled.div `

    width: 100%;

    margin-top: 1rem;

    border: 5px solid white;
    border-radius: 5px;

`

const CardBottom = styled.div `

    background-color: #0089aa;

    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 0 1rem;

`

const DescriptionContainer = styled.div `

    width: 100%;
    height: 20vh;

    border: 5px solid white;
    border-radius: 5px;

    margin: 1rem 0;

    overflow: scroll;

`

const Description = styled.p `

    font-size: 1.3rem; 
    color: white;     

    padding: 0 .5rem;

`

const MediaCard = (props) => {
    return (

            <MediaCardContainer>
                <CardTop>
                    <CarouselContainer>
                        <ControlledCarousel images={props.stop.images}/>
                    </CarouselContainer>
                    <StopTitleContainer>
                        {props.stop.name}
                    </StopTitleContainer>
                    <AudioPlayerContainer>
                        <AudioPlayer autoPlay src={process.env.PUBLIC_URL + props.stop.audio_clip} showJumpControls={false}/>
                    </AudioPlayerContainer>
                </CardTop>
                <CardBottom>
                    <DescriptionContainer>
                        <Description>
                            <b>Description:</b> <br /> 
                            {props.stop.description}
                        </Description>
                    </DescriptionContainer>
                </CardBottom>
            </MediaCardContainer>        
    );
};

MediaCard.propTypes = {
    stops: PropTypes.object
}
export default MediaCard;