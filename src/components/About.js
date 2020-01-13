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

const Me = styled.div `
font-family: RobotoMono-Regular;

.section {
margin: 0 auto;
padding-top: 150px;
}

.pic {
    width:332px;
    height:214px;  
}

.title {
font-size:20px;
}

.info {
    font-size:17px;

}

@media (max-width: 991.98px) { 
    .pic {
    width:242px;
    height:156px;  
}

.title {
font-size:15px;
}

.info {
    font-size:12px;

}

.section {
    padding-top:100px;
}

}

@media (max-width: 767.98px) { 
    .pic {
    width:142px;
    height:91px;  
}

.section {
    padding-top:50px;
}

 }

`



const About = () => {
    return ( 
<div>
    <Me>
    <Row>
        <Col xs={12} sm={12} md={10} lg={10} xl={8} className="section">
        <Media>
  <img
    className="mr-3 pic"
    src={myself}
    alt="Generic placeholder"
  />
  <Media.Body>
    <h5 className="title">ABOUT MYSELF</h5>
    <p className="info">
    I'm a programmer who's inspired by artistry and innovation. Media, branding, and technology are the things that make me tick. My goal is to build digital content that contributes to our culture and society. Oh, and you might catch me spinning at a local venue from time to time. <Button href="https://drive.google.com/file/d/178RcnAJ3zCVorhG1jrTXVrjfmuVz1Qao/view?usp=drivesdk" target="_blank" size="sm" variant="outline-dark">View My Resume</Button>
    </p>
  </Media.Body>
</Media>
        </Col>
    </Row>
    </Me>
</div>
     );
}
 
export default About;