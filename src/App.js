import './App.css';
import WeatherForm from './components/WeatherForm'
import { useState } from 'react';
import axios from 'axios';
import Card from './components/Card';

function App() {
  const [cityData, setCityData] = useState({})
  function setData(cityDataObject){
    setCityData(cityDataObject)
  }

  return (
    <div>
      <WeatherForm setData={setData}/>
      {Object.keys(cityData).length>0 && (<Card cityData={cityData}/>)}
    </div>
  );
}

export default App;
