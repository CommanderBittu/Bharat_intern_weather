
async function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = '23b25d5db63075f49f2b916fa1e8b01a'; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (response.ok) {
            const weatherInfo = `
                <h2>${data.name}</h2>
                <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
                <p><strong>Weather:</strong> ${data.weather[0].description}</p>
                <p><strong>Humidity:</strong> ${data.main.humidity} %</p>
                <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
            `;
            document.getElementById('weather-info').innerHTML = weatherInfo;
        } else {
            document.getElementById('weather-info').innerHTML = `<p>${data.message}. Please try again.</p>`;
        }
    } catch (error) {
        console.error('Error fetching the weather data', error);
        document.getElementById('weather-info').innerHTML = '<p>There was an error fetching the weather data. Please try again later.</p>';
    }
}
