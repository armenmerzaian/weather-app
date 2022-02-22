import {useEffect, useState} from 'react';
import axios from 'axios';

const apiKey = "60009dc6137d4250e46c3dd134116707";

export default function useAPI() {
    const [data, setData] = useState({});

    useEffect(() => {
        if (arguments.length === 1) {
            if (typeof arguments[0] == 'string'){
                let searchString = arguments[0];
                    /*
                axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${searchString}&units=metric&appid=${apiKey}`)
                .then((res) => {
                    let apiData = res.data;
                    setData(apiData);
                })
                .catch((err) => {
                    alert(err);
                }); */ 
            } else {
                let byCityIdList = arguments[0];
                /*
                axios.get(`https://api.openweathermap.org/data/2.5/group?id=${byCityIdList}&units=metric&appid=${apiKey}`)
                .then((res) => {
                    let apiData = res.data;
                    setData(apiData);
                })
                .catch((err) => {
                    alert(err);
                });
                */

                
            }
        } else if (arguments.length === 2) {
            let lat = arguments[0];
            let long = arguments[1];

            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${apiKey}`)
                .then(res => {
                    let apiData = res.data;
                    setData(apiData);
                }).catch((err) => {
                    alert(err);
                })
        }
    }, []);
    
    return data;
}