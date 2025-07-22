import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

function DashboardCharts({ data }) {
  return (
    <div className="charts">
      <LineChart width={500} height={300} data={data}>
        <text x={250} y={20} textAnchor="middle" dominantBaseline="middle">
         Avg Temp Over 10 Days
        </text>
        <XAxis dataKey="valid_date" />
        <YAxis />
        <Tooltip />
        <CartesianGrid stroke="#eee" />
        <Line type="monotone" dataKey="temp" stroke="#8884d8" />
      </LineChart>

      <LineChart width={500} height={300} data={data}>
        <text x={250} y={20} textAnchor="middle" dominantBaseline="middle">
         Minimum and Maximum Temperatures
        </text>
        <XAxis dataKey="valid_date" />
        <YAxis />
        <Tooltip />
        <CartesianGrid stroke="#eee" />
        <Line type="monotone" dataKey="max_temp" stroke="#ff7300" name="Max Temp" />
        <Line type="monotone" dataKey="min_temp" stroke="#387908" name="Min Temp" />
      </LineChart>
    </div>
  );
}

export default DashboardCharts