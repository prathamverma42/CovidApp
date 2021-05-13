import React, { useState, useEffect } from "react";
import { Button, Container, Form, Row, Col, Card } from "react-bootstrap";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Route } from "react-router-dom";
import axios from "axios";
function Admin_UserPage(props) {
  // Hooks for the login form
  const [loginemail, setLoginemail] = useState("");
  const [loginpassword, setLoginpassword] = useState("");
  const [checklogin, setChecklogin] = useState(false);
  const [titlepage, setTitlepage] = useState("");

  //  Onlogin submit button
  const onloginsubmit = async (e) => {
    e.preventDefault();
    console.log("login submit");
    if (loginpassword === "" || loginemail === "") {
      alert("Please fill all the fields");
      return;
    }
    const user = {
      email: loginemail,
      password: loginpassword,
    };

    axios.post("http://localhost:5000/users", user).then((res) => {
      console.log(res.data);

      if (res.data.success === true) {
        setChecklogin(true);
        setTitlepage(res.data.data[0].type);
      } else {
        alert("Not a valid user");
      }
    });
  };

  useEffect(() => {
    // console.log(checklogin);
  }, [checklogin, loginpassword, loginemail]);

  return (
    <div>
      <center>
        <Route
          render={({ history }) => (
            <Button
              className="my-2"
              variant="outline-success"
              onClick={() => {
                history.replace(`/${props.state}`);
              }}
            >
              Go to Resources page
            </Button>
          )}
        />
        <div className="my-4">
          <Container>
            <Row>
              <Col sm={8}>
                <h1
                  style={{
                    fontFamily: "Alegreya SC",
                    fontWeight: "400",
                    textShadow: "2px 2px 2px ",
                    fontSize: "3.5rem",
                  }}
                >
                  Only for Admins
                </h1>

                <br />
                <Form
                  // className="col-6"
                  style={{
                    border: "1px solid grey ",
                    padding: "25px",
                    fontFamily: "'Courier New', Courier, monospace",
                    fontWeight: "bold",
                  }}
                  onSubmit={onloginsubmit}
                >
                  <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      placeholder="Enter your email"
                      onChange={(e) => setLoginemail(e.target.value)}
                      value={loginemail}
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      placeholder="Enter your Password"
                      onChange={(e) => setLoginpassword(e.target.value)}
                      value={loginpassword}
                    ></Form.Control>
                  </Form.Group>
                  <Route
                    render={({ history }) => (
                      <Button
                        type="submit"
                        className="col-3"
                        variant="outline-info"
                        onClick={() => {
                          checklogin === true ? (
                            titlepage === "Admin" ? (
                              history.replace("/AdminDashboard")
                            ) : (
                              history.replace("/UserDashboard")
                            )
                          ) : (
                            <p></p>
                          );
                        }}
                      >
                        Login
                      </Button>
                    )}
                  />
                </Form>
              </Col>
              <Col>
                <h1
                  style={{
                    fontFamily: "Alegreya SC",
                    fontWeight: "400",
                    textShadow: "2px 2px 2px ",
                    fontSize: "3rem",
                  }}
                >
                  Become a Contributor
                </h1>

                <br />
                <Card
                  border="primary"
                  // className="my-5"
                  style={{ width: "18rem" }}
                >
                  <Card.Header>Contact Info</Card.Header>
                  <Card.Body>
                    {/* <Card.Title>Primary Card Title</Card.Title> */}
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Route
                      render={({ history }) => (
                        <Button
                          type="submit"
                          className="col-3"
                          variant="outline-info"
                          onClick={() => {
                            history.replace("/UserRegistration");
                          }}
                        >
                          Login
                        </Button>
                      )}
                    />
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </center>
    </div>
  );
}

export default Admin_UserPage;
