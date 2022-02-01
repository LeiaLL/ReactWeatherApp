import React from "react";
import Forecast from "./Forecast";
import Weatherdisplay from "./Weatherdisplay";

export default function Weather() {
  return (
    <h1>
      {" "}
      <Weatherdisplay />
      <Forecast />{" "}
    </h1>
  );
}
