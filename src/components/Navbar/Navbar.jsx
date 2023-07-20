import React from "react";
import "./Navbar.scss";
const Navbar = () => {
  return (
    <div className="container">
      <div>Name</div>
      <div className="logo">LOGO</div>
      <div className="secContainer">
        <div>Home</div>
        <div>Services</div>
        <div>Clients</div>
        <div>About</div>
      </div>
    </div>
  );
};

export default Navbar;
