/* eslint-disable react/prop-types */
function WeatherInfo({ weather }) {
    if (weather.weather === undefined) {
        return (
            <>

            </>
        )
    }
    else {

        console.log(weather);

        return (
            <>
                <h2>Cidade: {weather.name}</h2>
                <div>
                    <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt="" />
                    <p>Temperatura: {Math.round(weather.main.temp)}°C</p>
                </div>

                <p>Descrição: {weather.weather[0].description}</p>

                <div>
                    <p>Sencação térmica: {Math.round(weather.main.feels_like)}°C</p>
                    <p>Umidade: {weather.main.humidity}%</p>
                    <p>Pressão: {weather.main.pressure}</p>
                </div>

            </>
        );
    }
}

export default WeatherInfo;