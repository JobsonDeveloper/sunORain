/* eslint-disable react/prop-types */
import './WeatherinfoFiveDays.css';

function WeatherInfoFiveDays({ weatherFiveDays }) {

    let dailyForecast = {};

    // Percorre as datas e verifica se tem outra igual, para não repetir data
    for(let forecast of weatherFiveDays.list) {
        const date = new Date(forecast.dt * 1000). toLocaleDateString();

        // Verifica se a data exite dentro do objeto 'dailyForecast'
        if(!dailyForecast[date]) {
            dailyForecast[date] = forecast;
        }
    }

    // Pegar os valores do objeto 'dayliForecast' da posição 0 até a 5
    // const nextFiveDays = Object.values(dailyForecast).slice(0,5);
    const nextFiveDaysForecast = Object.values(dailyForecast).slice(0,5);

    function convertDate(date) {
        const newDate = new Date(date.dt * 1000).toLocaleDateString('en', {weekday: 'long', day: '2-digit'});

        return newDate;
    }

    function fahrenheit(degree) {
        return Math.round((9 * degree / 5) + 32);
    }

    return (
        <article className="weatherContainer">
            <h3>Next Five Days</h3>
            <div className='weatherList'>
                {nextFiveDaysForecast.map(forecast => (
                    <div key={forecast.dt} className='weatherItem'>
                        <p className='forecastDay'>{ convertDate(forecast) }</p>
                        <img src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`} alt="" />
                        <p className='forecastDescription'>{ forecast.weather[0].description }</p>
                        <p>Min: { fahrenheit(forecast.main.temp_min) }°F / Max: { fahrenheit(forecast.main.temp_max) }°F</p>
                    </div>
                ))}
            </div>
        </article>
    );

}

export default WeatherInfoFiveDays;