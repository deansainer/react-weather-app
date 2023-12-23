import React from "react";
import { useState } from 'react';
import axios from 'axios';

const WeatherForm = ({setData}) => {
    const api_key = '86104ffb6aaa5ce42e36c1c32a57ddf0'

    const [city, setCity] = useState(null)
  
    
    function handleCityName(event){
        setCity(event.target.value)
    }
  
    async function getWeatherData(e) {
        e.preventDefault()
        if (city){
        try{
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`);
        const weatherData = response.data
          console.log(weatherData);
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
    </form>
    </div>
  );
};

export default WeatherForm;
