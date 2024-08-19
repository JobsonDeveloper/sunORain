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
        <article className="weatherContainerFiveDays">
            <h2>Próximos Quatro Dias</h2>
            <div className='weatherList'>
                {nextFiveDaysForecast.map(forecast => (
                    <ul key={forecast.dt} className='weatherItem'>
                        <li className='forecastDay'>{convertDate(forecast)}</li>
                        <img src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`} alt="" />
                        <li className='forecastDescription'>{forecast.weather[0].description}</li>
                        <li>Min: {Math.round(forecast.main.temp_min)}°C</li>
                        <li>Max: {Math.round(forecast.main.temp_max)}°C</li>
                    </ul>
                ))}
            </div>
        </article>
    );

}

export default WeatherInfoFiveDays;