import React,{useState} from "react";
import { Jumbotron, Container, Button, lg, Toast, Row, Col } from "react-bootstrap";
// import Link from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function Resources(props) {
  let mystyle = {
    "margin-bottom": "2%",
  };
  
  return (
    <div style={mystyle}>
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
      <center>
        <Button
          variant="primary"
          size="lg"
          onClick={(e) => props.setSelect_state("")}
        >
          Go Back
        </Button>
      </center>



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
