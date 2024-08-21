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
                <li className="sr-data-item"></li>
                <li className="sr-data-item"></li>
                <li className="sr-data-item"></li>
                <li className="sr-data-item"></li>
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