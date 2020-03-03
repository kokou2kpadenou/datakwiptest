import React from "react";
import ChartLayout from "./chartLayout";
import logo from "./Datakwip_logo_gray.png";

const Default = ({ children }) => (
  <ChartLayout>
    <div className="text-center">
      <img className="w-75" src={logo} alt="No Data / No template" />
      <h5 className="text-secondary">{children}</h5>
    </div>
  </ChartLayout>
);

export default Default;
