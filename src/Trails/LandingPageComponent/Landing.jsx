import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import logoMR from '../../img/logoMR.png';



const Aux = styled.div `
    margin-top: 2rem;
`

const Trails = styled.h2 `
    font-size: calc(10px + 2vmin);
    font-family: caslon serrif;

    display: felx;
    flex-direction: column; 
    justify-content: center;

`

const CanyonTrail = styled(Link) `
    font-size: 1.75rem;
    text-decoration: none;
    color: #0089aa;

`

const OceanTrail = styled.a `
    font-size: 1.75rem;
    text-decoration: none;
    color: #0089aa;

`

const Or = styled.img `
    width: 10%;
    height: auto;

    disply: flex;
    justify-content: center;
`

const landing = () => {
    return (
        <Aux>
            <Trails>
                <CanyonTrail to="/canyon-view">
                    Canyon View Trail 
                </CanyonTrail>
                
            </Trails>
            <Or src={logoMR} alt="Or" />
            <Trails>
                <OceanTrail href='/'>
                    Ocean View Trail
                </OceanTrail>
            </Trails>
        </Aux>
    );        
}

export default landing;