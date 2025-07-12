const form = document.getElementById('weatherForm');
const cityInput = document.getElementById('cityInput');
const cityNameEl = document.getElementById('cityName');
const temperatureEl = document.getElementById('temperature');
const conditionEl = document.getElementById('condition');
const API_KEY = "YOUR_API_KEY";

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const city = cityInput.value.trim();
  if (!city) return;

  try {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    if (!res.ok) throw new Error("City not found");
    
    const data = await res.json();

    cityNameEl.textContent = data.name;
    temperatureEl.textContent = data.main.temp;
    conditionEl.textContent = data.weather[0].main;
  } catch (err) {
    alert(err.message);
    cityNameEl.textContent = '-';
    temperatureEl.textContent = '-';
    conditionEl.textContent = '-';
  }
});
