import axios from "axios";
import React, { useState } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";

function AdminResoureAdd() {
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
    (e).preventDefault();
    if (
      state !== "" &&
      restype !== "" &&
      extrainfo !== "" &&
      helpline !== "" &&
      distributor !== "")
      {
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
        
      }
      else
      {
        alert("please add the sufficient fields");
      }
  };
  const onSubmit1=(e)=>{
    (e).preventDefault();
    if(name!=="" && password!=="" && email!==""&&type!=="")
    {
      const user={
        name:name,
        password:password,
        email:email,
        type:type
      };
      console.log(user);
      axios.post('http://localhost:5000/users',user).then(res=>{
        console.log(res.data);
      })
    }
  };
  return (
    <div>
      {/* <Container>
        <Row>
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
              <Button variant="primary" type="submit" >
                 {`Add ${type}`}
              </Button>

            </Form>
          </Col>
        </Row>
      </Container> */}
    </div>
  );
}

export default AdminResoureAdd;
