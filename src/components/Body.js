import React, { useEffect, useState } from 'react';
import { Container, Alert } from 'react-bootstrap';
import axios from 'axios';
import SearchComponent from './SearchComponent';
import WeatherCard from './WeatherCard';
import isObjectEmpty from '../utilities/isObjectEmptyFn';

function renderCardList(data) {
    return <>
        {data.map((e) => {
                return <WeatherCard data={e} />
        })}
    </>
}

function NoLocation() {
    return <Alert variant="warning">Location not found.</Alert>
}

const apiKey = "60009dc6137d4250e46c3dd134116707";

export default function Body({cityList}) {
    const [currentLocation, setCurrentLocation] = useState({});
    const [apiData, setApiData] = useState({});
    const [search, setSearch] = useState('');
    const [filteredCityList, setFilteredCityList] = useState([]);
    const [cityIDString, setCityIDString] = useState("");
    
    
    useEffect(() => {
        async function getLocation() {
            let response = await navigator.geolocation.getCurrentPosition((position) => {
                setCurrentLocation({
                    lat: `${position.coords.latitude}`,
                    long: `${position.coords.longitude}`
                })
            }, (error) => {
                console.log("Error Retrieving GeoLocation: ");
                console.log(error.message);
            });
            return response;
        }
        getLocation();
    }, []);
    
    useEffect(() => {
        async function getData() {
            let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${currentLocation.lat}&lon=${currentLocation.long}&units=metric&appid=${apiKey}`)
            setApiData(response.data);
            return response;
        }
        if (currentLocation !== {}){
            getData();
        }
    },[currentLocation]);

    useEffect(() => {
        if (search === "") return;
        if (search.includes(",")) { //true
            // will return single object of City,Country
            let ss = search.replace(/\s*,\s*/g, ",");
            async function getData() {
                let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${ss}&units=metric&appid=${apiKey}`);
                setApiData(response.data);
                return response;
            }
            getData();
        } else { //false
            // will return list of 20 cities that match search string
            let ss = search.trim();

            function filterCityList(cityArray, string){
                return cityArray.filter(o => Object.keys(o).some((k) => {
                    return o[k].toString().toLowerCase().includes(string.toString().toLowerCase())
                }));
            }

            function stringifyCityIDs(cities) {
                if (cities.length === 0) return cities;
                let string = "";
                for (let i = 0; (i < cities.length && i < 20); i++) {
                    string += (cities[i].id + ",");
                }
                // remove the extra < , >  at the end
                string = string.substring(0, string.length - 1);
                return string;
            }
            
            async function getData() {
                let response = await axios.get(`https://api.openweathermap.org/data/2.5/group?id=${cityIDString}&units=metric&appid=${apiKey}`);
                console.log(response.data.list);
                setApiData(response.data.list);
                return response;
            }

            setFilteredCityList(filterCityList(cityList, ss).sort());
            setCityIDString(stringifyCityIDs(filteredCityList));
            getData();
        }
    }, [search, cityIDString]);

    return (
        <Container className="v-100">
            <SearchComponent setSearch={setSearch} />
            <Container id="card-container" className="d-flex flex-column justify-content-center" style={{ marginTop: 10 + 'px', marginBottom: 10 + 'px' }}>
                {isObjectEmpty(apiData) ? <NoLocation id="no-location" /> : (Array.isArray(apiData) ? renderCardList(apiData) : <WeatherCard data={apiData} />)}
            </Container>
        </Container>
    )
}
