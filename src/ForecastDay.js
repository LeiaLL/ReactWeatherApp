import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
  function maxTemperature() {
    let maxTemp = Math.round(props.forecast.temp.max);
    return `${maxTemp}°`;
  }

  function minTemperature() {
    let minTemp = Math.round(props.forecast.temp.min);
    return `${minTemp}°`;
  }

  function day() {
    let date = new Date(props.forecast.dt * 1000);
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let day = days[date.getDay()];

    return day;
  }

  console.log(props.index);

  if (props.index === 0) {
    return (
      <div>
        <div className="day">Today</div>
        <div className="weatherEmoji">
          {" "}
          <WeatherIcon icon={props.forecast.weather[0].icon} />
        </div>
        <div className="highlow">
          <span>
            {" "}
            <strong>
              {" "}
              <span> {maxTemperature()} </span>
            </strong>
          </span>
          <span>{minTemperature()}</span>
        </div>
      </div>
    );
  } else if (props.index === 1) {
    return (
      <div>
        <div className="day">Tommorow</div>
        <div className="weatherEmoji">
          {" "}
          <WeatherIcon icon={props.forecast.weather[0].icon} />
        </div>
        <div className="highlow">
          <span>
            {" "}
            <strong>
              {" "}
              <span> {maxTemperature()} </span>
            </strong>
          </span>
          <span>{minTemperature()}</span>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="day">{day()}</div>
        <div className="weatherEmoji">
          {" "}
          <WeatherIcon icon={props.forecast.weather[0].icon} />
        </div>
        <div className="highlow">
          <span>
            {" "}
            <strong>
              {" "}
              <span> {maxTemperature()} </span>
            </strong>
          </span>
          <span>{minTemperature()}</span>
        </div>
      </div>
    );
  }
}
