import React from "react";
import NavbarTop from "./NavbarTop";
import Main from "./Main";
import { Route } from "react-router-dom";
import { Button, Alert, Toast, Overlay, Tooltip } from "react-bootstrap";
function Home(props) {
  return (
    <>
    {/* <h1>HOME</h1> */}
    {/* <Route
        render={({ history }) => (
          <Button
            variant="danger"
            onClick={() => {
              history.push("/front");
            }}
          >
            HOME
          </Button>
        )}
        /> */}
      <NavbarTop />
      <Main select_state={props.select_state} setSelect_state={props.setSelect_state}/>
    </>
  );
}

export default Home;
