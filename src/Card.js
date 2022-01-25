import React from "react";

import Forecast from "./Forecast";
import Navbar from "./Navbar";
import Weatherdisplay from "./Weatherdisplay";

export default function Card() {
  return (
    <div className="card">
      <div className="card-body">
        <Navbar />
        <Weatherdisplay />
        <Forecast />
      </div>
    </div>
  );
}
