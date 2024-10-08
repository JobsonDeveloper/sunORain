/* eslint-disable react/prop-types */
import './css/WeatherinfoFiveDays.css';

function WeatherInfoFiveDays({ weatherFiveDays }) {

  let dailyForecast = {};

  // Percorre as datas e verifica se tem outra igual, para não repetir data
  for (let forecast of weatherFiveDays.list) {
    const date = new Date(forecast.dt * 1000).toLocaleDateString();

    // Verifica se a data exite dentro do objeto 'dailyForecast'
    if (!dailyForecast[date]) {
      dailyForecast[date] = forecast;
    }
  }

  // Pegar os valores do objeto 'dayliForecast' da posição 0 até a 5
  // const nextFiveDays = Object.values(dailyForecast).slice(0,5);
  const nextFiveDaysForecast = Object.values(dailyForecast).slice(1, 5);

  function convertDate(date) {
    const newDate = new Date(date.dt * 1000).toLocaleDateString('pt-br', { weekday: 'long' });
    return newDate;
  }

  return (
    // <article className="weatherContainerFiveDays">
    //     <h2>Próximos Quatro Dias</h2>
    //     <div className='weatherList'>

    // <li>Min: {Math.round(forecast.main.temp_min)}°C</li>
    // <li>Max: {Math.round(forecast.main.temp_max)}°C</li>
    //     </div>
    // </article>

    <article className='sr-proximosDias'>
      <div className="sr-proximosDias-data">
        <div className="sr-data-item">
          <h2 className='sr-item-title'>Próximos Dias</h2>
        </div>
        <div className="sr-data-item">
          {nextFiveDaysForecast.map(forecast => (
            <ul key={forecast.dt} className="sr-data-info">
              <li className="sr-info-items sr-items-principais">
                <div className="sr-info-items">
                  <img src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`} alt="" />
                </div>
                <div className="sr-info-items">
                  {convertDate(forecast)}
                </div>
              </li>
              <li className="sr-info-items">
                {forecast.weather[0].description}
              </li>
              <li className="sr-info-items sr-info-temp">
                <div className="sr-temp-min">
                  <h5 className="sr-temp-min-title">Min</h5>
                  <p className="sr-temp-min-data">{Math.round(forecast.main.temp_min)}°C</p>
                </div>
                <div className="sr-temp-max">
                  <h5 className="sr-temp-max-title">Max</h5>
                  <p className="sr-temp-max-data">{Math.round(forecast.main.temp_max)}°C</p>
                </div>
              </li>
            </ul>
          ))}
        </div>
      </div>
    </article>
  );

}

export default WeatherInfoFiveDays;