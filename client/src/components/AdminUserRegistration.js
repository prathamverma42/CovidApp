import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Route } from "react-router-dom";
import { Button, Container, Form, Row, Col, Table } from "react-bootstrap";
import axios from "axios";
import user from "../assets/user1.svg";

function AdminUserRegistration() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [type, setType] = useState("");

  const [user_data, setUser_data] = useState([]);

  // const onSubmit1 = (e) => {
  //   e.preventDefault();
  //   if (name !== "" && password !== "" && email !== "" && type !== "") {
  //     const user = {
  //       name: name,
  //       password: password,
  //       email: email,
  //       type: type,
  //     };
  //     setType("");
  //     setEmail("");
  //     setName("");
  //     setPassword("");
  //     // console.log(user);
  //     axios.post("http://localhost:5000/users/add", user).then((res) => {
  //       // console.log(res.data);
  //       if (res.data.success === "true") {
  //         alert("User Successfully added");
  //       } else {
  //         alert("Something error at the backend");
  //       }
  //     });
  //   } else {
  //     alert("please fill all the fields");
  //     return;
  //   }
  // };
  const addNewUser = (id) => {
    console.log(id);
    axios.post(`http://localhost:5000/users/addRegisteredUser/${id}`).then((res) => {
      console.log(res.data);
    });
  };
  const delNewUser = (id) => {
    // console.log("hello");
    // console.log(id);
    axios.delete(`http://localhost:5000/newUsers/${id}`).then((res) => {
      console.log(res.data);
    });
  };

  useEffect(() => {
    axios.get("http://localhost:5000/newUsers").then((res) => {
      // console.log('resdata',res.data.data);
      setUser_data(res.data.data);
      // console.log('userDaTA',user_data);
    });
  }, [user_data]);


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
        {/* <h1
          style={{
            fontFamily: "Alegreya SC",
            fontWeight: "400",
            textShadow: "2px 2px 2px ",
            fontSize: "3.5rem",
          }}
          className="mt-3 mb-3"
        >
          Add User
        </h1> */}
      </center>

      <Container>
        <Row>
          {/* {" "}
          <Col sm={6}> 
          </Col>
          <Col sm={6}>
            <div>
              <img src={user} style={{ height: "25rem" }} />
            </div>
          </Col> */}
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
          All New Users
        </h1>
        <Table
          striped
          bordered
          hover
          className="mb-5"
          style={{
            border: "1px solid grey ",
            padding: "25px",
            fontFamily: "'Courier New', Courier, monospace",
            fontWeight: "bold",
          }}
        >
          <thead className="bg-dark text-white ">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Contact</th>
              <th>Add</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {user_data.map((resource) => {
              return (
                <tr>
                  <td>{resource.name}</td>
                  <td>{resource.email}</td>
                  <td>{resource.contact}</td>
                  <td>
                    <Button
                      onClick={() => addNewUser(resource._id)}
                      variant="outline-primary"
                    >
                      Add
                    </Button>
                  </td>
                  <td>
                    <Button
                    onClick={() => delNewUser(resource._id)} 
                      variant="outline-danger"
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

export default AdminUserRegistration;
