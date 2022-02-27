import React, { useState } from 'react'
import { Card, Button, ListGroup } from 'react-bootstrap';
import WeatherModal from '../routes/WeatherModal.js';

export default function WeatherCard({ data }) {
  const [modalShow, setModalShow] = useState(false);

  function modalAction() {
    setModalShow(true);
  }

  return (
    <>
      <Card style={{ width: '18rem', marginBottom: "25px" }}>
        <Card.Img variant="top" src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} style={{width: "60%"}} className="mx-auto" alt={""}/>
        <Card.Body>
          <Card.Title>
           <span>{data.name}, </span>
            <span>{data.sys.country}</span>
            <img src={`https://openweathermap.org/images/flags/${(data.sys.country).toLowerCase()}.png`} width="25px" style={{marginLeft: "10px"}}/>
          </Card.Title>
          <Card.Text className="fst-italic fw-light">
          {data.weather[0].description}
          <br />
          <span id="main-temp" className="badge text-black-50 bg-light mt-2 ">{data.main.temp} <span className="temp-units">°C</span></span>
          </Card.Text>
        </Card.Body>
        <ListGroup />
        <Card.Body>
          <Button variant="outline-info" size="sm" onClick={() => modalAction()} >
            More Information
          </Button>
          <WeatherModal show={modalShow} onHide={() => setModalShow(false)} data={data} />
        </Card.Body>
      </Card>
    </>
  )
}
