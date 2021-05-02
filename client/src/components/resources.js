import React, { useState } from "react";
import Cards from "./Cards";
import {
  Jumbotron,
  Container,
  Button,
  lg,
  Toast,
  Row,
  Form,
  Col,
} from "react-bootstrap";
// import Link from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function Resources(props) {
  let mystyle = {
    "margin-bottom": "2%",
  };
  const [found_resources, setFound_resources] = useState("");
  const [add_resource, setAdd_resource] = useState("");
  const onsubmit = (e) => {
    e.preventDefault();

    setAdd_resource("1234");
  };
  const getResources = () => {
    setFound_resources("find-resources");
    props.fetchresource();
  };
  return (
    <div style={mystyle}>
      {/* <h1>Resource</h1> */}

      <Jumbotron fluid>
        <Container>
          <center>
            <h1>COVID-19 Resources for {props.select_state}</h1>
            <p>
              The website is constatly being updated with the latest resources,
              but most of them are exhaustive. If the website does not show up
              with any data or the links provided do not work, do not panic and
              come back a couple of minutes later.
            </p>
          </center>
        </Container>
      </Jumbotron>

      {found_resources === "" ? (
        <>
          <center>
            {/* <Button
          variant="primary"
          size="lg"
          onClick={(e) => props.setSelect_state("")}
        >
          Go Back
        </Button> */}
            <Route
              render={({ history }) => (
                <Button
                  variant="danger"
                  // className="btn-lg font-weight-bold mx-2 my-1"
                  onClick={() => {
                    // props.changeNav(0)
                    history.replace("/");
                  }}
                >
                  Go To Home
                </Button>
              )}
            />
          </center>

          <Container>
            <Row className="my-5 ">
              <Col sm={6} className="mt-3">
                {add_resource === "" ? (
                  <>
                    <center>
                      <h1>Add Resources</h1>
                    </center>
                    <Form
                      style={{ border: "1px solid grey ", padding: "25px" }}
                      onSubmit={onsubmit}
                    >
                      <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                      </Form.Group>
                      <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        <Form.Control as="select" defaultValue="Choose...">
                          <option>Choose...</option>
                          <option>...</option>
                        </Form.Control>
                      </Form.Group>
                      <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                      </Form.Group>
                      <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                      </Form.Group>
                      <Button variant="primary" type="submit">
                        Add Resource
                      </Button>
                    </Form>
                  </>
                ) : (
                  <>
                    <h1>Successfully added</h1>
                    <Button onClick={(e) => setAdd_resource("")}>
                      Add More
                    </Button>
                  </>
                )}
              </Col>
              <Col sm={6} className="mt-3">
                <center>
                  <Button onClick={getResources}>Find Resources</Button>
                </center>
              </Col>
            </Row>
          </Container>
        </>
      ) : (
        <>
          <center>
            <Button onClick={(e) => setFound_resources("")}>Go Back</Button>
            <h1>RESOURCES</h1>
            {props.arr.map(user=> {console.log(user)
            return <Cards user={user}/>
          })}
          </center>
        </>
      )}

      {/* <Row>
        <Col xs={6}>
          <Toast show={showA} onClose={toggleShowA}>
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded mr-2"
                alt=""
              />
              <strong className="mr-auto">Bootstrap</strong>
              <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body>
              Woohoo, you're reading this text in a Toast!
            </Toast.Body>
          </Toast>
        </Col>
        <Col xs={6}>
          <Button onClick={toggleShowA}>
            Toggle Toast <strong>with</strong> Animation
          </Button>
        </Col>
        <Col xs={6} className="my-1">
          <Toast onClose={toggleShowB} show={showB} animation={false}>
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded mr-2"
                alt=""
              />
              <strong className="mr-auto">Bootstrap</strong>
              <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body>
              Woohoo, you're reading this text in a Toast!
            </Toast.Body>
          </Toast>
        </Col>
        <Col xs={6}>
          <Button onClick={toggleShowB}>
            Toggle Toast <strong>without</strong> Animation
          </Button>
        </Col>
      </Row> */}
    </div>
  );
}

export default Resources;
