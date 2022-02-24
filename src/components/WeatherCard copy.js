import React, {useState} from 'react'
import { Card, Button } from 'react-bootstrap';
import moment from 'moment';
import WeatherModal from './WeatherModal.js';

export default function WeatherCard({data}) {
  const [modalShow, setModalShow] = useState(false);
  
  return (
    <div>
      <Card style={{ margin: '10px', padding: '10px',backgroundColor: 'rgba(0,0,0,.03)' }}>
        <Card.Header style={{ backgroundColor: 'rgba(0,0,0,0)' }}>
          <Card.Title>
            <span>{data.name}, </span>
            <span>{data.sys.country}</span>
            <img src={`https://openweathermap.org/images/flags/${(data.sys.country).toLowerCase()}.png`} width="25px" style={{marginLeft: "10px"}}/>
          </Card.Title>
        </Card.Header>
        <Card.Body>
          <div className="container d-flex flex-row">
            <div className="me-4">
            <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="" className="img-fluid rounded-start" style={{width: "100px"}} id="card-img" />
            </div>
            <div className="flex-grow-1">
              <ul className="list-group">
                <li className="list-group-item">
                  <strong><span id="weather-main">{data.weather[0].main}</span>: </strong>
                  <i><span id="weather-desc">{data.weather[0].description}</span></i>
                </li>
                <li className="list-group-item">
                  <span id="main-temp" className="badge bg-primary">{data.main.temp} <span className="temp-units">°C</span></span>
                  <span id="main-feels-like"> Feels like: </span>{data.main.feels_like} <span className="temp-units">°C</span>
                  <br />
                  <span id="main-temp-min"> Min: </span> {data.main.temp_min}<span className="temp-units">°C</span>
                  <span id="main-temp-max"> Max: </span> {data.main.temp_max}<span className="temp-units">°C</span>
                </li>
                <li className="list-group-item">
                  <span id="main-humidity"> Humidity: {data.main.humidity}</span><span>%</span>
                  <span id="main-pressure"> Pressure: {data.main.pressure}</span><span>hPa</span>
                  <span id="wind-speed"> Wind: {data.wind.speed}</span><span id="wind-speed-unit">m/s</span>
                </li>
                <li className="list-group-item">
                  <span id="sys-sunrise"> Sunrise: {moment.unix(data.sys.sunrise).format('LT')}</span>
                  <span id="sys-sunset"> Sunset: {moment.unix(data.sys.sunset).format('LT')}</span>
                  <span id="coord-lat"> [{data.coord.lat}, </span>
                  <span id="coord-long">{data.coord.lon}]</span>
                </li>
              </ul>
            </div>
          </div>
          <Button variant="info" onClick={() => setModalShow(true)}>
            More Information
          </Button>
          <WeatherModal show={modalShow} onHide={() => setModalShow(false)} data={data}/>
        </Card.Body>
      </Card>
    </div>
  )
}
