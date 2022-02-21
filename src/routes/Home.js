import React, {useState} from 'react';
import {Stack} from 'react-bootstrap';
import Header from '../components/Header.js';
import Body from '../components/Body.js';
import Footer from '../components/Footer.js'

function Home() {
  const [currentLocation, setCurrentLocation] = useState({});


  return (
    <Stack gap={5}>
      <Header />
      <Body />
      <Footer />
    </Stack>
  )
}

export default Home
