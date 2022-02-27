import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import moment from 'moment';

export default function WeatherModal(props) {
  
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" style={{ marginLeft: "20px" }}>
          <strong>
            <span style={{ marginRight: "9px" }}>{props.data.name},</span>
            <span>{props.data.sys.country}</span>
          </strong>
          <img src={`https://openweathermap.org/images/flags/${(props.data.sys.country).toLowerCase()}.png`} width="25px" style={{ marginLeft: "10px" }} alt="" />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="modal-map" >
          <img src={`https://tile.openweathermap.org/map/clouds_new/10/4/4.png?appid=99932c7ad2da564b32cf4971cb90f334`} />
        </div>
        <div className="flex-grow-1 text-center">
          <ul className="list-group">
            <li className="list-group-item">
              <strong className="me-2"><span id="weather-main">{props.data.weather[0].main}</span>: </strong>
              <i><span id="weather-desc">{props.data.weather[0].description}</span></i>
            </li>
            <li className="list-group-item">
              <img src={`https://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`} alt="" className="img-fluid rounded-start" style={{ width: "100px" }} id="card-img" />
              <br />
              <span id="main-temp" className="badge bg-primary fs-5 mt-3 mb-3">{props.data.main.temp} <span className="temp-units">°C</span></span>
              < br />
              <span id="main-feels-like" className="me-2">feels like</span>{props.data.main.feels_like} <span className="temp-units">°C</span>
              <br />
              <span id="main-temp-min" className="me-2"> Min: </span> {props.data.main.temp_min}<span className="temp-units">°C</span>
              <br />
              <span id="main-temp-max" className="me-2"> Max: </span> {props.data.main.temp_max}<span className="temp-units">°C</span>
            </li>
            <li className="list-group-item">
              <span id="main-humidity"> Humidity: {props.data.main.humidity}</span><span className="me-3">%</span>
              <span id="main-pressure"> Pressure: {props.data.main.pressure}</span><span className="me-3">hPa</span>
              <span id="wind-speed"> Wind: {props.data.wind.speed}</span><span className="me-3">m/s</span>
            </li>
            <li className="list-group-item">
              <span id="sys-sunrise" className="me-3"> Sunrise: {moment.unix(props.data.sys.sunrise).format('LT')}</span>
              <span id="sys-sunset"> Sunset: {moment.unix(props.data.sys.sunset).format('LT')}</span>
              <br />
              <div className="mt-1">
                <span id="coord-lat">[{props.data.coord.lat}, </span>
                <span id="coord-long">{props.data.coord.lon}]</span>
              </div>
            </li>
          </ul>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <span className="me-auto">Last Updated: {moment.unix(props.data.dt).format('LLL')}</span>
        <Button onClick={props.onHide} variant="secondary">Close</Button>
      </Modal.Footer>
    </Modal>
  ) 

}
