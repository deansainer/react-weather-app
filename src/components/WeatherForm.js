import React from "react";
import { useState } from 'react';
import axios from 'axios';

const WeatherForm = ({setData}) => {
  
    const [city, setCity] = useState(null)
    
    async function getWeatherById(e) {
      try {
        const response = await axios.get(`https://ipinfo.io/213.134.188.143?token=${process.env.REACT_APP_IP_TOKEN}`)
        setCity(response.data.city)
        getWeatherData(e)
      } catch (error) {
        console.error(error);
      }
    }

    function handleCityName(event){
        setCity(event.target.value)
    }
  
    async function getWeatherData(e) {
        e.preventDefault()
        if (city){
        try{
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_TOKEN}&units=metric`);
        const weatherData = response.data
        const cityObject = {
            'city': weatherData.name,
            'country': weatherData.sys.country,
            'description': weatherData.weather[0].description,
            'temp': Math.round(weatherData.main.temp),
            'wind_speed': weatherData.wind.speed,
            'icon': weatherData.weather[0].icon,
            'feels_like': weatherData.main.feels_like,
            'temp_min': weatherData.main.temp_min,
            'temp_max': weatherData.main.temp_max,

        };
        setData(cityObject)
    } catch(error) {
      alert('Invalid city name. Please try again.');
    }
    }}

  return (
    <div className="form_container">
      <span className="form_label">Weather forecast</span>
    <form className='weather_form' onSubmit={getWeatherData}>
      <input onChange={handleCityName} className="city_input" placeholder="Warsaw"></input>
      <button onClick={getWeatherData} className="btn btn-primary weather_form_btn">Sumbit</button>
      <img type='submit' alt="geo_btn" src='https://cdn-icons-png.flaticon.com/128/7235/7235992.png' onClick={getWeatherById} className="geo_button"/>
    </form>
    </div>
  );
};

export default WeatherForm;
