import React from "react";
import { Polar, Doughnut, Bar, Line, HorizontalBar } from "react-chartjs-2";
import Default from "./default";
import ChartLayout from "./chartLayout";

const Charts = ({ graphic, dispatch, order }) => {
  if (!graphic) return <Default>No Graphic added!</Default>;

  const { elements, currentTemplate } = graphic;

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
        <ChartLayout graphic={graphic} dispatch={dispatch} order={order}>
          <Polar data={data} height={300} />
        </ChartLayout>
      );
    case "Daughnut":
      return (
        <ChartLayout graphic={graphic} dispatch={dispatch} order={order}>
          <Doughnut data={data} height={300} />
        </ChartLayout>
      );
    case "Bar":
      return (
        <ChartLayout graphic={graphic} dispatch={dispatch} order={order}>
          <Bar data={data} options={options} height={300} />
        </ChartLayout>
      );
    case "Line":
      return (
        <ChartLayout graphic={graphic} dispatch={dispatch} order={order}>
          <Line data={data} options={options} height={300} />
        </ChartLayout>
      );
    case "HorizontalBar":
      return (
        <ChartLayout graphic={graphic} dispatch={dispatch} order={order}>
          <HorizontalBar data={data} options={options} height={300} />
        </ChartLayout>
      );
    default:
      return <Default>No template selected!</Default>;
  }
};

export default Charts;
