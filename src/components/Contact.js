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


const Data = styled.p`
font-family: Rob;
font-size: 28px;

@media (max-width: 575px) {
    font-size: 14px;

}
`



const Group = styled.div`
display:flex;
justify-content:space-around;
@media (max-width: 575px) {
justify-content:center;

}
`

const Space = styled.div`

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
   
        <Group>
           
     <Space><Nav.Item>
    <Nav.Link target="none" href='tel:+1-804-405-2335'><Image className='bar'  src={phone} rounded /></Nav.Link></Nav.Item><br></br><br></br>
       
            </Space> 
          
         
            <Space> <Nav.Item>
    <Nav.Link target="none" href='mailto:marcusmiller220@gmail.com'> <Image  className='bar' src={mail} rounded /></Nav.Link></Nav.Item><br></br><br></br>
            </Space> 

            <Space>  <Nav.Item>
    <Nav.Link target="none" href='https://github.com/zonekid'> <Image className='bar'  src={github} rounded /></Nav.Link></Nav.Item><br></br><br></br>
            </Space> 

    
   
            <Space>  <Nav.Item>
    <Nav.Link target="none" href='https://twitter.com/zonekid'> <Image className='bar'  src={twitter} rounded /></Nav.Link></Nav.Item><br></br><br></br>
            </Space> 

  
            <Space>  <Nav.Item>
    <Nav.Link target="none" href='https://www.linkedin.com/in/marcus-miller-98b260140/'> <Image className='bar'  src={linkedin} rounded />
    </Nav.Link></Nav.Item><br></br><br></br>
         </Space> 
 

        </Group>
    
 

    </div>
        );
    }
}
 
export default Contact;

