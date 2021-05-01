import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Resources from "./components/resources";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [select_state, setSelect_state] = useState("");
  return (
    <>
    {/* <Router>
    <Switch>
      <Route exact path="/" component={<Home/>}/>
      <Route path="/front" component={<Resources/>}/>
    </Switch>
    <Footer/>
    </Router> */}
      {select_state === "" ? (
        <>
          {" "}
         <Home select_state={select_state} setSelect_state={setSelect_state}/>
        </>
      ) : (
        <Resources select_state={select_state} setSelect_state={setSelect_state} />
      )}
      <Footer />
    </>
  );
}
export default App;