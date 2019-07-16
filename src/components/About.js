import React from 'react';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';
import myself from '../assets/Supreme.jpg';
import star from '../assets/Hollywood.jpg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Media from 'react-bootstrap/Media';
import './font.css';

const Title = styled.h1 `
    font-family: Rob;
    color: #303030;
text-align:center;
padding-top:80px;
@media (max-width: 575px) {
    padding-top:20px;
}
`

const Text = styled.div `
font-family: Rob;
font-size: 28px;
color: #303030;
letter-spacing: 0;
text-align:center;
width:90%;
margin:0 auto;
`

const Square = styled.div `
text-align:center;
padding-top:40px;
padding-bottom:30px;
@media (min-width: 768px) {
display:none;
}
@media (min-width: 1800px) {
display:block;
 }

`
const Bored = styled.div `
padding-top:50px;


`
const Ovltext = styled.div `
text-transform:uppercase;
text-align: center;
font-size: 18px;
color:#ffffff;
@media (max-width: 575px) {
    .card-text{
        display:none;
    }
}
    @media (min-width: 576px) {
    .card-text{
        display:none;
    }
}
@media (min-width: 768px) {
    padding-top:90px;
padding-bottom: 100px;
}
@media (min-width: 991px) {
    padding-top:140px;
padding-bottom: 100px;
}
@media (min-width: 1300px) {
    padding-top:100px;
padding-bottom: 200px;
 }

@media (min-width: 1800px) {
  padding-top:100px;
padding-bottom: 80px;
 }
`


const Ovl1 = styled.div `
opacity:0;
transition:0.75s;
&:hover {
  opacity: 1;
  background: rgb(0, 0, 00, 0.75);
}
`

const Only = styled.div `
@media (max-width: 575px) {
    display:block;
}
@media (min-width: 575px) {
display:none;
}
`

const Fine = styled.div `
font-family:Roboto-Regular;
@media (max-width: 575px) {
    display:none
}
@media (min-width: 576px) {
    display:block;
}
`
const First = styled.div `

@media (min-width: 768px) {
    display:inline;
}
@media (min-width: 1800px) {
display:none;
 }
`


const About = () => {
    return ( 
<div>
    <Bored>
        <Row>
            
            
            <Col xl={{offset:2, span:8}}>
          <Fine><Media>
  <img
    width={400}
    height={258}
    className="align-self-start mr-3"
    src={myself}
    alt="Generic placeholder"
  />
  <Media.Body>
    <h5 style={{fontSize:34}}>ABOUT ME</h5>
    <p style={{fontSize:24}}>
    I'm a programmer who's inspired by artistry and innovation. Media, branding, and technology are the things that make me tick. My goal is to build digital content that contributes to our culture and society. Oh, and you might catch me spinning at a local venue from time to time. <First><Button className="btn1" shadow variant="outline-dark" size="sm" href="#">View My Resume</Button></First> 
    </p>
    <Square><Button className="btn2"  shadow variant="outline-dark" size="lg" target="blank" href="https://drive.google.com/file/d/1W8caQPxppD-qZzetw-fohPWEyASLuXGp/view?usp=drivesdk">View My Resume</Button></Square>
  </Media.Body>
</Media>
</Fine> 
            </Col>
        </Row>
        <Only>
<Title>ABOUT ME</Title>
   <Text> I'm a programmer who's inspired by artistry and innovation. Media, branding, and technology are the things that make me tick. My goal is to build digital content that contributes to our culture and society. Oh, and you might catch me spinning at a local venue from time to time.</Text>
<Square><Button variant="dark" size="lg" target="blank"  href="https://drive.google.com/file/d/1W8caQPxppD-qZzetw-fohPWEyASLuXGp/view?usp=drivesdk">View My Resume</Button></Square>
</Only>
</Bored>
</div>
     );
}
 
export default About;