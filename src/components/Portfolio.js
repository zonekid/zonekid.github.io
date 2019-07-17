import React, { Component } from 'react';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'
import SITW from '../assets/SITW_purp_green_float.jpeg';
import SITW2 from '../assets/SITW_Hov_P.jpg';
import Portfolio2 from '../components/Portfolio2';
import Nav from 'react-bootstrap/Nav';
import './font.css';

const Ovltext = styled.div `
font-family: Rob;
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
.card-text{
        display:block;
    }
}
@media (min-width: 991px) {
    padding-top:140px;
padding-bottom: 100px;
}
@media (min-width: 1200px) {
    padding-top:50px;
padding-bottom: 200px;
font-size: 14px;
 }

 @media (min-width: 1500px) {
    padding-top:110px;
padding-bottom: 200px;
font-size: 14px;
 }

@media (min-width: 1800px) {
  padding-top:170px;
padding-bottom: 270px;
font-size: 18px;
 }

 @media (min-width: 2300px) {
  padding-top:270px;
padding-bottom: 370px;
font-size: 18px;
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
padding-bottom:20px;
    &:hover  .card .card-img  {
 filter: brightness(50%);
}

`

const Overall = styled.div `

@media (min-width: 1300px) {
    padding-top:200px;

 }

@media (min-width: 1800px) {
  padding-top:200px;
padding-bottom:100px;
 }
`


class Portfolio extends Component {
    state = {  }
    render() { 
        return ( <div>
            <Overall>
            <Row>
                <Col xl={{offset:1, span:6}}>
                <Dark className="h-100">     <Card className="h-100 text-white">
<Card.Img className="h-100" src={SITW2} alt="Card image" />
 <Card.ImgOverlay>
 <Nav.Item>
    <Nav.Link target="none"  href='https://zonekid.github.io/friendswithyou/#/'>
 <Ovl1>
        <Ovltext>
    <Card.Title style={{fontSize: 30}}>FRIENDS WITH YOU</Card.Title>
    <Card.Text>
    FriendsWithYou is the fine art collaborative of Samuel Borkson and Arturo Sandoval III, working collectively since 2002 with the sole purpose of spreading the positive message of Magic, Luck, and Friendship™. Known for immersive installations and interactive artworks, FriendsWithYou invites viewers of their work to reconnect with and reinterpret their lives through communal experiences. 
    </Card.Text>
    <Card.Text>
   Technologies used: React, React-Bootstrap, Style Components 
    </Card.Text>
    </Ovltext>
    </Ovl1>
    </Nav.Link>
    </Nav.Item>
  </Card.ImgOverlay>

</Card>
</Dark>
                </Col>
                <Col xl={4}>
                    <Portfolio2/>
                </Col>
            </Row>
            </Overall>
        </div> );
    }
}
 
export default Portfolio;