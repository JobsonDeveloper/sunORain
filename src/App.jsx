import { useState, useRef } from 'react'
import './App.css'
import axios from 'axios';
import WeatherInfo from './components/Weatherinfo/WeatherInfo';
import WeatherInfoFiveDays from './components/WeatherinfoFiveDays/WeatherInfoFiveDays.jsx';

function App() {
  const [weather, setWeather] = useState();
  const [weatherFiveDays, setWeatherFiveDays] = useState();
  const inputRef = useRef();

  async function searchCity() {

    const city = inputRef.current.value;
    const key = "74ef281d37b3fcead70089f9d1f12a4c";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=en&units=metric`;

    const urlFiveDay = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&lang=en&units=metric`;


    const apiInfo = await axios.get(url);
    const apiInfoFiveDays = await axios.get(urlFiveDay);

    setWeather(apiInfo.data);
    setWeatherFiveDays(apiInfoFiveDays.data);

  }

  return (
    <>
      <section className='container'>
        <h1>Weather Forecast</h1>
        <input ref={inputRef} type="text" placeholder='Write the name of the City'/>
        <button onClick={searchCity}>Search</button>

        {weather && <WeatherInfo weather={weather}/>}
        {weatherFiveDays && <WeatherInfoFiveDays weatherFiveDays={weatherFiveDays}/>}
      </section>
    </>
  )
}

export default App
