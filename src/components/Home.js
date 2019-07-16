import React, { Component } from 'react';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Typist from 'react-typist';
import Image from 'react-bootstrap/Image';
import me from '../assets/marcusdraw.png';
import './font.css';

const Intro = styled.div `
font-family: Rob;
font-size: 64px;
color: #303030;
letter-spacing: 0;
padding-top:30px;
@media (max-width: 575px) {
    padding-top:70px;
  
 }
 @media (min-width: 576px) {
    padding-top:70px;
  
 }
 @media (min-width: 768px) and (max-width: 990px) {
    padding-top:70px;
  
 }


`

const Small = styled.span `
font-family: Rob;
font-size: 24px;
color: #303030;
letter-spacing: 0;

`

const Whole = styled.div `
padding-top:50px;
padding-bottom:50px;

`

const Move = styled.div `

padding-top:250px;

`


class Home extends Component {
    state = {  }
    render() { 
        return ( <div>
            <Whole>
            <Row>
                <Col sm={12} md={7} lg={{offset:1, span:6}} xl={6}>
                <Intro>
            <Typist>
                Hello, My name is Marcus Miller and I am a Web Developer based out of Richmond, VA<br></br>
                <Small>Let's Chat&#8594;</Small>    
            </Typist>
            </Intro>
                </Col>
                <Col sm={12} md={{offset:2, span:3}} lg={{offset:2, span:3}} xl={{offset:2, span:2}}>
             <Move><Image fluid  src={me} rounded /></Move>  
                </Col>
            </Row>
            </Whole>
        </div> );
    }
}
 
export default Home;