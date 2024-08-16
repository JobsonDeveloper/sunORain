import { useState, useRef } from 'react'
import './App.css'
import axios from 'axios';
import WeatherInfo from './components/Weatherinfo/WeatherInfo';

function App() {
  const [weather, setWeather] = useState({});
  const inputRef = useRef();

  async function searchCity() {

    const city = inputRef.current.value;
    const key = "74ef281d37b3fcead70089f9d1f12a4c";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`;

    const apiInfo = await axios.get(url);
    setWeather(apiInfo.data);
  }

  return (
    <>
      <div>
        <input ref={inputRef} type="text" placeholder='Digite o nome da cidade'/>
        <button onClick={searchCity}>Buscar</button>

        <WeatherInfo weather={weather}/>
      </div>
    </>
  )
}

export default App
