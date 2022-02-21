import React, {useState, useEffect} from 'react';
import {Stack} from 'react-bootstrap';
import Header from '../components/Header.js';
import Body from '../components/Body.js';
import Footer from '../components/Footer.js'

function Home() {
  const [currentLocation, setCurrentLocation] = useState({});

  function success(pos) {
    setCurrentLocation({
      lat: `${pos.coords.latitude}`,
      long: `${pos.coords.longitude}`
    });  
  }
  //get location after first render
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  }, []);

  return (
    <Stack gap={5}>
      <Header />
      <Body location={currentLocation}/>
      <Footer />
    </Stack>
  )
}

export default Home
