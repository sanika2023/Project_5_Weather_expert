function Card({day})
{
    const iconUrl = `https://www.weatherbit.io/static/img/icons/${day.weather.icon}.png`;
    return (
        <div className = "card">
            <h3>{day.valid_date}</h3>
            <img src={iconUrl} alt={day.weather.description} />
            <p>{day.weather.description}</p>
            <p> {day.temp}°C</p>

        </div>
    )
}

export default Card