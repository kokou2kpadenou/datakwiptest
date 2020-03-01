import React from "react";
import { Polar, Doughnut, Bar, Line, HorizontalBar } from "react-chartjs-2";
import logo from "./Datakwip_logo_gray.png";
import { getRandomColorHex } from "../../../utils";

const Charts = ({ state }) => {
  if (state.elements.length <= 0) return <Default>No Data!</Default>;
  const data = {
    labels: state.elements.map(element => element.label),
    datasets: [
      {
        data: state.elements.map(element => element.data),
        backgroundColor: state.elements.map(() => getRandomColorHex())
      }
    ]
  };

  const options = {
    legend: {
      display: false
    }
  };

  switch (state.currentTemplate) {
    case "Polar":
      return (
        <ChartLayout title="Polar">
          <Polar data={data} />
        </ChartLayout>
      );
    case "Daughnut":
      return (
        <ChartLayout title="Daughnut">
          <Doughnut data={data} />
        </ChartLayout>
      );
    case "Bar":
      return (
        <ChartLayout title="Bar">
          <Bar data={data} options={options} />
        </ChartLayout>
      );
    case "Line":
      return (
        <ChartLayout title="Line">
          <Line data={data} options={options} />
        </ChartLayout>
      );
    case "HorizontalBar":
      return (
        <ChartLayout title="Horizontal Bar">
          <HorizontalBar data={data} options={options} />
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
      <img
        src={logo}
        style={{ width: "100px", height: "90px" }}
        alt="No Data / No template"
      />
      <h5 className="text-secondary">{children}</h5>
    </div>
  </ChartLayout>
);

export default Charts;
