import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const API_KEY = import.meta.env.VITE_APP_API_KEY;

function DetailView() {
  const { date } = useParams();
  const [weatherData, setWeatherData] = useState(null);
  const [searchInput] = useState("New York"); // or pass it as a prop/context if needed

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch(
          `https://api.weatherbit.io/v2.0/forecast/daily?city=${searchInput}&key=${API_KEY}&days=10`
        );
        const data = await res.json();
        setWeatherData(data.data);
      } catch (error) {
        console.error("Failed to fetch weather data", error);
      }
    };

    fetchWeather();
  }, [searchInput]);

  const day = weatherData?.find((d) => d.valid_date === date);

  if (!day) {
    return <p>Loading or no data available for {date}...</p>;
  }

  const iconUrl = `https://www.weatherbit.io/static/img/icons/${day.weather.icon}.png`;

  return (
    <div className="detail-view">
      <h1>🌤️ Weather Expert</h1>
      <br></br>
      <h2>🌤️ Detailed Weather for {day.valid_date}</h2>
      <div className="card">
        <img src={iconUrl} alt={day.weather.description} />
        <p><strong>Description:</strong> {day.weather.description}</p>
        <p><strong>Temperature:</strong> {day.temp}°C</p>
        <p><strong>Min Temp:</strong> {day.min_temp}°C</p>
        <p><strong>Max Temp:</strong> {day.max_temp}°C</p>
        <p><strong>Wind Speed:</strong> {day.wind_spd} m/s</p>
        <p><strong>Humidity:</strong> {day.rh}%</p>
        <p><strong>Precipitation:</strong> {day.pop}% chance</p>
      </div>
    </div>
  );
}

export default DetailView;
