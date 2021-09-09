import React, { useState, useEffect } from "react";
import { Container, Form, Button, FormControl, Col } from "react-bootstrap";
import { Route } from "react-router-dom";
import axios from "axios";
import GoogleLogin from "react-google-login";
import validator from "validator";

function UserRegistration(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contact, setContact] = useState("");
  const [name, setName] = useState("");
  const [validpassword, setValidpassword] = useState(false);
  const [err, setErr] = useState("");
  const onRegisterSubmit = (e) => {
    e.preventDefault();
    if (!validpassword) {
      alert("Not a valid Password");
      return;
    }
    if (err !== "") {
      alert("Please select a different id");
      return;
    }

    if (email !== "" && password !== "" && contact !== "") {
      const body = {
        name,
        email,
        password,
        contact,
      };
      console.log(body);

      axios.post("http://localhost:5000/newUsers/add", body).then((res) => {
        console.log(res.data);
        if (res.data.success === true) {
          alert(
            "You have successfully registered. Please wait until the Admin of the Website will reach you through mail or Contact details."
          );
          setEmail("");
          setPassword("");
          setContact("");
          setName("");
          document.getElementById("password").style.border =
            "1px solid #D3D9DE";
        }
      });
    } else {
      alert("Please fill all the fields");
    }
  };

  const responseGoogle = (response) => {
    setEmail(response.profileObj.email);
    setName(response.profileObj.name);
  };

  const checknewpwd = (value) => {
    if (
      validator.isStrongPassword(value, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      document.getElementById("password").style.border = "2px solid green";
      setValidpassword(true);
    } else {
      setValidpassword(false);
      document.getElementById("password").style.border = "2px solid red";
    }
  };

  const checkemailunique = (val) => {
    // console.log("gsdg");
    // alert("dg");
    axios
      .post("http://localhost:5000/users/checkunique", { email: val })
      .then((res) => {
        console.log(res.data);
        if (res.data.success === true) {
          setErr("Please Select a different id");
        } else {
          setErr("");
        }
      });
  };
  useEffect(() => {
    checkemailunique(email);
  }, [email, err]);
  var str = "The should Contain be of atleast 8 characters: safs";

  return (
    <div>
      <Container>
        <center>
          <Route
            render={({ history }) => (
              <Button
                className="my-2 mt-5 "
                variant="outline-success"
                onClick={() => {
                  history.push("/Admin-User_page");
                }}
              >
                Go Back
              </Button>
            )}
          />
          <h1
            className="mt-2"
            style={{
              fontFamily: "Alegreya SC",
              fontWeight: "400",
              textShadow: "2px 2px 2px ",
              fontSize: "3.5rem",
            }}
          >
            User Registration
          </h1>
          <Col sm={8}>
            <Form
              className="mb-5 mt-4"
              style={{
                border: "1px solid grey ",
                padding: "25px",
                fontFamily: "'Courier New', Courier, monospace",
                fontWeight: "bold",
              }}
              onSubmit={onRegisterSubmit}
            >
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  placeholder="Enter your name"
                  disabled="true"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                ></Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  placeholder="Enter your email"
                  disabled="true"
                  onChange={(e) => {
                    checkemailunique(e.target.value);
                    setEmail(e.target.value);
                  }}
                  value={email}
                ></Form.Control>
              </Form.Group>
              <span>{err}</span>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  id="password"
                  style={{ outline: "none" }}
                  type="password"
                  placeholder="Enter your Password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                    checknewpwd(e.target.value);
                  }}
                  value={password}
                ></Form.Control>
                <span
                  style={{
                    fontFamily: "serif",
                    fontWeight: "200",
                  }}
                >
                  {str}
                </span>
              </Form.Group>
              <Form.Group>
                <Form.Label>Contact</Form.Label>
                <Form.Control
                  placeholder="Enter your Contact details"
                  required
                  type="number"
                  onChange={(e) => setContact(e.target.value)}
                  value={contact}
                  maxLength={10}
                />
              </Form.Group>
              {/* <center> */}
              <p>
                <GoogleLogin
                  clientId="1015940765280-3jmvucq2gf67o59eigo1148s5n5r70hm.apps.googleusercontent.com"
                  buttonText="Sign in with Google"
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                  cookiePolicy={"single_host_origin"}
                />
              </p>
              <Route
                render={({ history }) => (
                  <Button
                    type="submit"
                    // className="col-3"
                    variant="outline-info"
                    onClick={() => {}}
                  >
                    Register
                  </Button>
                )}
              />
            </Form>
          </Col>
        </center>
      </Container>
    </div>
  );
}

export default UserRegistration;
