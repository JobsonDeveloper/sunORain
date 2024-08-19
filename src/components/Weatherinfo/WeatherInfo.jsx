/* eslint-disable react/prop-types */
import './css/Weatherinfo.css';

function WeatherInfo({ weather }) {

    // function fahrenheit(degree) {
    //     return Math.round((9 * degree / 5) + 32);
    // }

    return (
        <article className="weatherContainer">
            <div className='forecast'>
                <h2>{weather.name}</h2>
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
            </ul>

        </article>
    );

}

export default WeatherInfo;