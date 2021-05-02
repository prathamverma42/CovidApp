import React, { useState, useEffect } from "react";
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
              <h1>
                <center>Find a State!</center>
              </h1>
              <span className="state-span">Choose a State</span>
              <br />
              <select
                className="category"
                onClick={(e) => props.setSelect_state(e.target.value)}
                onChange={(e) => setState(e.target.value)}
              >
                <option value="" selected>
                  choose...
                </option>
                <option value="HimachalPradesh">Himachal Pradesh</option>
                <option value="Punjab">Punjab</option>
                <option value="Delhi">Delhi</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="MadhyaPradesh">Madhya Pradesh</option>
                <option value="Haryana">Haryana</option>
              </select>
              <br />
              <br />
              <center>
                <Route
                  render={({ history }) => (
                    <Button
                      variant="secondary"
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
