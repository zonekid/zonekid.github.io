import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import styled from 'styled-components';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import './font.css';

const Navstyle = styled.div `

.navbar {
  background-color: #ffffff;
}

.navbar-nav .cool1 {
    font-family: Helvetica;
font-size: 18px;
color: #303030;
letter-spacing: 0;
text-transform:uppercase;
padding-left:15px;
padding-right:15px;
}

.navbar .navbar-brand {
    font-family: Helvetica;
font-size: 20px;
color: #303030;
letter-spacing: 0;
text-transform:uppercase;
}
`

const Navigation = () => {
    return ( 
        <Navstyle>
<Navbar fixed="top" bg="" expand="lg">
<NavLink to='/#home'><Navbar.Brand >Marcus Miller</Navbar.Brand></NavLink>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
   <Nav className="ml-auto">
      <NavLink className="cool1" to='/#portfolio'>Work</NavLink>
      <NavLink className="cool1" to="/#about">About</NavLink>
      <NavLink className="cool1" to="/#contact">Contact</NavLink>
    </Nav>
  </Navbar.Collapse>
</Navbar>
</Navstyle>
     );
}
 
export default Navigation;