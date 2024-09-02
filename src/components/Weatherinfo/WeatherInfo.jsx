/* eslint-disable react/prop-types */
import './css/Weatherinfo.css';

function WeatherInfo({ weather }) {

  // function fahrenheit(degree) {
  //     return Math.round((9 * degree / 5) + 32);
  // }

  return (
    <article className="sr-forecast-now">

      <div className="sr-forecast-title">
        <h2 className='sr-city-name'>Tempo hoje para {weather.name}</h2>
      </div>

      <ul className='sr-forecast-data'>
        <li className='sh-data-list'>
          <li className="sr-data-item sr-item-descricao">
            <ul className='sr-item-forecastNow'>
              <li className='sr-forecastNow-description'>
                <p className='sr-description-text'>{weather.weather[0].description}</p>
              </li>
              <li className='sr-forecastNow-illustration'>
                <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt="" className='sr-illustration-img' />
              </li>
              <li className='sr-forecastNow-temperature'>
                <p className='sr-temperature-text'>{Math.round(weather.main.temp)}°C</p>
              </li>
            </ul>
          </li>

          <li className="sr-data-item sr-item-temperatura">
            <h4 className='sr-item-title'>Temperatura</h4>
            <ul className='sr-item-temperatureList'>
              <li className='sr-temperatureList-itens'>Min:</li>
              <li className='sr-temperatureList-itens'>Max:</li>
              <li className='sr-temperatureList-itens'> {Math.round(weather.main.temp_min)}°C </li>
              <li className='sr-temperatureList-itens'> {Math.round(weather.main.temp_max)}°C </li>
            </ul>
          </li>

          <li className="sr-data-item sr-item-senTermica">
            <h4 className='sr-item-title'>Sensação Térmica</h4>
            <p className='sr-item-sensacaoTermica'>{Math.round(weather.main.feels_like)}°C</p>
          </li>

          <li className="sr-data-item sr-item-humidade">
            <h4 className='sr-item-title'>Humidade</h4>
            <p className='sr-item-humidade'>{weather.main.humidity}%</p>
          </li>
        </li>
      </ul>


      {/* <div className='forecast'>
                <div className='weatherInfo'>
                    <img src={ `http://openweathermap.org/img/wn/${weather.weather[0].icon}.png` } alt="" />
                    <p className='temperature'>{ Math.round(weather.main.temp) }°C</p>
                </div>
                <p className='description'>{ weather.weather[0].description }</p>
            </div>

            <ul className='details'>
                <li className='details-sensation'><p>Senssação Térmica:</p> { Math.round(weather.main.feels_like) }°C</li>
                <li className='details-humidity'><p>Humidade:</p> { weather.main.humidity }%</li>
                <li className='details-tempMinMax'>
                    <p>Min: <span>{ Math.round(weather.main.temp_min) }°C</span></p>
                    <p>Max: <span>{ Math.round(weather.main.temp_max) }°C</span></p>
                </li>
            </ul> */}

    </article>
  );

}

export default WeatherInfo;