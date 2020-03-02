import React from "react";
import { Polar, Doughnut, Bar, Line, HorizontalBar } from "react-chartjs-2";

import logo from "./Datakwip_logo_gray.png";

const Charts = ({ elements, currentTemplate }) => {
  if (elements.length <= 0) return <Default>No Data!</Default>;
  const data = {
    labels: elements.map(element => element.label),
    datasets: [
      {
        data: elements.map(element => element.data),
        backgroundColor: elements.map(element => element.bgColor)
      }
    ]
  };

  const options = {
    legend: {
      display: false
    }
  };

  switch (currentTemplate) {
    case "Polar":
      return (
        <ChartLayout title="Polar">
          <Polar data={data} height={300} />
        </ChartLayout>
      );
    case "Daughnut":
      return (
        <ChartLayout title="Daughnut">
          <Doughnut data={data} height={300} />
        </ChartLayout>
      );
    case "Bar":
      return (
        <ChartLayout title="Bar">
          <Bar data={data} options={options} height={300} />
        </ChartLayout>
      );
    case "Line":
      return (
        <ChartLayout title="Line">
          <Line data={data} options={options} height={300} />
        </ChartLayout>
      );
    case "HorizontalBar":
      return (
        <ChartLayout title="Horizontal Bar">
          <HorizontalBar data={data} options={options} height={300} />
        </ChartLayout>
      );
    default:
      return <Default>No template selected!</Default>;
  }
};

const ChartLayout = ({ title, children }) => (
  <div className="w-100 h-100" style={{ minHeight: "400px" }}>
    <h2 className="text-center">{title}</h2>
    <div className="d-flex justify-content-center align-items-center w-100 h-100">
      {children}
    </div>
  </div>
);
const Default = ({ children }) => (
  <ChartLayout>
    <div className="text-center">
      <img className="w-75" src={logo} alt="No Data / No template" />
      <h5 className="text-secondary">{children}</h5>
    </div>
  </ChartLayout>
);

export default Charts;
