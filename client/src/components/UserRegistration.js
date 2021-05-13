import React from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import { Route } from "react-router-dom";

function UserRegistration() {
    return (
        <div>
            <Container>
            <Form
                  // className="col-6"
                  style={{
                    border: "1px solid grey ",
                    padding: "25px",
                    fontFamily: "'Courier New', Courier, monospace",
                    fontWeight: "bold",
                  }}
                //   onSubmit={onloginsubmit}
                >
                  <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      placeholder="Enter your email"
                    //   onChange={(e) => setLoginemail(e.target.value)}
                    //   value={loginemail}
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      placeholder="Enter your Password"
                    //   onChange={(e) => setLoginpassword(e.target.value)}
                    //   value={loginpassword}
                    ></Form.Control>
                  </Form.Group>
                  <Route
                    render={({ history }) => (
                      <Button
                        type="submit"
                        className="col-3"
                        variant="outline-info"
                        onClick={() => {
                           
                        }}
                      >
                        Login
                      </Button>
                    )}
                  />
                </Form>
            </Container>
        </div>
    )
}

export default UserRegistration
