import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
    return (
     
        
        <Navbar>
  <Navbar.Brand href="#home">Would You Rather?</Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse className="justify-content-end">
    <Navbar.Text>
      Signed in as: <a href="#login">Mark Otto</a>
    </Navbar.Text>
  </Navbar.Collapse>
</Navbar>
    )
  }
  
  export default NavBar;
  