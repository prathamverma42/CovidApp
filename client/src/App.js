import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Resources from "./components/resources";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [select_state, setSelect_state] = useState("");
  useEffect(() => {
    console.log(abc);
  }, [select_state]);
  let abc = select_state;
  let arr = [
    {
      restype: "plasma",
      distributor: "abc indaia",
      extrainfo: "nothing",
      helpline: 12345,
    },
    {
      restype: "plasma",
      distributor: "abc indaia",
      extrainfo: "nothing",
      helpline: 12345,
    },
    {
      restype: "plasma",
      distributor: "abc indaia",
      extrainfo: "nothing",
      helpline: 12345,
    },
  ];
  const fetchresource = () => {
    console.log("find  resouerces corrsponding to ", select_state);
  };
  return (
    <>
      {/* <h1>HELLO APP</h1> */}
      {/* <Home/> */}
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <Home
                {...props}
                select_state={select_state}
                setSelect_state={setSelect_state}
              />
            )}
          />
          <Route
            path={`/${abc}`}
            render={(props) => (
              <Resources
                {...props}
                arr={arr}
                select_state={select_state}
                fetchresource={fetchresource}
                setSelect_state={setSelect_state}
              />
            )}
          />
        </Switch>
        <Footer />
      </Router>
      {/* {select_state === "" ? (
        <>
          {" "}
         <Home select_state={select_state} setSelect_state={setSelect_state}/>
        </>
      ) : (
        <Resources select_state={select_state} setSelect_state={setSelect_state} />
      )}
      <Footer /> */}
    </>
  );
}
export default App;
