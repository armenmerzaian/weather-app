import React from 'react';
import {Container} from 'react-bootstrap';
import SearchComponent from './SearchComponent';
import WeatherCard from './WeatherCard';

export default function Body() {
  return (
    <Container className="v-100">
        <SearchComponent />
        <Container className="d-flex flex-column justify-content-center" style={{marginTop: 10 + 'px', marginBottom: 10 + 'px'}}>
            <WeatherCard />
            <WeatherCard />
            <WeatherCard />
            <WeatherCard />
        </Container>
    </Container>
  )
}
