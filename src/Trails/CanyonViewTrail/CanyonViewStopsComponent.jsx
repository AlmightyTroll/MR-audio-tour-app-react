import React, { Component } from 'react';
import logo from '../../logo.svg';
import styled from 'styled-components';
import HeaderSmall from '../Common/HeaderSmall';
//import HeaderSmallTheme2 from '../Common/HeaderSmallTheme2';
import MediaCard from '../Common/MediaCard';
//import './App.css';

import canyonViewTrailData from '../../Data/TrailData';

import {
    useParams
  } from "react-router-dom";

import _ from 'lodash';

const CanyonViewStopsContainer = styled.div`
	height: auto;
	width: 100%;

	background-color: #0089aa;
	color: #0089aa;

	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;    

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
		<div>
			<HeaderSmall />
			<CanyonViewStopsContainer>
				<MediaCard stop={currentStop} key={currentStop.id} />
			</CanyonViewStopsContainer>
		</div>
    ); 
  }


export default CanyonViewStopsComponent;