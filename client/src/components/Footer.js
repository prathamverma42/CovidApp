import React from "react";
import "./Footer.css";
import img_bg from "../assets/map-bg.png";
import { Container, Row, Col } from "react-bootstrap";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import MailIcon from "@material-ui/icons/Mail";

function Footer() {
  return (
    <>
      <div style={{ backgroundColor: "#250D52", color: "#FFFFFF" }}>
        <Container>
          <Row>
            <Col sm={3}>
              <div className="content">
                <h3>
                  <strong>RESOURCES</strong>
                </h3>
                <div className="p-tag">
                  <p>What we do</p>
                  <p>Media</p>
                  {/* <p>Travel Advice</p> */}
                  <p>Protection</p>
                  <p>Care</p>
                </div>
              </div>
            </Col>
            <Col sm={3}>
              <div className="content">
                <h3>
                  <strong>ABOUT</strong>
                </h3>
                <div>
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                  'lorem ipsum' will uncover many web sites still in their
                  infancy. Various
                </div>
              </div>
            </Col>
            <Col sm={3} style={{ lineHeight: "35px" }}>
              <div className="content">
                <h3>
                  <strong>CONTACT US</strong>
                </h3>
                <div>
                  <div>
                    <Row>
                      <Col sm={1}>
                        <LocationOnIcon fontSize="medium" color="light" />
                      </Col>
                      <Col sm={8}>
                        {" "}
                        <span>Location</span>
                      </Col>
                    </Row>
                  </div>
                  <div>
                    <Row>
                      <Col sm={1}>
                        <PhoneIcon fontSize="medium" color="light" />
                      </Col>
                      <Col sm={8}>
                        {" "}
                        <span>Call +01234567890</span>
                      </Col>
                    </Row>
                  </div>
                  <div>
                    <Row>
                      <Col sm={1}>
                        <MailIcon fontSize="medium" color="light" />
                      </Col>
                      <Col sm={8}>
                        {" "}
                        <span>demo@gmail.com</span>
                      </Col>
                    </Row>
                  </div>
                </div>
              </div>
            </Col>
            <Col sm={3}>
              <div className="content">
                <h3>
                  <strong>COUNTRY's</strong>
                </h3>
                <div>
                  <img src={img_bg} width="100%" />
                </div>
              </div>
            </Col>
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
