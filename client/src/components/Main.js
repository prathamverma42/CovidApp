import React, { useState,useEffect } from "react";
// import Example from './Example';
import "./Main.css";
import {Route} from 'react-router-dom';
import { Button, Alert, Toast, Overlay, Tooltip } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
// import { useRef } from 'react-bootstrap';
import covid from "./covid.png";
function Main(props) {
  const [state, setState] = useState("");
  // const [show, setShow] = useState(false);
  // const target = useRef(null);
  const onBtnClick = () => {
    console.log(state);
    if (state != "none") {
      // props.setSelect_state(state);
      <Route>
;
        </Route>
    } else {
      console.log(props.state);
    }
  };
  useEffect(() => {
    // if(state!=="none")
    // {
    //   document.getElementById("abc").setAttribute("disabled",false);
    // }
    // console.log(state);
    // console.log(state==="");
  }, [state])
  // render(){
  return (
    <>
      <div className="info" id="home">
        {" "}
        <Container>
          <Row>
            <Col sm={8}>
              <div className="header-info">
                <span className="header">COVID-19</span>
                <p className="header-content">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Dicta tempore quam, voluptate architecto alias tenetur ratione
                  labore corporis quia sint optio? Ducimus minima error quia.
                  Maiores quos eaque officia rerum.
                </p>
                <div className="header-btn ">
                  <Button variant="dark">Hello World</Button>&emsp;
                  <Button variant="dark">Hello World</Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="about-us " id="about-us">
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
      <Container>
        <Row>
          <Col sm={6}>
            {/* <div className="state-form "> */}
            <div className="state-from-div" id="resources">
              <h1>
                <center>Find a State!</center>
              </h1>
              <span className="state-span">Choose a State</span>
              <br />
              <select
                className="category"
                onClick={(e) => props.setSelect_state(e.target.value)}
                onChange={(e)=> setState(e.target.value)}
              >
                <option value="" selected >
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
                      onClick={()=>{        history.replace(`/${state}`)}}
                      disabled={state===""}
                    >
                      Find State{" "}
                    </Button>
                  )}
                />

                {/* <Button
                  variant="secondary"
                  onClick={onBtnClick}
                >
                  Find State
                </Button> */}
              </center>
            </div>
          </Col>
          <Col sm={6}>
            <div>
              <center>
                <img src={covid} width="100%" />
              </center>
            </div>
            {/* </div> */}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Main;
