import React, { useEffect, useState } from 'react';
import { Container, Alert } from 'react-bootstrap';
import axios from 'axios';
import SearchComponent from './SearchComponent.js';
import WeatherCard from './WeatherCard.js';
import ReactLoading from 'react-loading';
import isObjectEmpty from '../utilities/isObjectEmptyFn.js';
import Pagination from './Pagination.js';


function renderCardList(data, postsPerPage, totalPosts, paginate) {
    console.log("inside renderCardList");
    return <>
        <Pagination postsPerPage={postsPerPage} totalPosts={totalPosts} paginate={paginate}/>
        {data.map((data, index) => {
            return <WeatherCard key={index} data={data}/>
        })}
    </>
}

function NoLocation() {
    return <Alert variant="warning">Location not found.</Alert>
}

function Loading() {
    return <ReactLoading type={"bubbles"} color={"#3f56eb"} height={30}/>
}

const apiKey = "99932c7ad2da564b32cf4971cb90f334";

export default function Body({ cityList }) {
    const [currentLocation, setCurrentLocation] = useState({});
    const [apiData, setApiData] = useState({});
    const [search, setSearch] = useState('');
    const [filteredCityList, setFilteredCityList] = useState();
    const [cityIDString, setCityIDString] = useState("");
    const [isResponseGood, setIsResponseGood] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(3);

    /*
     ** Get Current Location ** 
     */
    useEffect(() => {
        async function getLocation() {
            setIsLoading(true);
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
            setIsLoading(true);
            let response;
            try {
                response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${currentLocation.lat}&lon=${currentLocation.long}&units=metric&appid=${apiKey}`)
                setApiData(response.data);
                setIsResponseGood(true);
                setIsLoading(false);
            } catch(error) {
                console.log("getData current location axios error: ");
                console.log(error);
                setIsResponseGood(false);
                setIsLoading(false);
            }
            return response;
        }
        if (isObjectEmpty(currentLocation) === false){
            getData();
        }
    }, [currentLocation]);

    useEffect(() => {
        if (search === "") return;
        if (search.includes(",")) { //true
            // will return single object of City,Country
            let ss = search.replace(/\s*,\s*/g, ",");
            async function getData() {
                setIsLoading(true);
                setIsResponseGood(false);
                let response;
                try {
                    response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${ss}&units=metric&appid=${apiKey}`);
                    setApiData(response.data);
                    setIsResponseGood(true);
                    setIsLoading(false);
                } catch (error) {
                    console.log("getData group axios error: ");
                    console.log(error);
                    setIsResponseGood(false);
                    setIsLoading(false);
                }
                return response;
            }
            getData();
        } else { //false
            // will return list of 20 cities that match search string
            let ss = search.trim();

            function filterCityList(cityArray, string) {
                return cityArray.filter(o => Object.keys(o).some((k) => {
                    return o[k].toString().toLowerCase().includes(string.toString().toLowerCase())
                }));
            }

            function stringifyCityIDs(cities) {
                let string = "";
                if (Array.isArray(cities)) {
                    for (let i = 0; (i < cities.length && i < 20); i++) {
                        string += (cities[i].id + ",");
                    }
                    // remove the extra < , >  at the end
                    string = string.substring(0, string.length - 1);
                } 
                return string;
            }

            const fcList = filterCityList(cityList, ss);
            setFilteredCityList(fcList);
            const fcidString = stringifyCityIDs(fcList);
            setCityIDString(fcidString);
            console.log("cityIDString: ");
            console.log(cityIDString);

            async function getData() {

                let response = null;
                if (fcidString !== ""){
                    setIsLoading(true);
                    setIsResponseGood(false);
                    try {
                        response = await axios.get(`https://api.openweathermap.org/data/2.5/group?id=${fcidString}&units=metric&appid=${apiKey}`);
                        console.log(response.data.list);
                        setIsResponseGood(true);
                        setApiData(response.data.list);
                        setIsLoading(false);
                    } catch (error) {
                        console.log("getData group axios error: ");
                        console.log(error);
                        setIsResponseGood(false);
                        setIsLoading(false);
                    }
                }else {
                    setIsResponseGood(false);
                }
                return response;
            }
            getData();
        }
    }, [search]);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    let currentPosts;
    if (Array.isArray(apiData)){
        currentPosts = apiData.slice(indexOfFirstPost, indexOfLastPost);
    }
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <Container className="v-100">
            <SearchComponent setSearch={setSearch} />
            <Container id="card-container" className="d-flex flex-column align-items-center" style={{ marginTop: 10 + 'px', marginBottom: 10 + 'px' }}>
                {isLoading ? <Loading /> :
                (isResponseGood ? 
                        (Array.isArray(apiData) ? 
                            renderCardList(currentPosts, postsPerPage, apiData.length, paginate) : 
                            <WeatherCard key={0} data={apiData}/>) : 
                    <NoLocation />)}
            </Container>
        </Container>
    )
}
