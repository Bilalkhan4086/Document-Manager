import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Chart } from "react-chartjs-2";
import { Box } from "@material-ui/core";

ChartJS.register(ArcElement, Tooltip, Legend);

const dummyData = [
  {
    name: "PPC",
    percent: "20.60",
    value: 12196.599999999999,
  },
  {
    name: "Gross Profit",
    percent: "59",
    value: 6015.880000000001,
  },
  {
    name: "COGS",
    percent: "12.50",
    value: 2601,
  },
];
const labels = dummyData.map((d, i) => d.name);
const dataList = dummyData.map((d, i) => d.percent);
export const data = {
  labels: labels,
  datasets: [
    {
      data: dataList,
      backgroundColor: ["blue", "silver", "gray"],
      borderColor: ["blue", "silver", "gray"],
      borderWidth: 1,
      cutout: "60%",
    },
  ],
};

export default function App() {
  const padding = 200;
  const doughnutLine = {
    id: "doughnutLabelsLine",
    afterDraw(chart, args, options) {
      const {
        ctx,
        chartArea: { top, bottom, left, right, height, width },
      } = chart;
      chart.data.datasets.forEach((dataset, i) => {
        chart.getDatasetMeta(i).data.forEach((datapoint, index) => {
          const { x, y } = datapoint.tooltipPosition();
          const halfWidth = width / 2;
          const halfHeight = height / 2;
          const xLine = x >= halfWidth + padding ? x + 50 : x - 50;
          const yLine = y >= halfHeight + padding ? y + 50 : y - 50;
          const extendLine = x >= halfWidth + padding ? 25 : -25;
          const baseXPoint =
            x >= halfWidth + padding
              ? x + (datapoint.outerRadius - datapoint.innerRadius) / 2
              : x + (datapoint.innerRadius - datapoint.outerRadius) / 2;

          ctx.moveTo(baseXPoint, y);
          ctx.lineTo(xLine, yLine);
          ctx.lineTo(xLine + extendLine, yLine);
          ctx.strokeStyle = "#4c567f";
          ctx.lineWidth = 2;
          ctx.stroke();

          //text
          ctx.textBaseline = "middle";
          const textPosition = x >= halfWidth + padding ? "left" : "right";
          ctx.textAlign = textPosition;
          ctx.fillStyle = "#4c567f";
          console.log("datapoint :", datapoint);
          const dataValues = dataset["data"];
          ctx.font = "bolder 13px Arial";
          ctx.fillText(
            ` ${chart.data.labels[index]} `,
            xLine + extendLine,
            yLine
          );
          ctx.fillText(
            `${dataValues[index]} %`,
            xLine + extendLine,
            yLine + 30
          );
        });
      });
    },
  };

  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        margin: "auto",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Box
        style={{
          width: "800px",
          height: "800px",
        }}
      >
        <Chart
          type="doughnut"
          data={data}
          options={{
            maintainAspectRatio: false,
            layout: { padding: padding },
            plugins: { legend: { display: false } },
          }}
          plugins={[doughnutLine]}
        />
      </Box>
    </Box>
  );
}
