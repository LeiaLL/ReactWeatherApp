import React from "react";
import "./Weatherdisplay.css";

export default function Weatherdisplay() {
  return (
    <div className="Weatherdisplay">
      <div className="row">
        <div className="col-7">
          <section className="main">
            <h5>
              <span> Leeds</span>,<span> GB</span>
            </h5>
            <p className="weather">
              <span className="weather">Last updated: Today 14:34pm</span>
              <br />
              <span className="weather">Partly Cloudy</span>
            </p>
            <br />
            <h1>
              <strong>
                <span className="current-weater-icon">☁️</span>
                <span>17</span>°
              </strong>
              <span className="measurment">
                <a href="/" className="active">
                  °C
                </a>{" "}
                / <a href="/">°F</a>
              </span>
            </h1>
          </section>
        </div>
        <div className="col-5">
          <ul>
            <li>
              Feels like: <span> 15</span> °C
            </li>
            <li>
              Wind: <span> 3</span>
              <span> km/h </span>
            </li>
            <li>
              Humidity: <span> 15</span> %
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
