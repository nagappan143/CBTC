function getWeather() {
    const locationInput = document.getElementById('locationInput');
    const location = locationInput.value;

    // Make sure the user entered a location
    if (!location) {
        alert('Please enter a location.');
        return;
    }

    // Construct the URL for the weather API (replace 'YOUR_API_KEY' with your actual API key)
    const apiKey = 'd8717ec36ab14ae8cbafd33a081d0806';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    // Make the API call
    fetch(apiUrl)
        .then(response => {
            // Check if the response is successful (status code 200)
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Display weather information
            displayWeather(data);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

function displayWeather(weatherData) {
    // Extract relevant weather information from the API response
    const temperature = `${weatherData.main.temp}°C`;
    const description = weatherData.weather[0].description;
    const humidity = `${weatherData.main.humidity}%`;
    const windSpeed = `${weatherData.wind.speed} m/s`;

    // Display the weather information in the HTML
    const weatherDisplay = document.getElementById('weatherDisplay');
    weatherDisplay.innerHTML = `
        <p><strong>Temperature:</strong> ${temperature}</p>
        <p><strong>Description:</strong> ${description}</p>
        <p><strong>Humidity:</strong> ${humidity}</p>
        <p><strong>Wind Speed:</strong> ${windSpeed}</p>
    `;
}
