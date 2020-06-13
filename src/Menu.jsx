import React, { Component } from 'react';
//import logo from '../../logo.svg';
//import styled from 'styled-components';
//import './App.css';
import { slide as Menu } from 'react-burger-menu';

import {
    Link
  } from "react-router-dom";

class MenuComponent extends Component {

    showSettings (event) {
        event.preventDefault();
    }
    render() {
        return (
            <Menu>
                <Link to="/">Home</Link>
                <Link to="/canyon-view">Canyon View Luh</Link>
            </Menu>
        ); 
    }
}

export default MenuComponent;