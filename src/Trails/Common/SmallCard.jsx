import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
//import thumbnail from '../../img/hero-small.jpg';


const SmallCard = styled.div `
    width: 100%;

    background-color: #0089aa;
    box-shadow: 0 0 .5rem .5rem white;
    
    display: flex;
    flex-direction: column;

`
const CardTop = styled.div `

    margin: 1rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`

const StopTitleContainer = styled.h2 `
    width: 100%;

    background-color: white;
    color: #008894;
    font-size: 1.5rem;
    
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 15px;
    margin-top: 3.5rem;
    padding: 0.5rem;

`

const LocationImageContainer = styled.div `
    width: 100%;
    height: 40vh;

    border: 5px solid white;
    border-radius: 10px;
    box-shadow: 0 0 1rem .3rem #0089aa;

    margin-top: .5rem;

`

const LocationImage = styled.img `
    width: 100%;
    height: 100%;
`

const StyledLink = styled(Link)`
    color: #008894;

    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
        color: #0089aa;
    }

`

const ListenNowButton = styled.h2 `
    width: 100%;

    color: #008894;
    font-size: 1.8rem;

    background-color: white;
    box-shadow: 0 0 .5rem .2rem white;
    border-radius: 15px;

    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 1rem;

    padding: .75rem;


`

const CardBottom = styled.div `
    background-color: #0089aa;

    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 0 1rem;

`
const DirectionsContainer = styled.div `
    width: 100%;
    height: 25vh;
    border: 5px solid white;
    border-radius: 15px;

    overflow: scroll;

    margin-bottom: 1.5rem;

`

const Directions = styled.p `

    font-size: 1.3rem; 
    color: white;     

    padding: 0 .5rem;


`

const card = (props) => {
    return (
        <SmallCard>
            <CardTop>
                <StopTitleContainer>
                    {props.stop.name}
                </StopTitleContainer>
                <LocationImageContainer >
                    <LocationImage src={process.env.PUBLIC_URL + props.stop.thumbnail} />
                </LocationImageContainer>
                <StyledLink to={props.stop.stopLink} >
                    <ListenNowButton>
                        Listen Now
                    </ListenNowButton>
                </StyledLink>
            </CardTop>
            <CardBottom>
                <DirectionsContainer>
                    <Directions>
                        <b>Directions:</b> <br />
                        {props.stop.directions}
                    </Directions>
                </DirectionsContainer>
            </CardBottom>
        </SmallCard>
    );
};

export default card;