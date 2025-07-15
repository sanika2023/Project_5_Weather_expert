import Card from './Card'

function WeatherList({data})
{
    return (
        <div className = "weather-list">
            {data.map((day)=> (

                <Card key={day.valid_date} day={day}/>

            ))}


        </div>
    );
}

export default WeatherList