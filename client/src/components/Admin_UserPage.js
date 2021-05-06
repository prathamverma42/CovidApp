import React, { useState, useEffect } from "react";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import { Route } from "react-router-dom";
import Resources from "./resources.js";
import axios from "axios";
function Admin_UserPage(props) {
  
  // Hooks for the login form 
  const [loginemail, setLoginemail] = useState("");
  const [loginpassword, setLoginpassword] = useState("");
  const [checklogin, setChecklogin] = useState(false);
  const [titlepage, setTitlepage] = useState('');

  //  Onlogin submit button
  const onloginsubmit = async (e) => {
    e.preventDefault();
    if(loginpassword==="" || loginemail==="")
    {
      alert("please fill all the fields");
      return;
    }
     const user ={
      email: loginemail,
      password: loginpassword,
    };
    // console.log(user);
    // console.log("hello");
    axios.post("http://localhost:5000/users/", user).then((res) => {
      console.log(res.data);
      if(res.data.success===true){
        setChecklogin(true);
        console.log(res.data.data[0].type);
        setTitlepage(res.data.data[0].type);
      }
      else{
        alert("Not a valid user");
      }
    });
  };

  useEffect(() => {
    // console.log(checklogin, loginpassword, loginemail);
  }, [checklogin, loginpassword, loginemail]);

  //

  const [state, setState] = useState("");
  const [restype, setRestype] = useState("");
  const [extrainfo, setExtrainfo] = useState("");
  const [helpline, setHelpline] = useState("");
  const [distributor, setDistributor] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [type, setType] = useState("");

  const onsubmit = (e) => {
    e.preventDefault();
    if (
      state !== "" &&
      restype !== "" &&
      extrainfo !== "" &&
      helpline !== "" &&
      distributor !== ""
    ) {
      const resource = {
        city: state,
        restype: restype,
        extrainfo: extrainfo,
        helpline: helpline,
        distributor: distributor,
      };
      console.log(resource);
      axios.post("http://localhost:5000/", resource).then((res) => {
        console.log(res.data);
      });
    } else {
      alert("please add the sufficient fields");
    }
  };
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
      axios.post("http://localhost:5000/users", user).then((res) => {
        console.log(res.data);
      });
    }
  };

  //

  return (
    <div>
      {checklogin === false ? (
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

                <Button variant="primary" type="submit">
                  {/* {`Add ${type}`} */}
                  Login
                </Button>
              </Form>
            </Container>
          </div>
        </center>
      ) : (
        <div>
          <Button onClick={()=>{
            
    setLoginpassword("");
    setLoginemail("");
            setChecklogin(false);}}>Logout</Button>
          <div className="my-3"><center><h1>{`Only for ${titlepage}`}</h1></center></div>
          <Container>
            <Row>
            {/* <center> */}
              <Col sm={6}>
                <Form
                  style={{ border: "1px solid grey ", padding: "25px" }}
                  onSubmit={onsubmit}
                >
                  <Form.Group>
                    <Form.Label>Resource Type</Form.Label>
                    <Form.Control
                      as="select"
                      onChange={(e) => setState(e.target.value)}
                    >
                      <option value="">Choose...</option>
                      <option value="Punjab">Punjab</option>
                      <option value="Haryana">haryana</option>
                      <option value="Maharashtra">Maharashtra</option>
                      <option value="Delhi">Delhi</option>
                      <option value="HimachalPradesh">HimachalPradesh</option>
                      <option value="Gujarat">Gujarat</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Resource Type</Form.Label>
                    <Form.Control
                      as="select"
                      onChange={(e) => setRestype(e.target.value)}
                    >
                      <option value="">Choose...</option>
                      <option value="Plasma">Plasma</option>
                      <option value="Oxygen">Oxygen</option>
                      <option value="Injection">Injection</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Distributor</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Distributor"
                      onChange={(e) => setDistributor(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Extra Info</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Extra Info"
                      onChange={(e) => setExtrainfo(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Helpline</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Helpline"
                      onChange={(e) => setHelpline(e.target.value)}
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Add Resource
                  </Button>
                </Form>
              </Col>
              
              {titlepage==="Admin"?(<Col sm={6}>
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
              </Col>):(<div><p></p></div>)

              }
              
            </Row>
          </Container>
          {titlepage==="Admin"?<div><h1>Admin Table</h1></div>:<div><p></p></div>
            
          }
        </div>
      )}
    </div>
  );
}

export default Admin_UserPage;
