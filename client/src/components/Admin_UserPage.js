import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Route } from "react-router-dom";
import Resources from "./resources.js";
function Admin_UserPage(props) {
    const onsubmit=()=> {
        
    }
  return (
    <div>
      <center>
        <Route
          render={({ history }) => (
            <Button
              className="my-2"
              variant="secondary"
              onClick={() => {
                history.replace(`/${props.state}`);
              }}
            >
              Go to Resources page
            </Button>
          )}
        />
        <div className="my-5">
          <h1>Only for Admin</h1>
          <br />
          {/* <br /> */}

          <Container>
            <Form
            className="col-6"
              style={{ border: "1px solid grey ", padding: "25px" }}
              onSubmit={onsubmit}
            >
              <Form.Group>
                <Form.Label>User Id</Form.Label>
                <Form.Control placeholder="Enter your user-id"></Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control placeholder="Enter your Password"></Form.Control>
              </Form.Group>
              
              
              <Route
                  render={({ history }) => (
                    <Button
                      variant="primary"
                      onClick={() => {
                        history.replace(`/AdminResourcePage`);
                      }}
                   
                    >
                     Login
                    </Button>
                  )}
                />
              {/* <Button variant="primary" type="submit">
                Login
              </Button> */}
            </Form>
          </Container>
        </div>
      </center>
    </div>
  );
}

export default Admin_UserPage;
