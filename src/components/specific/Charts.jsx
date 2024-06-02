import {
    ArcElement,
    CategoryScale,
    Chart as ChartJS,
    Filler,
    Legend,
    LineElement,
    LinearScale,
    PointElement,
    Tooltip,
  } from "chart.js";
  import React from "react";
  import { Doughnut, Line } from "react-chartjs-2";
  import {
    blue,
    lightblue,
    purple,
    purpleLight,
  } from "../../components/constants/color";
  import { getLast7Days } from "../../lib/feature";
  


  ChartJS.register(
    Tooltip,
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    Filler,
    ArcElement,
    Legend
  );
  
  const labels = getLast7Days();
  
  const lineChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
  
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
    },
  };
  
  const LineChart = ({ value = [] }) => {
    const data = {
      labels,
      datasets: [
        {
          data: value,
          label: "Messages",
          fill: true,
          backgroundColor: purpleLight,
          borderColor: purple,
        },
      ],
    };
  
    return <Line data={data} options={lineChartOptions} />;
  };
  
  const doughnutChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    cutout: 70,
  };
  
  const DoughnutChart = ({ value = [], labels = [] }) => {
    const data = {
      labels,
      datasets: [
        {
          data: value,
          backgroundColor: [purpleLight, "pink"],
          hoverBackgroundColor: [purple, blue],
          borderColor: [purple, blue],
          offset: 40,
        },
      ],
    };
    return (
      <Doughnut
        style={{ zIndex: 10 }}
        data={data}
        options={doughnutChartOptions}
      />
    );
  };
  
  export { DoughnutChart, LineChart };