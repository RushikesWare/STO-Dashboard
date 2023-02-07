import React from "react";
import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { ContainerDiv } from "./Practice.styles";
const data = [
  { name: "01-Dec", incidentCount: 2, incidentDuration: 67 },
  { name: "04-Dec", incidentCount:3, incidentDuration: 83 },
  { name: " ", incidentCount:0 , incidentDuration: 0 },
  // { name: "01-Dec", incidentCount: 0, incidentDuration: 0 },
  // { name: "01-Jan", incidentCount: 5, incidentDuration: 500 },
];
console.log(data);
const P2Chart = () => (
  <ContainerDiv>
    <ResponsiveContainer>
      <ComposedChart
        width={400}
        height={300}
        data={data}
        margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
      >
        <CartesianGrid stroke="#f5f5f5" vertical={false} />
        <XAxis
          dataKey="name"
          tickLine={false}
          axisLine={{ stroke: "#f5f5f5" }}
          label={{
            value: "Date",
            position: "insideBottom",
            margin: "{{ top: 20, bottom: 30 }}",
          }}
        />
        <Tooltip />
        <Legend verticalAlign="bottom" align="left" height={50} />
        <Bar
          dataKey="incidentCount"
          fill="#ff7300"
          yAxisId="left"
          legendType="rect"
          name="Incident Count"
        />
        <Line
          strokeWidth={2}
          type="monotone"
          dataKey="incidentDuration"
          stroke="#3B7AD9"
          yAxisId="right"
          legendType="rect"
          name="Incident Duration"
        />
        <YAxis
          domain={[1, "dataMax + 5"]}
          yAxisId="left"
          axisLine={{ stroke: "#f5f5f5" }}
          label={{
            value: "Incident Count",
            angle: -90,
            position: "insideLeft",
          }}
        />
        <YAxis
          yAxisId="right"
          orientation="right"
          label={{
            value: "Incident Duration",
            angle: -90,
            position: "insideRight",
          }}
          stroke="#3B7AD9"
          axisLine={{ stroke: "#f5f5f5" }}
        />
      </ComposedChart>
    </ResponsiveContainer>
  </ContainerDiv>
);
export default P2Chart;
