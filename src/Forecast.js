import React from "react";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast">
      <section className="forecast">
        <div className="container">
          <div className="row">
            <div className="col predicted">
              <div className="day">
                <strong> Today </strong>
              </div>

              <div className="weatherEmoji">⛅️</div>
              <div className="highlow">
                <span>
                  <strong>
                    {" "}
                    <span> 12</span>°{" "}
                  </strong>
                </span>
                <span>
                  {" "}
                  <span> 8</span>°
                </span>
              </div>
            </div>
            <div className="col predicted">
              <div className="day">Tommorrow</div>

              <div className="weatherEmoji">🌤</div>
              <div className="highlow">
                <strong> 19° </strong>
                13°
              </div>
            </div>
            <div className="col predicted">
              <div className="day">Monday</div>

              <div className="weatherEmoji">☀️</div>
              <div className="highlow">
                <strong> 17° </strong>
                11°
              </div>
            </div>
            <div className="col predicted">
              <div className="day">Tuesday</div>

              <div className="weatherEmoji">🌧</div>
              <div className="highlow">
                <strong> 13° </strong>
                9°
              </div>
            </div>
            <div className="col predicted">
              <div className="day">Wednesday</div>

              <div className="weatherEmoji">🌧</div>
              <div className="highlow">
                <strong> 15° </strong>
                9°
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
