import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";
const data = [
  { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 500, pv: 2800, amt: 3400 },
  { name: "Page B", uv: 300, pv: 2900, amt: 3300 },
];

const TasksResults = () => {
  return (
    <LineChart
      width={600}
      height={300}
      data={data}
      margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
    >
      <Line type="monotone" dataKey="uv" stroke="#fff" />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="name" />
      <YAxis />
    </LineChart>
  );
};

export default TasksResults;
