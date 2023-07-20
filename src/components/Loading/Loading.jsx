import React from "react";
import "./Loading.scss";
import PulseLoader from "react-spinners/PulseLoader";

const Loading = ({ color = "#7c9d96", size = 10 }) => {
  return (
    <div className="LoadingBar">
      <PulseLoader size={size} color={color} />
    </div>
  );
};

export default Loading;
