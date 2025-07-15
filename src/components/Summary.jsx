

function Summary({data}){
    if (!data.length) return null;

    const total = data.length;
    const avgTemp = (
        data.reduce((sum, day) => sum + day.temp, 0) / total

    ).toFixed(1);
    const hottest = data.reduce((max, day) => (day.temp > max.temp ? day : max));

    return (
    <div className="summary">
      <p>Total Days: {total}</p>
      <p>Avg Temp: {avgTemp}°C</p>
      <p>Hottest Day: {hottest.valid_date} ({hottest.temp}°C)</p>
    </div>
  );



}

export default Summary