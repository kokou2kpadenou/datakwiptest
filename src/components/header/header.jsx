import React from "react";
import logo from "./Datakwip_logo.png";

const Header = () => {
  return (
    <header className="bg-light p-4 mb-4">
      <h1 className="d-flex align-items-center">
        <img
          className="mr-4"
          style={{ width: "60px" }}
          src={logo}
          alt="Datakwip logo"
        />
        <span>Datakwip Frontend Test</span>
      </h1>
    </header>
  );
};

export default Header;
