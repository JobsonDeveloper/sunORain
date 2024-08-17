/* eslint-disable react/prop-types */
import './Weatherinfo.css';

function WeatherInfo({ weather }) {

    function fahrenheit(degree) {
        return Math.round((9 * degree / 5) + 32);
    }

    return (
        <div className="weatherContainer">
            <h2>{weather.name}</h2>
            <div className='weatherInfo'>
                <img src={ `http://openweathermap.org/img/wn/${weather.weather[0].icon}.png` } alt="" />
                <p className='temperature'>{ fahrenheit(weather.main.temp) }°F</p>
            </div>

            <p className='description'>{ weather.weather[0].description }</p>

            <div className='details'>
                <p>Thermal Sensation: { fahrenheit(weather.main.feels_like) }°F</p>
                <p>Humidity: { weather.main.humidity }%</p>
                <p>Pressure: { weather.main.pressure }</p>
            </div>

        </div>
    );

}

export default WeatherInfo;