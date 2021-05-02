import React from "react";
import "./Footer.css";
import img_bg from "./map-bg.png";
import {Container, Row, Col} from 'react-bootstrap'
function Footer() {
  return (
    <>
      <div style={{ backgroundColor: "#250D52", color: "#FFFFFF" }} >
        <Container>
        {/* <div > */}
        <Row>
          <Col sm={3}>
          <div className="content">
            <h3>
              <strong>RESOURCES</strong>
            </h3>
            <div className="p-tag">
              <p>What we do</p>
              <p>Media</p>
              <p>Travel Advice</p>
              <p>Protection</p>
              <p>Care</p>
            </div>
          </div>
          </Col >
          <Col sm={3}>
          <div className="content">
            <h3>
              <strong>ABOUT</strong>
            </h3>
            <div>
              Many desktop publishing packages and web page editors now use
              Lorem Ipsum as their default model text, and a search for 'lorem
              ipsum' will uncover many web sites still in their infancy. Various
            </div>
          </div>
          </Col>
          <Col sm={3}>
          <div className="content">
            <h3>
              <strong>CONTACT US</strong>
            </h3>
            <div>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
              doloremque nulla asperiores soluta natus ad, ut doloribus at fugit
              repellendus ipsam, architecto a assumenda quod delectus quam ab
              odit harum?
            </div>
          </div>
          </Col>
          <Col sm={3}>
          <div className="content">
            <h3>
              <strong>COUNTRY's</strong>
            </h3>
            <div>
              <img src={img_bg} width="100%"/>
            </div>
          </div>
          </Col>
        {/* </div> */}
        
        </Row>
        </Container>
      </div>
      <div className="my-3" style={{ textAlign: "center" }}>
        <p style={{ fontSize: "18px" }}>&copy; 2020 All Rights Reserved.</p>
      </div>
    </>
  );
}

export default Footer;
