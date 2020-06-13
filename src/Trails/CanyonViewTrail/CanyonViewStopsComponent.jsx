import React, { Component } from 'react';
import logo from '../../logo.svg';
import styled from 'styled-components';
//import './App.css';

import canyonViewTrailData from '../../Data/TrailData';

import {
    useParams
  } from "react-router-dom";

import _ from 'lodash';

const CanyonViewStopsContainer = styled.div`
    width: 100%;
    height: 100%;
    overflowY: scroll;

`
const StopTitle = styled.div `
  color: red;
`

function CanyonViewStopsComponent() {
    let {id} = useParams();

    const { trails } = canyonViewTrailData;
    const stops = trails[0].stops;
    const currentStop = stops.find(stop => {
      return stop.id == id;
    });
    console.log(currentStop);

   
    return (
        <CanyonViewStopsContainer>
            <StopTitle>
                {currentStop.name}
            </StopTitle>
            {id}
        </CanyonViewStopsContainer>
    ); 
  }


export default CanyonViewStopsComponent;