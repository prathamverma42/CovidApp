import React,{useState} from 'react'
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from 'axios';
function AdminDashboard() {


//   //add user
//   const [name, setName] = useState("");
//   const [password, setPassword] = useState("");
//   const [email, setEmail] = useState("");
//   const [type, setType] = useState("");

//   const onsubmit = () => {
//     e.preventDefault();
//     if (
//       state !== "" &&
//       restype !== "" &&
//       extrainfo !== "" &&
//       helpline !== "" &&
//       distributor !== ""
//     ) {
//       const resource = {
//         city: state,
//         restype: restype,
//         extrainfo: extrainfo,
//         helpline: helpline,
//         distributor: distributor,
//       };
//       console.log(resource);
//       axios
//         .post("http://localhost:5000/resources/add", resource)
//         .then((res) => {
//           console.log(res.data);
//         });
//     } else {
//       alert("please add the sufficient fields");
//     }
//   };
//   const onSubmit1 = (e) => {
//     e.preventDefault();
//     if (name !== "" && password !== "" && email !== "" && type !== "") {
//       const user = {
//         name: name,
//         password: password,
//         email: email,
//         type: type,
//       };
//       console.log(user);
//       axios.post("http://localhost:5000/users/add", user).then((res) => {
//         console.log(res.data);
//       });
//     }
//   };



    return (
        <div>
            <Route
                      render={({ history }) => (
                        <Button
                          onClick={() => {
                            history.push("/Admin-User_page");
                          }}
                        >Logout
                        </Button>
                      )}
                    />

            <h1>hello Admin</h1>
            <Route
                      render={({ history }) => (
                        <Button
                          onClick={() => {
                            history.push("/AdminResourceAdd");
                          }}
                        >
                         ADD RESOURCE
                        </Button>
                      )}
                    />

            <Route
                      render={({ history }) => (
                        <Button
                          onClick={() => {
                            history.push("/AdminUserAdd");
                          }}
                        >
                          Add User
                        </Button>
                      )}
                    />
            {/* <Container>
            <Row>
              

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
                    <Button variant="primary" type="submit">
                      {`Add ${type}`}
                    </Button>
                  </Form>
                </Col>
              ) : (
                <div>
                  <p></p>
                </div>
              )}
            </Row>
          </Container> */}
        </div>
    )
}

export default AdminDashboard
