import React, { useState, useEffect } from "react";
import Cards from "./Cards";
import {
  Jumbotron,
  Container,
  Button,
  Row,
  Form,
  Col,
  Spinner,
} from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";

function Resources(props) {
  let mystyle = {
    "margin-bottom": "2%",
  };

  const [found_resources, setFound_resources] = useState("");
  const [add_resource, setAdd_resource] = useState("");
  const [check_status, setCheck_status] = useState(true);
  const [restype, setRestype] = useState("");
  const [distributor, setDistributor] = useState("");
  const [extrainfo, setExtrainfo] = useState("");
  const [helpline, setHelpline] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const onsubmit = (e) => {
    e.preventDefault();
    let body = {
      city: props.select_state,
      restype: restype,
      distributor: distributor,
      extrainfo: extrainfo,
      helpline: helpline,
    };
    axios.post("http://localhost:5000/", body).then((res) => {
      console.log(res.data);
    });
    console.log(body);
    setAdd_resource("1234");
  };

  const getResources = () => {
    setFound_resources("find-resources");
    props.fetchresource();
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
                    variant="danger"
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
                  {add_resource === "" ? (
                    <>
                      <center>
                        <h1>Add Resources</h1>
                      </center>
                      <Form
                        style={{ border: "1px solid grey ", padding: "25px" }}
                        onSubmit={onsubmit}
                      >
                        <Form.Group>
                          <Form.Label>Resource Type</Form.Label>
                          <Form.Control
                            as="select"
                            onChange={(e) => setRestype(e.target.value)}
                          >
                            <option value="none">Choose...</option>
                            <option value="Plasma">Plasma</option>
                            <option value="Oxygen">Oxygen</option>
                            <option value="Injection">Injection</option>
                          </Form.Control>
                        </Form.Group>
                        <Form.Group>
                          <Form.Label>Distributor</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter Distributor"
                            onChange={(e) => setDistributor(e.target.value)}
                          />
                        </Form.Group>
                        <Form.Group>
                          <Form.Label>Extra Info</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Extra Info"
                            onChange={(e) => setExtrainfo(e.target.value)}
                          />
                        </Form.Group>

                        <Form.Group>
                          <Form.Label>Helpline</Form.Label>
                          <Form.Control
                            type="number"
                            placeholder="Helpline"
                            onChange={(e) => setHelpline(e.target.value)}
                          />
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
              <Button
                onClick={(e) => {
                  setFound_resources("");
                  props.setFetch_state([]);
                }}
              >
                Go Back
              </Button>
              <h1>RESOURCES</h1>
              {props.fetch_state.length === 0 ? (
                check_status === true ? (
                  <>
                    <div className="mb-2">
                      <Button
                        variant="info"
                        size="lg"
                        style={{ fontSize: "3rem", alignItems: "center" }}
                      >
                        <Spinner animation="grow" variant="light" /> LOADING
                      </Button>
                    </div>
                    setTimeout(()
                    {(console.log("hello world"), setCheck_status(false))},
                    2000);
                  </>
                ) : (
                  <>
                    <h1>No resource found </h1>
                  </>
                )
              ) : (
                props.fetch_state.map((user) => {
                  return <Cards user={user} />;
                })
              )}
            </center>
          </>
        )}
      </div>
    </>
  );
}

export default Resources;
