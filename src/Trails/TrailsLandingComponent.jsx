import React, { Component } from 'react';
import logo from '../logo.svg';
import styled from 'styled-components';
//import './App.css';
import HeaderLanding from './LandingPageComponent/HeaderLanding';
import Landing from './LandingPageComponent/Landing';

const TrailsComponentContainer = styled.div`
    width: 100%;
    height: 100%;
    overflowY: scroll;

    text-align: center;
`


class TrailsLandingComponent extends Component {
 
  render() {
    return (
        <TrailsComponentContainer>
            <HeaderLanding />
            <Landing />
        </TrailsComponentContainer>
    ); 
  }
}

export default TrailsLandingComponent;
