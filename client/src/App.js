import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Resources from "./components/resources";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";

function App() {
  const [select_state, setSelect_state] = useState("");
  const [arr, setArr] = useState([]);
  const [fetch_state, setFetch_state] = useState([]);
  const [found, setFound] = useState(true);

  let abc = select_state;
  let new_state = [];

  useEffect(() => {
    new_state = arr.filter(
      (user) => user.city.toLowerCase() === select_state.toLowerCase()
    );
    setFetch_state(new_state);
    if (fetch_state !== []) {
      setFound(false);
    }
  }, [arr]);

  const fetchresource = async () => {
    axios.get("http://localhost:5000/").then((res) => {
      setArr(res.data);
    });
  };

  return (
    <>
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
                found={found}
                setFound={setFound}
                setFetch_state={setFetch_state}
                fetch_state={fetch_state}
                select_state={select_state}
                fetchresource={fetchresource}
                setSelect_state={setSelect_state}
              />
            )}
          />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}
export default App;
