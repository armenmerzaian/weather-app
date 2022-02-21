import {useEffect, useState} from 'react';
import axios from 'axios';

const apiKey = "60009dc6137d4250e46c3dd134116707";

export default function useAPI(lat, long) {
    const [data, setData] = useState({});
    console.log("useAPI launched");

    useEffect(() => {
        axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}`)
        .then(res => {
            console.log("data retrieved");
            setData(res.data);
        }).catch((err) => {
            console.log(err);
        })
    }, [])
    return data;
}