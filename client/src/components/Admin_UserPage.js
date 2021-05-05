import React,{useState} from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Route } from "react-router-dom";
import Resources from "./resources.js";
import axios from 'axios';
function Admin_UserPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onsubmit=(e)=> {
    (e).preventDefault();
    const user={
      email:email,
      password:password
    };
    console.log(user);
        axios.get('http://localhost:5000/users',user).then(res=>{
          console.log(res.data);
        })
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
                <Form.Label>Email</Form.Label>
                <Form.Control placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)}></Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control placeholder="Enter your Password" onChange={(e)=>setPassword(e.target.value)}></Form.Control>
              </Form.Group>
              
              
              <Route
                  render={({ history }) => (
                    <Button
                      variant="primary"
                      onClick={(e) => {
                        onsubmit(e);
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
