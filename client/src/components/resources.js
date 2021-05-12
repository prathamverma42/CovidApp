import React, { useState, useEffect } from "react";
import Cards from "./Cards";
import {
  Jumbotron,
  Container,
  Button,
  Row,
  Form,
  Col,
  Spinner,
} from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
// import AdminModal from "./AdminModal.js";

function Resources(props) {
  let mystyle = {
    "margin-bottom": "2%",
  };

  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  // const [restype, setRestype] = useState("");
  // const [distributor, setDistributor] = useState("");
  // const [extrainfo, setExtrainfo] = useState("");
  // const [helpline, setHelpline] = useState("");

  const [found_resources, setFound_resources] = useState("");
  const [check_status, setCheck_status] = useState(1);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // const onsubmit = (e) => {
  //   e.preventDefault();
  //   let body = {
  //     city: props.select_state,
  //     restype: restype,
  //     distributor: distributor,
  //     extrainfo: extrainfo,
  //     helpline: helpline,
  //   };
  //   axios.post("http://localhost:5000/", body).then((res) => {
  //     console.log(res.data);
  //   });
  //   console.log(body);
  // };
  const [cityResources, setCityResources] = useState([]);
  const getResources = () => {
    setFound_resources("find-resources");
    const body = {
      city: props.select_state,
    };
    // console.log()
    axios.post("http://localhost:5000/resources", body).then((res) => {
      // console.log(res.data);
      if(res.data!=="No resources"){
        setCityResources(res.data);
      }
      else{
        setCheck_status(0);
      }
    });
    // console.log(cityResources);
    // props.fetchresource();
  };
  // useEffect(() => {
  //   console.log(cityResources);
  // }, [cityResources]);
  return (
    <>
      <div style={mystyle} autofocus>
        <Jumbotron fluid>
          <Container>
            <center>
              <h1>COVID-19 Resources for {props.select_state}</h1>
              <p>
                The website is constatly being updated with the latest
                resources, but most of them are exhaustive. If the website does
                not show up with any data or the links provided do not work, do
                not panic and come back a couple of minutes later.
              </p>
            </center>
          </Container>
        </Jumbotron>

        {found_resources === "" ? (
          <>
            <center>
              <Route
                render={({ history }) => (
                  <Button
                    variant="danger"
                    onClick={() => {
                      history.replace("/");
                    }}
                  >
                    Go To Home
                  </Button>
                )}
              />
            </center>

            <Container>
              <Row className="my-5 ">
                <Col sm={6} className="mt-3">
                  {
                    <Route
                      render={({ history }) => (
                        <Button
                          onClick={() => {
                            history.replace("/Admin-User_page");
                          }}
                        >
                          Add Resources
                        </Button>
                      )}
                    />
                  }
                </Col>
                <Col sm={6} className="mt-3">
                  <center>
                    <Button onClick={getResources}>Find Resources</Button>
                  </center>
                </Col>
              </Row>
            </Container>
          </>
        ) : (
          <>
            {/* {
            cityResources.length!==0? 
              
            

             cityResources.map((user) => {
              return <Cards user={user} />;
            })
          
            :
            <p></p>
          } */}

            <center>
              <Button
                onClick={(e) => {
                  setFound_resources("");
                  props.setFetch_state([]);
                }}
              >
                Go Back
              </Button>
              <h1>RESOURCES</h1>
              {cityResources.length === 0 ? (
                check_status === 1 ? (
                  <>
                    <div className="mb-2">
                      <Button
                        variant="info"
                        size="lg"
                        style={{ fontSize: "3rem", alignItems: "center" }}
                      >
                        <Spinner animation="grow" variant="light" /> LOADING
                      </Button>
                    </div>
                  </>
                ) : (
                  <>
                    <h1>Hello world</h1>
                  </>
                )
               ): (
                cityResources.map((user) => {
                  return <Cards user={user} />;
                })
              )}
            </center>
          </>
        )}
      </div>
    </>
  );
}

export default Resources;
