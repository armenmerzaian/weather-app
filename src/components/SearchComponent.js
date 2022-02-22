import React, {useState} from 'react';
import {Form, FormGroup, Button} from 'react-bootstrap';
import {Route} from 'react-router';

export default function SearchComponent({setSearch}) {
    const [searchString, setSearchString] = useState('');

    function handleChange(e){
        setSearchString(e.target.value);
    }
    function handleSubmit(e){
        e.preventDefault();
        setSearch(searchString);
    }

    return (
    <Form className="container" onSubmit={handleSubmit}>
        <FormGroup className="d-flex justify-content-between">
            <Form.Control className="me-2"type="text" placeholder="Enter City..." value={searchString} onChange={handleChange}/>
            <Button variant="primary" type="submit">Search</Button>
        </FormGroup>
    </Form>
  )
}
