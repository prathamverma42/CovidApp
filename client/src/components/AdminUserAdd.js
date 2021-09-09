import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Route } from "react-router-dom";
import { Button, Container, Form, Row, Col, Table } from "react-bootstrap";
import axios from "axios";
import user from "../assets/user1.svg";

import GoogleLogin from "react-google-login";
function AdminUserAdd() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [type, setType] = useState("");

  const [user_data, setUser_data] = useState([]);

  const onSubmit1 = (e) => {
    e.preventDefault();
    if (name !== "" && password !== "" && email !== "" && type !== "") {
      const user = {
        name: name,
        password: password,
        email: email,
        type: type,
      };
      setType("");
      setEmail("");
      setName("");
      setPassword("");
      // console.log(user);
      axios.post("http://localhost:5000/users/add", user).then((res) => {
        // console.log(res.data);
        if (res.data.success === "true") {
          alert("User Successfully added");
        } else {
          alert("Something error at the backend");
        }
      });
    } else {
      alert("please fill all the fields");
      return;
    }
  };

  useEffect(() => {
    axios.get("http://localhost:5000/users").then((res) => {
      setUser_data(res.data);
    });
  }, [user_data]);

  const deleteUser = (id) => {
    axios.delete(`http://localhost:5000/users/${id}`).then((res) => {});
  };

  const responseGoogle = (response) => {
    setEmail(response.profileObj.email);
    setName(response.profileObj.name);
  };

  return (
    <div>
      <center>
        <Route
          render={({ history }) => (
            <Button
              size="lg"
              variant="outline-info"
              className="mt-3"
              onClick={() => {
                history.push("/AdminDashboard");
              }}
            >
              Go to Admin Page !!!
            </Button>
          )}
        />
        <h1
          style={{
            fontFamily: "Alegreya SC",
            fontWeight: "400",
            textShadow: "2px 2px 2px ",
            fontSize: "3.5rem",
          }}
          className="mt-3 mb-3"
        >
          Add User
        </h1>
      </center>

      <Container>
        <Row>
          {" "}
          <Col sm={6}>
            <Form
              style={{
                border: "1px solid grey ",
                padding: "25px",
                border: "1px solid grey ",
                padding: "25px",
                fontFamily: "'Courier New', Courier, monospace",
                fontWeight: "bold",
              }}
              onSubmit={onSubmit1}
            >
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Name"
                  disabled="true"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label> Password </Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  disabled="true"
                  type="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Type</Form.Label>
                <Form.Control
                  as="select"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                >
                  <option value="">Choose...</option>
                  <option value="User">User</option>
                  <option value="Admin">Admin</option>
                </Form.Control>
              </Form.Group>
              <p>
                <GoogleLogin
                  clientId="1015940765280-3jmvucq2gf67o59eigo1148s5n5r70hm.apps.googleusercontent.com"
                  buttonText="Sign in with Google"
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                  cookiePolicy={"single_host_origin"}
                />
              </p>
              <Button className="col-3" variant="primary" type="submit">
                {`Add ${type}`}
              </Button>
            </Form>
          </Col>
          <Col sm={6} className="mt-5">
            <div>
              <img src={user} style={{ height: "20rem" }} />
            </div>
          </Col>
        </Row>

        <h1
          style={{
            fontFamily: "Alegreya SC",
            fontWeight: "400",
            textShadow: "2px 2px 2px ",
            fontSize: "3.5rem",
          }}
          className="mt-4 mb-4"
        >
          All Users
        </h1>
        <Table
          striped
          bordered
          hover
          className="mb-5"
          style={{
            border: "1px solid grey ",
            // padding: "25px",
            fontFamily: "'Courier New', Courier, monospace",
            fontWeight: "bold",
          }}
        >
          <thead className="bg-dark text-white ">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Type/Role</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {user_data.map((resource) => {
              return (
                <tr>
                  <td>{resource.name}</td>
                  <td>{resource.email}</td>
                  <td>{resource.type}</td>
                  <td>
                    {resource.type === "User" ? (
                      <Button
                        size="sm"
                        onClick={() => deleteUser(resource._id)}
                        variant="outline-info"
                      >
                        Delete
                      </Button>
                    ) : (
                      <div></div>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default AdminUserAdd;
