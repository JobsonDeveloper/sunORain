import { useState, useRef } from 'react'
import './css/App.css'
import axios from 'axios';
import WeatherInfo from './components/Weatherinfo/WeatherInfo';
import WeatherInfoFiveDays from './components/WeatherinfoFiveDays/WeatherInfoFiveDays.jsx';
// import logo from './assets/SunORain-logo.svg';

function App() {
  const [weather, setWeather] = useState();
  const [weatherFiveDays, setWeatherFiveDays] = useState();
  const inputRef = useRef();
  let forecast = '';
  let nextDays = `Previsão para os próximos quatro dias: \n`;
  let apiInfo;
  let apiInfoFiveDays;

  async function searchCity() {

    const city = inputRef.current.value;

    if (inputRef.current.value === '') {
      return;
    }

    inputRef.current.value = '';

    const key = "74ef281d37b3fcead70089f9d1f12a4c";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`;

    const urlFiveDay = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&lang=pt_br&units=metric`;

    apiInfo = await axios.get(url);
    apiInfoFiveDays = await axios.get(urlFiveDay);

    setWeather(apiInfo.data);
    setWeatherFiveDays(apiInfoFiveDays.data);

    if (apiInfo) {
      localStorage.setItem('SunORainAudio', '1');
      speack();
    }
  }

  function speack() {
    forecast = (`
    Previsão do tempo hoje para ${apiInfo.data.name}.
    ${apiInfo.data.weather[0].description} com temperatura de ${Math.round(apiInfo.data.main.temp)} graus célsius,
    Sensação térmica: ${Math.round(apiInfo.data.main.feels_like)} graus célsius,
    Humidade: ${apiInfo.data.main.humidity}%,
    Temperatura mínima de ${Math.round(apiInfo.data.main.temp_min)} e máxima de ${Math.round(apiInfo.data.main.temp_max)} graus célsius.`);

    const speaks = new SpeechSynthesisUtterance(forecast);
    speaks.lang = 'pt-BR';
    window.speechSynthesis.speak(speaks);

    console.log(forecast);
  }

  if (localStorage.getItem('SunORainAudio') === '1') {
    let dailyForecast = {};

    for (let forecast of weatherFiveDays.list) {
      const date = new Date(forecast.dt * 1000).toLocaleDateString();

      // Verifica se a data exite dentro do objeto 'dailyForecast'
      if (!dailyForecast[date]) {
        dailyForecast[date] = forecast;
      }
    }

    const nextFiveDaysForecast = Object.values(dailyForecast).slice(1, 5);

    function convertDate(date) {
      const newDate = new Date(date.dt * 1000).toLocaleDateString('pt-br', { weekday: 'long' });
      return newDate;
    }

    nextFiveDaysForecast.forEach(day => {
      nextDays += ` ${convertDate(day)}, ${day.weather[0].description} com temperatura mínima de ${Math.round(day.main.temp_min)} e máxima de ${Math.round(day.main.temp_max)} graus célsius. \n`;
    });

    console.log(nextDays);
    localStorage.removeItem('SunORainAudio');

    const speaks = new SpeechSynthesisUtterance(nextDays);
    speaks.lang = 'pt-BR';
    window.speechSynthesis.speak(speaks);
  }

  return (
    <>
      <section className='sr-container'>

        {/* <img src={logo} alt="Logo" className='logo' /> */}
        <header className='sr-container-header'>
          <div className='sr-header-domine'>
            <p className='sr-domine-link'>SunORain<span>.netlify.app</span></p>
          </div>
          <div className='sr-header-search'>
            <input ref={inputRef} type="text" className='sr-search-input' />
            <button onClick={searchCity} className='sr-search-button'></button>
          </div>
        </header>

        <main className="sr-container-main">
          {weather && <WeatherInfo weather={weather} />}
          <section className="sr-forecastData">
            {weatherFiveDays && <WeatherInfoFiveDays weatherFiveDays={weatherFiveDays} />}
          </section>
        </main>
        {/* <div className='searshCity'>
        </div> */}

        {/* <article className="atribuition">
          <p className='atribuition-title'>Atribuições Freepik - Flaticon:</p>

          <ul className="atribuition-list">
            <li><a href="https://www.flaticon.com/br/icones-gratis/chuva" title="chuva ícones">Chuva</a>, </li>
            <li><a href="https://www.flaticon.com/br/icones-gratis/brilho-do-sol" title="brilho do sol ícones">Sol</a>, </li>
            <li><a href="https://www.flaticon.com/br/icones-gratis/lupa" title="lupa ícones">Lupa</a></li>
          </ul>
        </article> */}
      </section>
    </>
  )
}

export default App
