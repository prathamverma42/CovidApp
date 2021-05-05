import React from "react";
import { BrowserRouter as Route } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
function AdminModal(props) {

  return (
    <div>
      <>
        <Modal show={props.show} onHide={props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={props.handleClose}>
              Close
            </Button>

            <Button
              variant="primary"
              onClick={() => {
                props.handleClose();
                props.setAdmin("Admin-User_Page");
              }}
            >
              Login
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  );
}

export default AdminModal;
