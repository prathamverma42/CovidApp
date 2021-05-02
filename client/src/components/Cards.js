import React from "react";
import { Card } from "react-bootstrap";
function Cards(props) {
  return (
    <div>
      <Card
        style={{
          width: "80%",
          color: "white",
          backgroundColor: "#18BC9C",
          fontSize: "1.5rem",
        }}
        className="mt-5"
      >
        <Card.Header>{props.user.restype}</Card.Header>
        <Card.Body>
          <Card.Text>
            <p>Distributor: {props.user.distributor}</p>
            <p>Extra Info: {props.user.extrainfo}</p>
            <p>Helpline: {props.user.helpline}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Cards;
