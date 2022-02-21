import React from 'react'
import {Container} from 'react-bootstrap';

function NotFound() {
  return (
    <Container className="d-flex justify-content-center">
    <div>
      <strong>404 </strong> 
      Page Not Found
    </div>
    </Container>
  )
}

export default NotFound;