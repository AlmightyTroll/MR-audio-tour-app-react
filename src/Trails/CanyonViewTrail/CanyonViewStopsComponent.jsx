import React, { Component } from 'react';
import styled from 'styled-components';
import HeaderSmall from '../Common/HeaderSmall';
//import HeaderSmallTheme2 from '../Common/HeaderSmallTheme2';
import MediaCard from '../Common/MediaCard';
//import './App.css';

import TrailData from '../../Data/TrailData';

import {
    useParams
  } from "react-router-dom";

import _ from 'lodash';

const CanyonViewStopsContainer = styled.div`
	height: 100%;
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

	const { trails } = TrailData;
	const canyonViewTrail = trails[0];
    const stops = trails[0].stops;
    const currentStop = stops.find(stop => {
      return stop.id == id;
    });	
   
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