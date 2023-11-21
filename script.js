// Get the current weather
async function getWeather() {
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Trondheim,Norway&appid=bd5e378503939ddaee76f12ad7a97608');
    const data = await response.json();
    
    return data;
    }
    
    // Update the weather icon and text
    function updateWeather(weatherData) {
    const weatherIcon = document.getElementById('weather-icon');
    const weatherText = document.getElementById('weather-text');
    
    weatherIcon.src = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
    weatherText.textContent = weatherData.weather[0].main;
    }
    
    // Check the weather every 5 seconds
    setInterval(async () => {
    const weatherData = await getWeather();
    updateWeather(weatherData);
    
    // Update the window message
    const windowMessage = document.querySelector('.window-message h3');
    
    if (weatherData.weather[0].main === 'Rain' || weatherData.weather[0].main === 'Thunderstorm' || weatherData.weather[0].main === 'Snow') {
    windowMessage.textContent = 'Close your window!';
    windowMessage.classList.remove('open-window');
    windowMessage.classList.add('close-window');
    } else {
    windowMessage.textContent = 'Open your window!';
    windowMessage.classList.remove('close-window');
    windowMessage.classList.add('open-window');
    }
    }, 5000);
    
    // Update the weather when the page loads
    window.onload = async () => {
    const weatherData = await getWeather();
    updateWeather(weatherData);
    };
    