import React, {useState, useEffect} from 'react';
import {Stack} from 'react-bootstrap';
import Header from '../components/Header.js';
import Body from '../components/Body.js';
import Footer from '../components/Footer.js'
import axios from 'axios';

function Home() {
  const [cityList, setCityList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("./city.list.json");
      setCityList(response.data);
      return response;
    }

    if (cityList.length === 0){
      fetchData();
    }

  }, [cityList]);

   return (
    <Stack gap={5}>
      <Header />
      {cityList.length > 0 &&
        <Body cityList={cityList}/>
      }
      <Footer />
    </Stack>
  )
}

export default Home
