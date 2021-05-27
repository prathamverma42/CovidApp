import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { Route } from "react-router-dom";
import axios from "axios";

function UserRegistration(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contact, setContact] = useState("");
const [name, setName] = useState('');
  const onRegisterSubmit = (e) => {
    e.preventDefault();
    if (email !== "" && password !== "" && contact !== "") {
      const body = {
        name,
        email,
        password,
        contact,
      };
      console.log(body);

      axios.post("http://localhost:5000/newUsers/add", body).then((res) => {
        console.log(res.data);
        if (res.data.success === true) {
          alert("You have successfully registered");
          setEmail("");
          setPassword("");
          setContact("");
          setName("");
        }
      });
    } else {
      alert("Please fill all the fields");
    }
  };
  return (
    <div>
      <Container>
        <center>
          <Route
            render={({ history }) => (
              <Button
                className="my-2 mt-5 col-2"
                variant="outline-success"
                onClick={() => {
                  history.push("/Admin-User_page");
                }}
              >
                Go Back
              </Button>
            )}
          />
          <h1
            className="mt-2"
            style={{
              fontFamily: "Alegreya SC",
              fontWeight: "400",
              textShadow: "2px 2px 2px ",
              fontSize: "3.5rem",
            }}
          >
            User Registration
          </h1>
        </center>
        <center>
          <Form
            className="col-8 mb-5 mt-4"
            style={{
              border: "1px solid grey ",
              padding: "25px",
              fontFamily: "'Courier New', Courier, monospace",
              fontWeight: "bold",
            }}
            onSubmit={onRegisterSubmit}
          >
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                placeholder="Enter your name"
                
                onChange={(e) => setName(e.target.value)}
                value={name}
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                placeholder="Enter your email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                placeholder="Enter your Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Contact</Form.Label>
              <Form.Control
                placeholder="Enter your Contact details"
                type="number"
                onChange={(e) => setContact(e.target.value)}
                value={contact}
              ></Form.Control>
            </Form.Group>
            <Route
              render={({ history }) => (
                <Button
                  type="submit"
                  className="col-3"
                  variant="outline-info"
                  onClick={() => {}}
                >
                  Register
                </Button>
              )}
            />
          </Form>
        </center>
      </Container>
    </div>
  );
}

export default UserRegistration;
