import React from 'react'
import './Homepage.css'
import Slider from '../../Components/Slider/Slider'


const Homepage=({apiKey, baseUrl})=> {
  return <Slider apiKey={apiKey} baseUrl={baseUrl}/>;
  
};

export default Homepage