import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import thumbnail from '../../img/hero-small.jpg';

const SmallCard = styled.div `
    background-color: white;
    width: 85vw;
    height: 35vh;
    
    border: 2px solid white;
    border-radius: 15px;

    margin: 1.5rem 0;


    display: flex;
    justify-content: center;    

    overflow: scroll;

`

const LookingFor = styled.p `
    width: 50%;
    text-align: left;
`

const Thumbnail = styled.img `
    width: 25vw;
    height: auto;

    

`



const card = (props) => {
    console.log(props);
    return (
        <Link to={props.stop.stopLink} >
            <SmallCard>
                <div>{props.stop.name}</div>
                <div>
                    <LookingFor>
                        <b>Looking For:</b> <br /> 
                        Lorem hsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, unde placeat velit necessitatibus explicabo vel, voluptatibus aut corrupti dolores minus hic totam a animi repudiandae eveniet, reprehenderit officia esse assumenda? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam maxime, dignissimos modi iusto tempore debitis omnis quasi praesentium. Veritatis consequuntur id fuga cumque eius nostrum voluptatum illum ad molestias culpa.
                    </LookingFor>
                    <Thumbnail src={thumbnail} alt="Thumbnail" /> 
                </div>
            </SmallCard>
        </Link>
        
    );
};

export default card;