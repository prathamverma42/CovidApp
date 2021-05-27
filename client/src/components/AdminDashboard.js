import React from "react";
import { Button, Container, Row, Col, Card } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function AdminDashboard() {
  return (
    <div>
      <center>
        <h1
          style={{
            fontFamily: "Alegreya SC",
            fontWeight: "400",
            textShadow: "2px 2px 2px ",
            fontSize: "3.5rem",
          }}
          className="mt-5"
        >
          Welcome to the Admin Page !!!
        </h1>
        <Container className="mt-5">
          <Row>
            <Col>
              <Card
                className="bg-warning"
                style={{
                  border: "1px solid grey ",
                  padding: "25px",
                  fontFamily: "'Courier New', Courier, monospace",
                  fontWeight: "bold",
                }}
              >
                <Card.Header as="h4" style={{ fontWeight: "800" }}>
                  Add Users
                </Card.Header>
                <Card.Body>
                  <Card.Text>
                    With supporting text below as a natural lead-in to
                    additional content.
                  </Card.Text>
                  <Route
                    render={({ history }) => (
                      <Button
                        className="col-3 mt-2"
                        variant="outline-dark"
                        onClick={() => {
                          history.push("/AdminUserAdd");
                        }}
                      >
                        ADD USER
                      </Button>
                    )}
                  />
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card
                className="bg-info"
                style={{
                  border: "1px solid grey ",
                  padding: "25px",
                  fontFamily: "'Courier New', Courier, monospace",
                  fontWeight: "bold",
                }}
              >
                <Card.Header as="h4" style={{ fontWeight: "800" }}>
                  Add Resources
                </Card.Header>
                <Card.Body>
                  <Card.Text>
                    With supporting text below as a natural lead-in to
                    additional content.
                  </Card.Text>
                  <Route
                    render={({ history }) => (
                      <Button
                        className="mt-2"
                        variant="outline-dark"
                        onClick={() => {
                          history.push("/AdminResourceAdd");
                        }}
                      >
                        ADD RESOURCE
                      </Button>
                    )}
                  />
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="mt-5">
            
            <Col>
              <Card
                className="bg-success col-6"
                style={{
                  border: "1px solid grey ",
                  padding: "25px",
                  fontFamily: "'Courier New', Courier, monospace",
                  fontWeight: "bold",
                }}
              >
                <Card.Header as="h4" style={{ fontWeight: "800" }}>
                  New Users Registered
                </Card.Header>
                <Card.Body>
                  <Card.Text>
                    With supporting text below as a natural lead-in to
                    additional content.
                  </Card.Text>
                  <Route
                    render={({ history }) => (
                      <Button
                        className="col-4 mt-2"
                        variant="outline-dark"
                        onClick={() => {
                          history.push("/AdminUserRegistration");
                        }}
                      >
                        ADD NEW USER
                      </Button>
                    )}
                  />
                </Card.Body>
              </Card>
            </Col> 
          </Row>
          <Route
            render={({ history }) => (
              <Button
                variant="outline-danger"
                className="m-5 col-3"
                size="lg"
                onClick={() => {
                  history.push("/Admin-User_page");
                }}
              >
                Logout
              </Button>
            )}
          />
        </Container>
      </center>
    </div>
  );
}

export default AdminDashboard;
