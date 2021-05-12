import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {Route} from 'react-router-dom';
import { Button, Container, Form, Row, Col, Table } from "react-bootstrap";
import axios from "axios";


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
      console.log(user);
      axios.post("http://localhost:5000/users/add", user).then((res) => {
        console.log(res.data);
      });
    }
  };

  useEffect(() => {
    axios.get("http://localhost:5000/users").then((res) => {
      setUser_data(res.data);
    });
  }, [user_data]);

  const deleteUser = (id) => {
    axios.delete(`http://localhost:5000/users/${id}`).then((res) => {
    });
  };

  return (
    <div>
      <center>
        <Route
          render={({ history }) => (
            <Button
              variant="secondary"
              className="mt-3"
              onClick={() => {
                history.replace("/AdminDashboard");
              }}
            >
              Go to Admin Page !!!
            </Button>
          )}
        />
        <h1 className="mt-3 mb-5">Add User</h1>
      </center>

      <Container>
        <Row>
          {" "}
          <Col sm={6}>
            <Form
              style={{ border: "1px solid grey ", padding: "25px" }}
              onSubmit={onSubmit1}
            >
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Name"
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label> Password </Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Type</Form.Label>
                <Form.Control
                  as="select"
                  onChange={(e) => setType(e.target.value)}
                >
                  <option value="">Choose...</option>
                  <option value="User">User</option>
                  <option value="Admin">Admin</option>
                </Form.Control>
              </Form.Group>
              <Button className="col-3" variant="primary" type="submit">
                {`Add ${type}`}
              </Button>
            </Form>
          </Col>
        </Row>

        <h1 className="mt-4">All Users</h1>
        <Table striped bordered hover>
          <thead className="bg-dark text-white">
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
                    <Button
                      onClick={() => deleteUser(resource._id)}
                      variant="outline-info"
                    >
                      Delete
                    </Button>
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
