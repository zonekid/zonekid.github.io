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