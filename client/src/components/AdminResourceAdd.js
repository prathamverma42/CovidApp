import React, { useState, useEffect } from "react";
import { Button, Container, Form, Row, Col, Table } from "react-bootstrap";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Route } from "react-router-dom";
import resource from "../assets/post1.svg";
import axios from "axios";
// import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";

function AdminResourceAdd() {
  const [state, setState] = useState("");
  const [restype, setRestype] = useState("");
  const [extrainfo, setExtrainfo] = useState("");
  const [helpline, setHelpline] = useState("");
  const [distributor, setDistributor] = useState("");
  const [select_state, setSelect_state] = useState("");
  const [data, setData] = useState([]);

  const onsubmit = (e) => {
    console.log(data);
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
      axios
        .post("http://localhost:5000/resources/add", resource)
        .then((res) => {
          setRestype("");
          setExtrainfo("");
          setHelpline("");
          setDistributor("");
          setState("");
          alert("Successfully added");
        });
    } else {
      alert("please add the sufficient fields");
    }

    axios
      .post("http://localhost:5000/resources/", { city: select_state })
      .then((res) => {
        // console.log(res.data);
        if (res.data === "No resources") {
          setData([]);
        } else {
          setData(res.data);
        }
      });
  };
  const deleteResource = (data) => {
    axios
      .delete(`http://localhost:5000/resources/${data._id}`)
      .then((res) => console.log(res.data));

    axios
      .post("http://localhost:5000/resources/", { city: select_state })
      .then((res) => {
        // console.log(res.data);
        if (res.data === "No resources") {
          setData([]);
        } else {
          setData(res.data);
        }
      });
  };
  const fetchCityResources = () => {
    axios
      .post("http://localhost:5000/resources/", { city: select_state })
      .then((res) => {
        // console.log(res.data);
        if (res.data === "No resources") {
          setData([]);
        } else {
          setData(res.data);
        }
      });
  };
  useEffect(() => {}, [data]);
  return (
    <div>
      <Route
        render={({ history }) => (
          <center>
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
          </center>
        )}
      />
      <center>
        <h1
          style={{
            fontFamily: "Alegreya SC",
            fontWeight: "400",
            textShadow: "2px 2px 2px ",
            fontSize: "3.5rem",
          }}
          className="mt-4"
        >
          Add Resources{" "}
        </h1>
      </center>

      <Container>
        <Row>
          <Col sm={6}>
            <Form
              style={{
                border: "1px solid grey ",
                padding: "25px",
                fontFamily: "'Courier New', Courier, monospace",
                fontWeight: "bold",
              }}
              onSubmit={onsubmit}
            >
              <Form.Group>
                <Form.Label>Select State </Form.Label>
                <Form.Control
                  as="select"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                >
                  <option value="">Choose...</option>
                  <option value="AndhraPradesh">Andhra Pradesh</option>
                  <option value="ArunachalPradesh">Arunachal Pradesh</option>
                  <option value="Assam">Assam</option>
                  <option value="Bihar">Bihar</option>
                  <option value="Chattisgarh">Chattisgarh</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Goa">Goa</option>
                  <option value="Gujarat">Gujarat</option>
                  <option value="Haryana">Haryana</option>
                  <option value="HimachalPradesh">Himachal Pradesh</option>
                  <option value="Jharkhand">Jharkhand</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Kerela">Kerela</option>
                  <option value="MadhyaPradesh">Madhya Pradesh</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Manipur">Manipur</option>
                  <option value="Meghalaya">Meghalaya</option>
                  <option value="Mizoram">Mizoram</option>
                  <option value="Nagaland">Nagaland</option>
                  <option value="Odisha">Odisha</option>
                  <option value="Punjab">Punjab</option>
                  <option value="Rajasthan">Rajasthan</option>
                  <option value="Sikkim">Sikkim</option>
                  <option value="TamilNadu">Tamil Nadu</option>
                  <option value="Telangana">Telangana</option>
                  <option value="Tripura">Tripura</option>
                  <option value="UttarPradesh">Uttar Pradesh</option>
                  <option value="Uttarakhand">Uttarakhand</option>
                  <option value="WestBengal">West Bengal</option>
                </Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label>Resource Type</Form.Label>
                <Form.Control
                  as="select"
                  value={restype}
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
                  value={distributor}
                  placeholder="Enter Distributor"
                  onChange={(e) => setDistributor(e.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Extra Info</Form.Label>
                <Form.Control
                  type="text"
                  value={extrainfo}
                  placeholder="Extra Info"
                  onChange={(e) => setExtrainfo(e.target.value)}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Helpline</Form.Label>
                <Form.Control
                  type="number"
                  value={helpline}
                  placeholder="Helpline"
                  onChange={(e) => setHelpline(e.target.value)}
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Add Resource
              </Button>
            </Form>
          </Col>
          <Col sm={6} className="mt-5">
            <center>
              <img src={resource} style={{ width: "90%" }} />
            </center>
          </Col>
        </Row>
      </Container>
      <Container>
        <h1
          className="mt-4"
          style={{
            fontFamily: "Alegreya SC",
            fontWeight: "400",
            textShadow: "2px 2px 2px ",
            fontSize: "3.5rem",
          }}
        >
          Resources Table
        </h1>
        <Row className="mt-4">
          <Col sm={8}>
            <select
              className="category"
              onChange={(e) => {
                setSelect_state(e.target.value);
              }}
              onClick={fetchCityResources}
            >
              <option value="">Choose...</option>
              <option value="AndhraPradesh">Andhra Pradesh</option>
              <option value="ArunachalPradesh">Arunachal Pradesh</option>
              <option value="Assam">Assam</option>
              <option value="Bihar">Bihar</option>
              <option value="Chattisgarh">Chattisgarh</option>
              <option value="Delhi">Delhi</option>
              <option value="Goa">Goa</option>
              <option value="Gujarat">Gujarat</option>
              <option value="Haryana">Haryana</option>
              <option value="HimachalPradesh">Himachal Pradesh</option>
              <option value="Jharkhand">Jharkhand</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Kerela">Kerela</option>
              <option value="MadhyaPradesh">Madhya Pradesh</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Manipur">Manipur</option>
              <option value="Meghalaya">Meghalaya</option>
              <option value="Mizoram">Mizoram</option>
              <option value="Nagaland">Nagaland</option>
              <option value="Odisha">Odisha</option>
              <option value="Punjab">Punjab</option>
              <option value="Rajasthan">Rajasthan</option>
              <option value="Sikkim">Sikkim</option>
              <option value="TamilNadu">Tamil Nadu</option>
              <option value="Telangana">Telangana</option>
              <option value="Tripura">Tripura</option>
              <option value="UttarPradesh">Uttar Pradesh</option>
              <option value="Uttarakhand">Uttarakhand</option>
              <option value="WestBengal">West Bengal</option>
            </select>
          </Col>
          <Col sm={4}>
            {/* <Button onClick={fetchCityResources} variant="secondary">
              Fetch Resources
            </Button> */}
          </Col>
        </Row>
        <Table
          striped
          // bordered
          hover
          className="mt-3"
          style={{
            maxWidth: "100%",
            border: "1px solid grey ",
            padding: "25px",
            fontSize: "1rem",
            fontFamily: "'Courier New', Courier, monospace",
            fontWeight: "bold",
          }}
        >
          <thead className="bg-dark text-white">
            <tr>
              <th>Resource Type</th>
              <th>Distributor</th>
              <th>ExtraInfo</th>
              <th>helpline</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {data.length !== 0 ? (
              data.map((resource) => {
                return (
                  <tr>
                    <td>{resource.restype}</td>
                    <td>{resource.distributor}</td>
                    <td>{resource.extrainfo}</td>
                    <td>{resource.helpline}</td>
                    <td>
                      <Button onClick={() => deleteResource(resource)}>
                        Delete
                      </Button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <>
                <h2 className="mt-3 text-danger">No Resources Found</h2>
              </>
            )}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default AdminResourceAdd;
