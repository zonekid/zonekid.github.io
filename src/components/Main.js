import React, { Component } from 'react';
import styled from 'styled-components';
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Home from '../components/Home';
import Portfolio from '../components/Portfolio';
import About from '../components/About';
import Contact from '../components/Contact';
import './font.css';


const Whole = styled.div`
@media (max-width: 575px) {
    padding-top:120px;
    padding-bottom: 0px;
 }
 @media (min-width: 576px) {
    padding-top:120px;
    padding-bottom: 0px;
 }

@media (min-width: 768px) {
    padding-top:200px;
padding-bottom: 0px;
 }

@media (min-width: 991px) {
    padding-top:230px;
padding-bottom: 0px;
 }

@media (min-width: 1300px) {
    padding-top:170px;
padding-bottom: 150px;
 }

@media (min-width: 1800px) {
    padding-top:250px;
    padding-bottom:150px;
 }
`


class Main extends Component {
    state = {  }
    render() { 
        return ( <div>
      <div id="home">     
<Home/>
</div> 
<div id="portfolio"> 
<Portfolio/>
</div> 
<div id="about"> 
<About/>
</div> 
<Whole>
<div id="contact"> 
<Contact/>
</div> 
</Whole>
        </div> );
    }
}
 
export default Main;