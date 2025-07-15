import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header';
import WeatherList from './components/WeatherList';
import Summary from './components/Summary';

const API_KEY = import.meta.env.VITE_APP_API_KEY

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [searchInput, setSearchInput] = useState("New York"); 
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const fetchWeather = async () => {
      try {

        const res = await fetch(
          `https://api.weatherbit.io/v2.0/forecast/daily?city=${searchInput}&key=${API_KEY}&days=10`
        );
        const data = await res.json();
        setWeatherData(data);
        console.log(data); 
      } catch (error) {
        console.error("Failed to fetch weather data", error);
      }
    };

    fetchWeather();
  }, [searchInput]);

  let filtered = weatherData?.data || [];

  if (filter === "cold") {
    filtered = filtered.filter((d) => d.temp < 15);
  } else if (filter === "warm") {
    filtered = filtered.filter((d) => d.temp >= 15 && d.temp <= 25);
  } else if (filter === "hot") {
    filtered = filtered.filter((d) => d.temp > 25);
  }

  return (
<div className="App">
      <h1>🌤️ Weather Expert</h1>
      <Header
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        filter={filter}
        setFilter={setFilter}
      />
      {weatherData && <Summary data={filtered} />}
      {weatherData && <WeatherList data={filtered} />}
    </div>
  );
}

export default App
