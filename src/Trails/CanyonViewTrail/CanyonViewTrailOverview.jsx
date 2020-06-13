import React from 'react';
import styled from 'styled-components';
import HeaderSmall from '../Common/HeaderSmall';
import SmallCard from '../Common/SmallCard';

import canyonViewTrailData from '../../Data/TrailData';


const CardsContainer = styled.div `
    height: auto;
    width: 100%;

    background-color: #0089aa;
    color: #0089aa;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;    
`

const CanyonViewTrailOverview = () => {

    const { trails } = canyonViewTrailData;
    // above = this over here ...> const trails = canyonViewTrailData.trails;
    const stops = trails[0].stops;

    console.log(stops);

    const renderTrailsStops = () => {
        return stops.map((stop) => {
            return (
                <SmallCard stop={stop} key={stop.id} />
            );
        });
    };

    return (
        <div>
            <HeaderSmall />
            <CardsContainer>
               {renderTrailsStops()} 
            </CardsContainer>
        </div>
    );
}

export default CanyonViewTrailOverview;