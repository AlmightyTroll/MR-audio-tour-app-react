import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
//import thumbnail from '../../img/hero-small.jpg';


const SmallCard = styled.div `
    background-color: white;
    width: 100%;
    height: 100vh;
    
    box-shadow: 0 0 .3rem .1rem #0089aa;

    display: flex;
    flex-direction: column;

`
const CardTop = styled.div `
    height: 70%;

    font-size: 1.5rem;
    color: white;

    position: relative;

    display: flex;
    justify-content: center;

`

const BackgroundLocationImageContainer = styled.div `
    height: 90%;
    width: 100%;

    background-image: url("http://i.stack.imgur.com/2OrtT.jpg");

    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;

    box-shadow: 0 0 1rem .3rem #0089aa;

`

const StopTitleContainer = styled.div `
    width: 65%;
    height: 10%;

    background-color: #0089aa;
    box-shadow: 0 0 .3rem .1rem #0089aa;

    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    top: 20%;
    left: 73px;

    opacity: 90%;

`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #0089aa;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
        color: #0089aa;
    }

`

const ListenNowButton = styled.div `
    width: 35%;
    height: 12%;

    color: #0089aa;
    font-size: 1.5rem;

    background-color: white;
    box-shadow: 0 0 .5rem .2rem #0089aa;
    border-radius: 5px;

    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    top: 60%;
    left: 136px;

    opacity: 70%;
`

const CardBottom = styled.div `

    overflow: scroll;

`

const Directions = styled.p `
    font-size: 1.3rem; 
    color: #0089aa;       

    padding: 1rem;

`

const card = (props) => {
    console.log(props);
    return (
        <SmallCard>
            <CardTop>
                <StopTitleContainer>
                    {props.stop.name}
                </StopTitleContainer>
                <StyledLink to={props.stop.stopLink} >
                    <ListenNowButton>
                        Listen Now
                    </ListenNowButton>
                </StyledLink>
                <BackgroundLocationImageContainer />
            </CardTop>
            <CardBottom>
                <Directions>
                    <b>Directions:</b> <br />
                    {props.stop.directions}
                </Directions>
            </CardBottom>
        </SmallCard>
    );
};

export default card;