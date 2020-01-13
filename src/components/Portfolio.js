import React, { Component } from 'react';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'
import SITW2 from '../assets/SITW_Hov_P.jpg';
import Image from 'react-bootstrap/Image'
import steve from  '../assets/yoga_steve.jpg';
import john from '../assets/John Russel Hands-min2.jpg';
import './font.css';

const Ports = styled.div `
font-family: RobotoMono-Regular;
text-transform:uppercase;
text-align: center;
color:#ffffff;

.first-row {
    padding-top:50px;
   justify-content:center;
    
}

.second-row{
    padding-top:25px;
   justify-content:center;
}

.box {
  position: relative;
  width: 100%;
}

.picture {
  display: block;
  width: 100%;
  height:375px;
}

.picture1 {
    display: block;
width: 100%;
  height:auto;  
}

.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: .5s ease;

}

.box:hover .overlay {
background-color:rgba(0, 0, 0, 0.80);
opacity:1.0;
}

.title2 {
    color:#ffffff;
    font-size: 19px;
  padding-bottom:50px;

  position: absolute;
  top: 30%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
   text-transform: uppercase;
}

.info2 {
    color:#ffffff;
    font-size: 14px;
  padding-bottom:50px;

  position: absolute;
  top: 66%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
   text-transform: uppercase;
}

.title3 {
    color:#ffffff;
    font-size: 19px;
  padding-bottom:50px;

  position: absolute;
  top: 30%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
   text-transform: uppercase;
}

.info3 {
    color:#ffffff;
    font-size: 14px;
  padding-bottom:50px;

  position: absolute;
  top: 66%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
   text-transform: uppercase;
}

.title1 {
    color:#ffffff;
    font-size: 23px;
  padding-bottom:50px;

  position: absolute;
  top: 30%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
   text-transform: uppercase;
}

.info1 {
    color:#ffffff;
    font-size: 18px;
  padding-bottom:50px;

  position: absolute;
  top: 60%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
   text-transform: uppercase;
}

@media (max-width: 1670.98px) {
    .picture {
  height:320px;
}
}

@media (max-width: 1500.98px) {
    .picture {
  height:280px;
}

.info1 {
top: 66%;
    }

    .title2 {
font-size: 16px;
    }

    .info2 {
font-size: 11px;
    }

    .title3 {
font-size: 16px;
    }

    .info3 {
font-size: 11px;
top: 69%;
    }
}

@media (max-width: 1199.98px) { 

    .picture {
        height:250px;
    }

    .info1 {
top: 66%;
    }

    .title2 {
font-size: 16px;
    }

    .info2 {
font-size: 11px;
    }

    .title3 {
font-size: 16px;
    }

    .info3 {
font-size: 11px;
top: 69%;
    }
}

@media (max-width: 991.98px) { 

.picture {
    height:200px;
}

.title1 {
font-size: 18px;
    }

    .info1 {
font-size: 14px;
top: 63%;
    }

.title2 {
font-size: 14px;
top: 25%;
    }

    .info2 {
font-size: 10px;
top: 69%;
    }

    .title3 {
font-size: 13px;
top: 25%;
    }

    .info3 {
font-size: 10px;
top: 72%;
    }
}

@media (max-width: 767.98px) { 

    .overlay{
        opacity:1.0;
    }
    .picture {
    height:auto;
    padding-bottom:22px;
}

.title1 {
font-size: 15px;
top: 50%;
    }

    .info1 {
visibility:hidden;
    }

.title2 {
font-size: 15px;
top: 50%;
    }

    .info2 {
        visibility:hidden;
    }

    .title3 {
        font-size: 15px;
        top: 50%;
    }

    .info3 {
        visibility:hidden;
    }
}

`

class Portfolio extends Component {
    state = {  }
    render() { 
        return ( <div>
           <Ports>

           <Row className="first-row">
                    
                    <Col xs={12} sm={12} md={10} lg={10} xl={8}>  <div className="box">
                          <a href="https://zonekid.github.io/agency-page/#/">
                              <Image fluid src={steve} alt="RTH" className="picture1"/>
                          <div className="overlay">
                          <h3 className="title1">Release The Hounds Agency</h3>
                          <p className="info1">RTH is a brand experience shop based out of Richmond, VA that focuses on developing and communicating brand stories that radiate.  Check out my version of their website.</p>
                          </div>
                          </a>
                        </div></Col>
                  </Row>

           <Row className="second-row">
                    
                    <Col xs={12} sm={12} md={5} lg={5} xl={4}>  <div className="box">
                          <a href="https://zonekid.github.io/friendswithyou/#/">
                              <Image fluid src={SITW2} alt="SITW" className="picture"/>
                          <div className="overlay">
                          <h3 className="title2">FriendsWithYou</h3>
                          <p className="info2">
FRIENDSWITHYOU IS THE FINE ART COLLABORATIVE OF SAMUEL BORKSON AND ARTURO SANDOVAL III, WORKING COLLECTIVELY SINCE 2002 WITH THE SOLE PURPOSE OF SPREADING THE POSITIVE MESSAGE OF MAGIC, LUCK, AND FRIENDSHIP™.</p>
                          </div>
                          </a>
                        </div></Col>
                    <Col xs={12} sm={12} md={5} lg={5} xl={4}><div className="box">
                    <a href="https://zonekid.github.io/Chocolate-City/#/main">
                          <Image fluid src={john} alt="Chocolate City" className="picture"/>
                          <div className="overlay">
                          <h3 className="title3">What Happened 2 Chocolate City</h3>
                          <p className="info3">WHAT HAPPENED 2 CHOCOLATE CITY (WH2CC) IS A FEATURE LENGTH DOCUMENTARY, EXPLORING THE RISE AND DECLINE OF ONE OF OUR NATION’S MOST PROMINENT BLACK COMMUNITIES THROUGH THE NARRATIVE OF THREE INDIVIDUALS.</p>
                          </div>
                          </a>
                        </div></Col>
                        
                  </Row>
           </Ports>
        </div> );
    }
}
 
export default Portfolio;