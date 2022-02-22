import React, { useEffect, useState } from 'react';
import { Container, Alert } from 'react-bootstrap';
import SearchComponent from './SearchComponent';
import useAPI from './useAPI';
import WeatherCard from './WeatherCard';

function NoLocation() {
    return <Alert variant="primary">Location not found.</Alert>
}

export default function Body(props) {
    const location = props.location;
    const apiData = useAPI(location.lat, location.long);
    const [search, setSearch] = useState('');
    

    function renderCard(data) {
        return (<WeatherCard data={data} />);
    };

    return (
        <Container className="v-100">
            <SearchComponent setSearch={setSearch} />
            <Container className="d-flex flex-column justify-content-center" style={{ marginTop: 10 + 'px', marginBottom: 10 + 'px' }}>
                {apiData ? renderCard(apiData) : <NoLocation /> }
            </Container>
        </Container>
    )
}
