import React, { useState, useEffect } from "react";

import Cards from "./Cards";
import {
  Jumbotron,
  Container,
  Button,
  Row,
  Col,
  Spinner,
  Card,
} from "react-bootstrap";
import { Route } from "react-router-dom";
import axios from "axios";

function Resources(props) {
  let mystyle = {
    "margin-bottom": "2%",
  };

  const [found_resources, setFound_resources] = useState("");
  const [check_status, setCheck_status] = useState(1);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [cityResources, setCityResources] = useState([]);
  const getResources = () => {
    setFound_resources("find-resources");
    const body = {
      city: props.select_state,
    };

    axios.post("http://localhost:5000/resources", body).then((res) => {
      if (res.data !== "No resources") {
        setCityResources(res.data);
      } else {
        setCheck_status(0);
      }
    });
  };

  return (
    <>
      <div style={mystyle} autofocus>
        <Jumbotron fluid>
          <Container>
            <center>
              <h1>COVID-19 Resources for {props.select_state}</h1>
              <p>
                The website is constatly being updated with the latest
                resources, but most of them are exhaustive. If the website does
                not show up with any data or the links provided do not work, do
                not panic and come back a couple of minutes later.
              </p>
            </center>
          </Container>
        </Jumbotron>

        {found_resources === "" ? (
          <>
            <center>
              <Route
                render={({ history }) => (
                  <Button
                    size="lg"
                    variant="outline-success"
                    onClick={() => {
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
                  <center>
                    <Card className="bg-warning">
                      <Card.Header as="h5">Add Resources</Card.Header>
                      <Card.Body>
                        <Card.Text>
                          With supporting text below as a natural lead-in to
                          additional content.
                        </Card.Text>
                        <Route
                          render={({ history }) => (
                            <Button
                              size="lg"
                              variant="outline-dark"
                              onClick={() => {
                                history.replace("/Admin-User_page");
                              }}
                            >
                              Add Resources
                            </Button>
                          )}
                        />
                      </Card.Body>
                    </Card>
                  </center>
                </Col>
                <Col sm={6} className="mt-3">
                  <center>
                    <Card className="bg-info">
                      <Card.Header as="h5">Find Resources</Card.Header>
                      <Card.Body>
                        <Card.Text>
                          With supporting text below as a natural lead-in to
                          additional content.
                        </Card.Text>
                        <Button
                          size="lg"
                          variant="outline-light"
                          onClick={getResources}
                        >
                          Find Resources
                        </Button>
                      </Card.Body>
                    </Card>
                  </center>
                </Col>
              </Row>
            </Container>
          </>
        ) : (
          <>
            {/* <center> */}
            <div>
              <center>
                <Button
                  className="mt-2 mb-4 col-1"
                  variant="outline-dark"
                  size="lg"
                  onClick={(e) => {
                    setFound_resources("");
                    props.setFetch_state([]);
                  }}
                >
                  Go Back
                </Button>
                <h1>RESOURCES</h1>
              </center>
            </div>
            {cityResources.length === 0 ? (
              check_status === 1 ? (
                <>
                  <center>
                    <div className="mb-2">
                      <Button
                        variant="info"
                        size="lg"
                        style={{ fontSize: "3rem", alignItems: "center" }}
                      >
                        <Spinner animation="grow" variant="light" /> LOADING
                      </Button>
                    </div>
                  </center>
                </>
              ) : (
                <>
                  <center>
                    <h3>No resources found</h3>
                  </center>
                </>
              )
            ) : (
              <Container>
                <Row>
                  {cityResources.map((user) => {
                    return (
                      <Col className="col-6">
                        <Cards user={user} />
                      </Col>
                    );
                  })}
                </Row>
              </Container>
            )}
            {/* </center> */}
          </>
        )}
      </div>
    </>
  );
}

export default Resources;
