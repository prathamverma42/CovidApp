// import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { Button, Container, Form, Row, Col } from "react-bootstrap";
import React,{useState} from 'react'
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import axios from 'axios';
function AdminResourceAdd2() {
      
  const [state, setState] = useState("");
  const [restype, setRestype] = useState("");
  const [extrainfo, setExtrainfo] = useState("");
  const [helpline, setHelpline] = useState("");
  const [distributor, setDistributor] = useState("");
  
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
      axios
        .post("http://localhost:5000/resources/add", resource)
        .then((res) => {
          console.log(res.data);
        });
    } else {
      alert("please add the sufficient fields");
    }
  };
    return (
        <div>
            <Route
                      render={({ history }) => (
                        <Button
                          onClick={() => {
                            history.replace("/AdminDashboard");
                          }}
                        >
                         Go TO Admin dashBoard
                        </Button>
                      )}
                    />
            <h1>Add resources</h1>
            <Container>
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
              </Row>
              </Container>
        </div>
    )
}

export default AdminResourceAdd2
