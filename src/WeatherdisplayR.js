import React from "react";

export default function WeatherdisplayL() {
  return (
    <div className="WeatherdisplayL">
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
  );
}
