import React, { useState } from 'react';
import { Button, Container, Form, Row, Col, Card } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
function AdminDashboard() {
  return (
    <div>
      <center>
        <h1 className='mt-5'>Welcome to the Admin Page !!!</h1>

       
        <Container className='mt-5'>
          <Row>
            <Col>
              <Card className="bg-info">
                <Card.Header as="h5">Add Users</Card.Header>
                <Card.Body>
                  <Card.Text>
                    With supporting text below as a natural lead-in to
                    additional content.
                  </Card.Text>
                  <Route
                    render={({ history }) => (
                      <Button
                      className="col-3"
                      variant="outline-dark"
                        onClick={() => {
                          history.push('/AdminUserAdd');
                        }}
                      >
                        ADD USER
                      </Button>
                    )}
                  />
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{backgroundColor:'#18BC9C'}}>
                <Card.Header as="h5">Add Resources</Card.Header>
                <Card.Body>
                  <Card.Text>
                    With supporting text below as a natural lead-in to
                    additional content.
                  </Card.Text>
                  <Route
                    render={({ history }) => (
                      <Button
                      variant="outline-dark"
                        onClick={() => {
                          history.push('/AdminResourceAdd');
                        }}
                      >
                        ADD RESOURCE
                      </Button>
                    )}
                  />
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Route
            render={({ history }) => (
              <Button

              variant="outline-danger"
                className="m-5 col-3"
                size="lg"
                onClick={() => {
                  history.push('/Admin-User_page');
                }}
              >
                Logout
              </Button>
            )}
          />
        </Container>
      </center>
      
    </div>
  );
}

export default AdminDashboard;
{
  /* <Card>
  <Card.Header as="h5">Add Resources</Card.Header>
  <Card.Body>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <Route
      render={({ history }) => (
        <Button
          onClick={() => {
            history.push('/AdminResourceAdd');
          }}
        >
          ADD RESOURCE
        </Button>
      )}
    />
  </Card.Body>
</Card> */
}
