import React, { useState } from "react";
import "./Main.css";
import { Route } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import covid from "../assets/covid.png";

function Main(props) {
  const [state, setState] = useState("");

  return (
    <>
      <div style={{ height: "50px" }} id="home">
        {" "}
      </div>
      <div className="info" style={{ height: "25rem" }}>
        {" "}
        <Container>
          <Row>
            <Col sm={8}>
              <div className="header-info my-5">
                <span className="header">COVID-19</span>
                <p className="header-content">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Dicta tempore quam, voluptate architecto alias tenetur ratione
                  labore corporis quia sint optio? Ducimus minima error quia.
                  Maiores quos eaque officia rerum.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div style={{ height: "50px" }} id="about-us">
        {" "}
      </div>

      <div className="about-us ">
        <div>
          <p className="about-header">
            <center>About Us</center>
          </p>
          <center>
            <p className="about-content">
              <center>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                amet facilis, accusamus odio laborum sint autem optio sapiente
                nam veniam accusantium natus exercitationem hic iusto, possimus
                molestias saepe. Repudiandae, nam! Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Ratione amet facilis, accusamus
                odio laborum sint autem optio sapiente nam veniam accusantium
                natus exercitationem hic iusto, possimus molestias saepe.
                Repudiandae, nam!
              </center>
            </p>
          </center>
        </div>
      </div>
      <div style={{ height: "50px" }} id="resources">
        {" "}
      </div>

      <Container>
        <Row>
          <Col sm={6}>
            <div className="state-from-div">
              <h1
                style={{
                  fontFamily: "Alegreya SC",
                  fontWeight: "400",
                  textShadow: "2px 2px 2px ",
                  fontSize: "4rem",
                }}
              >
                <center>Find a State!</center>
              </h1>
              <span className="state-span">Choose a State</span>
              <br />
              <select
                className="category"
                onClick={(e) => props.setSelect_state(e.target.value)}
                onChange={(e) => setState(e.target.value)}
              >
                {" "}
                <option value="">Choose...</option>
                <option value="AndhraPradesh">Andhra Pradesh</option>
                <option value="ArunachalPradesh">Arunachal Pradesh</option>
                <option value="Assam">Assam</option>
                <option value="Bihar">Bihar</option>
                <option value="Chattisgarh">Chattisgarh</option>
                <option value="Delhi">Delhi</option>
                <option value="Goa">Goa</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Haryana">Haryana</option>
                <option value="HimachalPradesh">Himachal Pradesh</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Kerela">Kerela</option>
                <option value="MadhyaPradesh">Madhya Pradesh</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Manipur">Manipur</option>
                <option value="Meghalaya">Meghalaya</option>
                <option value="Mizoram">Mizoram</option>
                <option value="Nagaland">Nagaland</option>
                <option value="Odisha">Odisha</option>
                <option value="Punjab">Punjab</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Sikkim">Sikkim</option>
                <option value="TamilNadu">Tamil Nadu</option>
                <option value="Telangana">Telangana</option>
                <option value="Tripura">Tripura</option>
                <option value="UttarPradesh">Uttar Pradesh</option>
                <option value="Uttarakhand">Uttarakhand</option>
                <option value="WestBengal">West Bengal</option>
              </select>
              <br />
              <br />
              <center>
                <Route
                  render={({ history }) => (
                    <Button
                      size="lg"
                      // variant="outline-"
                      variant="dark"
                      onClick={() => {
                        history.replace(`/${state}`);
                      }}
                      disabled={state === ""}
                    >
                      Find State{" "}
                    </Button>
                  )}
                />
              </center>
            </div>
          </Col>
          <Col sm={6}>
            <div>
              <center>
                <img src={covid} width="100%" />
              </center>
            </div>
          </Col>
        </Row>
      </Container>
      <div style={{ height: "60px" }} id="contact">
        {" "}
      </div>
    </>
  );
}

export default Main;
