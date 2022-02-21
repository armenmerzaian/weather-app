import React, {useState} from 'react'
import { Card } from 'react-bootstrap';
import moment from 'moment';


export default function WeatherCard(props) {
  const [name, setName] = useState(props.data.name);
  const [country, setCountry] = useState(props.data.sys.country);
  const [weatherMain, setWeatherMain] = useState(props.data.weather[0].main);
  const [weatherDesc, setWeatherDesc] = useState(props.data.weather[0].description);
  const [temp, setTemp] = useState(props.data.main.temp);
  const [feelsLike, setFeelsLike] = useState(props.data.main.feels_like);
  const [tempMin, setTempMin] = useState(props.data.main.temp_min);
  const [tempMax, setTempMax] = useState(props.data.main.temp_max);
  const [humidity, setHumidity] = useState(props.data.main.humidity);
  const [pressure, setPressure] = useState(props.data.main.pressure);
  const [windSpeed, setWindSpeed] = useState(props.data.wind.speed);
  const [sunrise, setSunrise] = useState(props.data.sys.sunrise);
  const [sunset, setSunset] = useState(props.data.sys.sunset);
  const [lat, setLat] = useState(props.data.coord.lat);
  const [long, setLong] = useState(props.data.coord.lon);

  return (
    <div>
      <Card style={{ margin: '10px', padding: '10px',backgroundColor: 'rgba(0,0,0,.03)' }}>
        <Card.Header style={{ backgroundColor: 'rgba(0,0,0,0)' }}>
          <Card.Title>
            <span>{name},</span>
            <span>{country}</span>
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
                  <strong><span id="weather-main">{weatherMain}</span>:</strong>
                  <i><span id="weather-desc">{weatherDesc}</span></i>
                </li>
                <li className="list-group-item">
                  <span id="main-temp" className="badge bg-primary">{temp} <span className="temp-units">&#8451</span></span>
                  <span id="main-feels-like"> Feels like: </span>{feelsLike} <span className="temp-units">&#8451</span>
                  <br />
                  <span id="main-temp-min"> Minimum: </span> {tempMin}<span className="temp-units">&#8451</span>
                  <span id="main-temp-max"> Maximum: </span> {tempMax}<span className="temp-units">&#8451</span>
                </li>
                <li className="list-group-item">
                  <span id="main-humidity"> Humidity: {humidity}</span><span>%</span>
                  <span id="main-pressure"> Pressure: {pressure}</span><span>hPa</span>
                  <span id="wind-speed"> Wind: {windSpeed}</span><span id="wind-speed-unit">m/s</span>
                </li>
                <li className="list-group-item">
                  <span id="sys-sunrise"> Sunrise: {moment.unix(sunrise).format('LT')}</span>
                  <span id="sys-sunset"> Sunset: {moment.unix(sunset).format('LT')}</span>
                  <br />
                  <span id="coord-lat"> [{lat}, </span>
                  <span id="coord-long">{long}]</span>
                </li>
              </ul>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}
