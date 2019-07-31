import React, { Component } from 'react';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import SITW from '../assets/SITW_multiple2.jpg';
import john from '../assets/John Russel Hands-min2.jpg';
import got from '../assets/gotbackdrop2.jpg';
import Nav from 'react-bootstrap/Nav';
import './font.css';

const Ovltext = styled.div `
font-family: Rob;
text-transform:uppercase;
text-align: center;
font-size: 16px;
color:#ffffff;
@media (max-width: 575px) {
    padding-bottom: 200px;
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
.card-text{
        display:block;
    }
}
@media (min-width: 991px) {
    padding-top:140px;
padding-bottom: 100px;
}
@media (min-width: 1200px) {
    padding-top:0px;
padding-bottom: 120px;
font-size: 11px;
 }

 @media (min-width: 1330px) {
    padding-top:10px;
padding-bottom: 120px;
font-size: 12px;
 }

@media (min-width: 1800px) {
    padding-top:10px;
padding-bottom: 170px;
font-size: 15px;
 }

 @media (min-width: 2200px) {
    padding-top:80px;
padding-bottom: 170px;
font-size: 16px;
 }
`


const Ovl1 = styled.div `
opacity:0;
transition:0.75s;
&:hover {
  opacity: 1;

}
`

const Dark = styled.div `

 &:hover .card .card-img {
 filter: brightness(50%)

}
`

const Bloc = styled.div `
@media (min-width: 1200px) {
 font-size:24px;
 }
@media (min-width: 1800px) {

font-size: 26px;
 }
`

const Spam = styled.span`
@media (min-width: 1200px) {
display: none;
 }
@media (min-width: 1560px) {

display:inline;
 }
`

class Portfolio2 extends Component {
    state = {  }
    render() { 
        return ( <div className="flex-column">
      <Row>
          <Col xl={12}>
          <Dark> <Card className="mb-4">
    <Card.Img src={john} />
    <Card.ImgOverlay>
    <Nav.Item>
    <Nav.Link target='none' href='https://zonekid.github.io/Chocolate-City/#/main'>
    <Ovl1>
        <Ovltext>
      <Card.Title style={{fontSize: 24}}>WHAT HAPPENED 2 CHOCOLATE CITY</Card.Title>
      <Card.Text>
      What Happened 2 Chocolate City (WH2CC) is a feature length documentary, exploring the rise and decline of one of our nation’s most prominent Black communities through the narrative of three individuals. <Spam>By visually examining the repercussions of urban development and revitalization in the district, WH2CC will uncover the roots of Washington, DC, a district home to GoGo music, Mumbo Sauce, and legions of black artists and academics, and how they’ve come to be endangered.</Spam>
      </Card.Text>
      <Card.Text>
   Technologies used: Angular & Bootstrap
    </Card.Text>
      </Ovltext>
    </Ovl1>
    </Nav.Link>
  </Nav.Item>
      </Card.ImgOverlay>
  </Card>
  </Dark>
          </Col>
          </Row>  
         
          <Row>
          <Col xl={12}>
          <Dark> <Card className="mb-4">
    <Card.Img src={got} />
    <Card.ImgOverlay>
    <Nav.Item>
    <Nav.Link target="none"  href='https://zonekid.github.io/TelevisionFavorites/#/'>
    <Ovl1>
        <Ovltext>
      <Card.Title style={{fontSize: 26}}>MY FAVORITE SHOWS</Card.Title>
      <Card.Text>
        No fancy long dialouge here. Just TV talk!  Here are my top 10 favorite tv shows!
      </Card.Text>
      <Card.Text>
      Technologies used: React, React-Bootstrap, Styled Components, API 
    </Card.Text>
      </Ovltext>
    </Ovl1>
    </Nav.Link>
  </Nav.Item>
      </Card.ImgOverlay>
  </Card>
  </Dark>
          </Col>
          </Row> 

      
           

        </div> );
    }
}
 
export default Portfolio2;