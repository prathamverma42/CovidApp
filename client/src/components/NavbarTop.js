import React from "react";
import {
  Navbar,
  Form,
  Nav,
  FormControl,
  Button,
  NavDropdown,
} from "react-bootstrap";
import logo from "./logo.png";

function NavbarTop() {
  return (
      <div fixed="top">
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" id="home" >
          <Navbar.Brand href="#home"><img src={logo} width="130px" style={{ "border-radius": "10%" }} /></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#resources">Resources</Nav.Link>
              <Nav.Link href="#about-us">About Us</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
  );
}

export default NavbarTop;
