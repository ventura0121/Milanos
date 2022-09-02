import "./Form.css"
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Forms() {
  return (
    <div style={{ display: 'block', 
                  width: 700, 
                  padding: 30 }}>
      <Form className="form">
      <Form.Group>
          <Form.Label>Name:</Form.Label>
          <Form.Control type="text" placeholder="Enter your full name" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email Address:</Form.Label>
          <Form.Control type="email" 
                        placeholder="Enter your email address" />
        </Form.Group>
        <Form.Group class="input-group-lg">
          <Form.Label>Inquiry:</Form.Label>
          <Form.Control class="form-control input-lg" type="text" placeholder="Enter your inquiry" />
        </Form.Group>
        <Button variant="primary" type="submit">
           Click here to submit form
        </Button>
      </Form>
    </div>
  );
}