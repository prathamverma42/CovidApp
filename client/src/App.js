import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Resources from "./components/resources";
import Admin_UserPage from "./components/Admin_UserPage";
import AdminUserAdd from "./components/AdminUserAdd";
import AdminDashboard from "./components/AdminDashboard";
import UserDashboard from "./components/UserDashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import AdminResourceAdd from "./components/AdminResourceAdd";
function App() {
  const [select_state, setSelect_state] = useState("");
  const [arr, setArr] = useState([]);
  const [fetch_state, setFetch_state] = useState([]);
  const [found, setFound] = useState(true);
  // const [admin, setAdmin] = useState("");

  let abc = select_state;
  let new_state = [];

  useEffect(() => {
    new_state = arr.filter(
      (user) => user.city.toLowerCase() === select_state.toLowerCase()
    );
    if (new_state === []) {
      new_state = "hello";
    }
    console.log(new_state);
    setFetch_state(new_state);
    if (fetch_state !== []) {
      setFound(false);
    }
  }, [arr]);

  const fetchresource = async () => {
    axios.get("http://localhost:5000/").then((res) => {
      setArr(res.data);
    });
    setTimeout(function () {
      if (new_state === "hello") {
        alert("Hello");
      }
    }, 3000);
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
                // setAdmin={setAdmin}
              />
            )}
          />

          <Route
            path={"/Admin-User_page"}
            render={(props) => (
              <Admin_UserPage {...props} state={select_state} />
            )}
          />

          <Route
            path={"/AdminResourceAdd"}
            render={(props) => <AdminResourceAdd />}
          />

          <Route path={"/AdminUserAdd"} render={(props) => <AdminUserAdd />} />

          <Route
            path={"/AdminDashboard"}
            render={(props) => <AdminDashboard />}
          />

          <Route
            path={"/UserDashboard"}
            render={(props) => <UserDashboard />}
          />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}
export default App;
