import React, { PureComponent } from "react";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Page A",
    cliques: 590,
    impressoes: 2250,
    pv: 800,
    cnt: 490,
  },
  {
    name: "Page B",
    cliques: 868,
    impressoes: 2150,
    pv: 967,
    cnt: "otimizar robots",
  },
  {
    name: "Page C",
    cliques: 1397,
    impressoes: 2050,
    pv: 1098,
    cnt: "Tarefa 1",
  },
  {
    name: "Page D",
    cliques: 1480,
    impressoes: 2250,
    pv: 1200,
    cnt: "tarefa",
  },
  {
    name: "Page E",
    cliques: 1520,
    impressoes: 2850,
    pv: 1108,
    cnt: 460,
  },
  {
    name: "Page F",
    cliques: 1400,
    impressoes: 2450,
    pv: "tarefa",
    cnt: 0,
  },
];

export default class TasksResults extends PureComponent {
  static demoUrl = "https://codesandbox.io/s/simple-composed-chart-h9zif";

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey="pv" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="cliques" stroke="#ff7300" />
          <Line type="monotone" dataKey="impressoes" stroke="#8884d8" />
          <Scatter dataKey="cnt" fill="red" />
        </ComposedChart>
      </ResponsiveContainer>
    );
  }
}
