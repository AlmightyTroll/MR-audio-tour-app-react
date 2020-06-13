import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import thumbnail from '../../img/hero-small.jpg';

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #0089aa;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
        color: #0089aa;
    }
`

const SmallCard = styled.div `
    background-color: white;
    width: 85vw;
    height: 35vh;
    
    border: 2px solid white;
    border-radius: 15px;

    margin: 1.5rem 0;


    display: flex;
    flex-direction: column;

`
const CardTop = styled.h3 `
    display: flex;
    justify-content: center;
    margin: 0.5rem;

    
    
`

const CardBottom = styled.div `
    height: 85%;

    display: flex;

`

const LookingFor = styled.p `
    width: 45%;
    margin: .5rem .5rem;

    overflow: scroll;


`

const Thumbnail = styled.img `
    height: 60%;
    width: 45%;

    margin: 3rem .5rem;

    border-radius: 10px;

    

    

`
const card = (props) => {
    console.log(props);
    return (
        <StyledLink to={props.stop.stopLink} >
            <SmallCard>
                <CardTop>{props.stop.name}</CardTop>
                <CardBottom>
                    <LookingFor>
                        <b>Looking For:</b> <br /> 
                        Lorem hsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, unde placeat velit necessitatibus explicabo vel, voluptatibus aut corrupti dolores minus hic totam a animi repudiandae eveniet, reprehenderit officia esse assumenda? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam maxime, dignissimos modi iusto tempore debitis omnis quasi praesentium. Veritatis consequuntur id fuga cumque eius nostrum voluptatum illum ad molestias culpa.
                    </LookingFor>
                    <Thumbnail src={thumbnail} alt="Thumbnail" /> 
                </CardBottom>
            </SmallCard>
        </StyledLink>
        
    );
};

export default card;