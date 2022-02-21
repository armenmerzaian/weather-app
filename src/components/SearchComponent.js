import React from 'react';
import {Form, FormGroup, Button} from 'react-bootstrap';

export default function SearchComponent() {
  
    return (
    <Form className="container">
        <FormGroup className="d-flex justify-content-between">
            <Form.Control className="me-2"type="text" placeholder="Enter City..."/>
            <Button variant="primary" type="submit">Search</Button>
        </FormGroup>
    </Form>
  )
}
