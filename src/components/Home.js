import React, { Component } from 'react';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Typist from 'react-typist';
import Image from 'react-bootstrap/Image';
import me from '../assets/marcusdraw.png';
import './font.css';

const Whole = styled.div `
padding-top: 150px;
padding-bottom: 100px;

.time {
   
}

.intro {
    font-family: RobotoMono-Regular;
    font-size: 40px;
    color: #303030;
    letter-spacing: 0;
}

.small {
    font-family: RobotoMono-Regular;
    font-size: 24px;

}




@media (max-width: 1199.98px) { 
    .intro {
    font-size: 32px;

}


 }

 @media (max-width: 991.98px) { 

    padding-bottom: 80px;
    .intro {
    font-size: 26px;

}

  }

  @media (max-width: 767.98px) { 
    padding-top: 100px;
    padding-bottom: 20px;
    .intro {
    font-size: 18px;

}
   }

 @media (max-width: 575.98px) { 

    padding-top: 100px;
    padding-bottom: 10px;
    .intro {
    font-size: 18px;

}



 }

`



class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <Whole>
            <Row className="time">
               
                <Col xs={{span:8}} sm={{span:8}} md={{offset:1, span:7}} lg={{offset:1, span:7}} xl={{offset:2, span:6}}>
                   
                <div className="intro">
            <Typist>
                Hello, My name is Marcus Miller and I am a Web Developer based out of Richmond, VA<br></br>
                <p className="small">Let's Chat&#8594;</p>    
            </Typist>
            </div>
        
                </Col>  
                <Col xs={4} sm={4} md={3} lg={3} xl={2}>
            <Image fluid  src={me} rounded />
            
                </Col>   
            </Row>

            {/* <Row className="time">
            <Col xs={{offset:3, span:6}} md={4} lg={{offset:5, span: 3}}  xl={{offset:5, span: 3}}>
             <div ><Image fluid  src={me} rounded /></div>  
            
                </Col>
            </Row> */}
            </Whole>
        );
    }
}
 
export default Home;