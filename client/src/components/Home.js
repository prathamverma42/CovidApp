import React from "react";
import NavbarTop from "./NavbarTop";
import Main from "./Main";

function Home(props) {
  return (
    <>
      <NavbarTop />
      <Main
        select_state={props.select_state}
        setSelect_state={props.setSelect_state}
      />
    </>
  );
}

export default Home;
