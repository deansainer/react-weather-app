import React from 'react';

const WeatherComponent = ({ cityData }) => {

  return (
    <div className='weather_page'>
      <div className='weather_card' style={{ backgroundImage: `url("/images/${cityData.description.toLowerCase().replace(/ /g, '_')}.jpg")`}}>
        <img className='weather_icon' src={`http://openweathermap.org/img/w/${cityData.icon}.png`} alt="Weather Icon" />
        <p className='temp'>{cityData.temp}°C</p>
        <div className='city_country'>
          <span className='city'>{cityData.city}</span>, <span className='country'>{cityData.country}</span>
        </div>
        <p className='description'>{cityData.description}</p>
        <span className='feels_like'>Feels like: {cityData.feels_like}</span>
        <span className='temp_max'>max: {Math.floor(cityData.temp_max)}°C</span>
        <span className='temp_min'>min: {Math.floor(cityData.temp_min)}°C</span>
        <p className='wind_speed'>Wind speed: {cityData.wind_speed} m/s</p>
      </div>
    </div>
  );
};

export default WeatherComponent;
