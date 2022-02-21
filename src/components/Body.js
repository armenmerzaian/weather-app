import React, {useEffect, useState} from 'react';
import {Container} from 'react-bootstrap';
import SearchComponent from './SearchComponent';
import useAPI from './useAPI';
import WeatherCard from './WeatherCard';

export default function Body(props) {
    const [currentLocation] = useState(props.location);
    const [data, setData] = useState({});

    const apiData = useAPI(currentLocation.lat, currentLocation.long);
    console.log("after getting apiData in body component");
    useEffect(() => {
        setData(apiData);
    }, []);
    
  return (
    <Container className="v-100">
        <SearchComponent />
        <Container className="d-flex flex-column justify-content-center" style={{marginTop: 10 + 'px', marginBottom: 10 + 'px'}}>
            <WeatherCard data={data}/>
            <WeatherCard />
            <WeatherCard />
            <WeatherCard />
        </Container>
    </Container>
  )
}
