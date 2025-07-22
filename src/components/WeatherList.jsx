import Card from './Card'
import { Link } from 'react-router-dom';

function WeatherList({data})
{
    return (
         
        <div className = "weather-list">
            {data.map((day)=> (
                <Link to={`/weather/${day.valid_date}`} key={day.valid_date}>
                <Card key={day.valid_date} day={day}/>
                </Link>

            ))}


        </div>
        
    );
}

export default WeatherList