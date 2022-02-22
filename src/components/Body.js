import React, {useEffect, useState} from 'react';
import {Container} from 'react-bootstrap';
import SearchComponent from './SearchComponent';
import useAPI from './useAPI';
import WeatherCard from './WeatherCard';

export default function Body(props) {
    const [data, setData] = useState({});
    const location = props.location;

    const apiData = useAPI(location.lat, location.long);
    useEffect(() => {
        setData(apiData);
    },[apiData]);
    
  return (
    <Container className="v-100">
        <SearchComponent />
        <Container className="d-flex flex-column justify-content-center" style={{marginTop: 10 + 'px', marginBottom: 10 + 'px'}}>
            <WeatherCard data={data}/>
        </Container>
    </Container>
  )
}
