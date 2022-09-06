import React from "react";
import ReactDOM from "react-dom";
import ReactHighcharts from "react-highcharts";

import "./styles.css";

export default function HChart() {
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

  const config = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: "pie",
      marginTop: 0,
      spacingLeft: 0,
      spacingRight: 0,
      spacingTop: 0,
    },
    title: {
      text: "Total Sales",
      align: "center",
      verticalAlign: "middle",
      y: -30,
      style: {
        fontWeight: 200,
        fontSize: "20px",
        color: "#6E8BAE",
      },
    },
    subtitle: {
      text: "$4,400,000",
      align: "center",
      verticalAlign: "middle",
      y: 0,
      style: {
        fontSize: "26px",
        color: "black",
      },
    },
    tooltip: {
      enabled: false,
    },
    plotOptions: {
      series: {
        states: {
          hover: {
            enabled: false,
          },
        },
      },
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: true,
          formatter: function () {
            return `${this.key} <br/><b> ${this.y} </b>%`;
          },
        },
        showInLegend: true,
        borderWidth: 0,
      },
    },
    series: [
      {
        name: "Composition",
        colorByPoint: true,
        innerSize: "60%",
        data: [
          {
            name: labels[0],
            color: "#1A61FF",
            y: parseInt(dataList[0]),
          },
          {
            name: labels[1],
            color: "#E3ECFF",
            y: parseInt(dataList[1]),
          },
          {
            name: labels[2],
            color: "#B0C6FF",
            y: parseInt(dataList[2]),
          },
        ],
      },
    ],
    credits: {
      enabled: false,
    },
    legend: {
      enabled: false,
    },
    tooltip: {
      enabled: false,
    },
  };

  return (
    <div className="App">
      <ReactHighcharts config={config} />
    </div>
  );
}
