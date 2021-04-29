import React from "react"
import {Navbar, Form , Nav, FormControl, Button} from 'react-bootstrap'
import logo from './logo.png'

function NavbarTop() {
  return (
    <div>
      <>
        <Navbar bg="light" variant="light">
          <Navbar.Brand ><img src={logo} width="130px" style={{"border-radius": "10%"}} /></Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link  bg="light">Home</Nav.Link>
            <Nav.Link >Features</Nav.Link>
            <Nav.Link>Pricing</Nav.Link>
          </Nav>
        </Navbar>
      </>
    </div>
  );
}

export default NavbarTop;
