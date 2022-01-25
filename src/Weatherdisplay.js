import React from "react";
import "./Weatherdisplay.css";

import WeatherdisplayL from "./WeatherdisplayL";
import WeatherdisplayR from "./WeatherdisplayR";

export default function Weatherdisplay() {
  return (
    <div className="Weatherdisplay">
      <div className="row">
        <div className="col-7">
          <WeatherdisplayR />
        </div>
        <div className="col-5">
          <WeatherdisplayL />
        </div>
      </div>
    </div>
  );
}
