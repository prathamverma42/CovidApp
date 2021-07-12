import React from "react";
import "./Cards.css";
import { Card } from "react-bootstrap";
import { Call, Info, EmojiPeople } from "@material-ui/icons";
function Cards(props) {
  let bg_color = "";
  if (props.user.restype === "Plasma") {
    bg_color = "warning";
  } else if (props.user.restype === "Oxygen") {
    bg_color = "primary";
  } else if (props.user.restype === "Injection") {
    bg_color = "danger";
  } else {
    bg_color = "dark";
  }
  return (
    <div>
      <Card
        border={`${bg_color}`}
        style={{
          fontSize: "1.5rem",
        }}
        className="m-3 cards"
      >
        <Card.Header className={`bg-${bg_color} text-white`}>
          {props.user.restype}
        </Card.Header>
        <Card.Body style={{ backgroundColor: "#ECF0F1" }}>
          <Card.Text>
            <p>
              Distributor
              <EmojiPeople fontSize="large" color="secondary" />
              {/* <img
                src="https://www.flaticon.com/svg/vstatic/svg/3349/3349798.svg?token=exp=1620831335~hmac=02d9d30898c5af5618cf240e43d9abea"
                style={{ height: "25px", color: "red" }}
              /> */}
              {" : "} {props.user.distributor}
            </p>
            <p>
              Extra Info
              <Info fontSize="large" color="primary" />
              {/* <img
                src="https://www.flaticon.com/svg/vstatic/svg/3388/3388833.svg?token=exp=1620831442~hmac=47ab463cbe7194868dea730cc5a90a4a"
                style={{ height: "25px" }}
              /> */}
              {" : "} {props.user.extrainfo}
            </p>
            <p>
              Helpline <Call fontSize="large" />
              {/* <img
                src="https://www.flaticon.com/svg/vstatic/svg/2904/2904346.svg?token=exp=1620830992~hmac=1efb2de5d1ffdc75b60e4a2451c209ce"
                style={{ height: "25px" }}
              /> */}
              {" : "} {props.user.helpline}
            </p>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Cards;
