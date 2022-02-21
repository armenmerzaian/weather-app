import React from 'react'
import { Card } from 'react-bootstrap';


export default function WeatherCard() {
  return (
    <div>
      <Card style={{ margin: '10px', padding: '10px',backgroundColor: 'rgba(0,0,0,.03)' }}>
        <Card.Header style={{ backgroundColor: 'rgba(0,0,0,0)' }}>
          <Card.Title>
            <span>Country Name</span>
            <span>Country-Code</span>
            <span>Image</span>
          </Card.Title>
        </Card.Header>
        <Card.Body>
          <div className="container d-flex flex-row">
            <div className="me-4">
              <img src="https://via.placeholder.com/150" style={{ width: 'auto' }} />
            </div>
            <div className="flex-grow-1">
              <ul className="list-group">
                <li className="list-group-item">
                  <strong><span id="weather-main">Main</span>:</strong>
                  <i><span id="weather-desc">Description</span></i>
                </li>
                <li className="list-group-item">
                  <span id="main-temp" className="badge bg-primary">Main Temp <span className="temp-units">&#8451</span></span>
                  <span id="main-feels-like"> Feels like: </span>Main Feels Like <span className="temp-units">&#8451</span>
                  <br />
                  <span id="main-temp-min"> Minimum: </span> Main MinTemp<span className="temp-units">&#8451</span>
                  <span id="main-temp-max"> Maximum: </span> Main MaxTemp<span className="temp-units">&#8451</span>
                </li>
                <li className="list-group-item">
                  <span id="main-humidity"> Humidity: Main Humidity</span><span>%</span>
                  <span id="main-pressure"> Pressure: Main Pressure</span><span>hPa</span>
                  <span id="wind-speed"> Wind: Wind Speed</span><span id="wind-speed-unit">m/s</span>
                </li>
                <li className="list-group-item">
                  <span id="sys-sunrise"> Sunrise: System Sunrise [MomentJS]</span>
                  <span id="sys-sunset"> Sunset: System Sunset [MomentJS]</span>
                  <br />
                  <span id="coord-lat"> [LAT, </span>
                  <span id="coord-long">LON]</span>
                </li>
              </ul>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}
