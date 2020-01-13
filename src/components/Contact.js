import React, { Component } from 'react';
import styled from 'styled-components';
import instagram from '../assets/insta2.png';
import twitter from '../assets/twitter2.png';
import phone from '../assets/phone.png';
import mail from '../assets/mail3.png';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';
import './font.css';






const Group = styled.div`
display:flex;
justify-content:space-around;
padding-top: 150px;

@media (max-width: 991.98px) { 
    justify-content:center;
    padding-top: 100px;
 }

`

const Space = styled.div`

width: 100px;



@media (max-width: 575px) {
.bar {
    width:40px;
}

}

`



class Contact extends Component {
    state = {
       
      }
   
    render() { 
        return (  
            <div>
   <Row>
       <Col >
       <Group>
           
        
               
                  <Space> <Nav.Item>
          <Nav.Link target="none" href='mailto:marcusmiller220@gmail.com'> <Image fluid  className='bar' src={mail} rounded /></Nav.Link></Nav.Item><br></br><br></br>
                  </Space> 

                  <Space><Nav.Item>
          <Nav.Link target="none" href='tel:+1-804-405-2335'><Image fluid className='bar'  src={phone} rounded /></Nav.Link></Nav.Item><br></br><br></br>
             
                  </Space> 
      
                  <Space>  <Nav.Item>
          <Nav.Link target="none" href='https://github.com/zonekid'> <Image fluid className='bar'  src={github} rounded /></Nav.Link></Nav.Item><br></br><br></br>
                  </Space> 
      
          
         
                  <Space>  <Nav.Item>
          <Nav.Link target="none" href='https://twitter.com/zonekid'> <Image fluid className='bar'  src={twitter} rounded /></Nav.Link></Nav.Item><br></br><br></br>
                  </Space> 
      
        
                  <Space>  <Nav.Item>
          <Nav.Link target="none" href='https://www.linkedin.com/in/marcus-miller-98b260140/'> <Image fluid className='bar'  src={linkedin} rounded />
          </Nav.Link></Nav.Item><br></br><br></br>
               </Space> 
       
      
              </Group>
       </Col>
   </Row>
       
    
 

    </div>
        );
    }
}
 
export default Contact;

