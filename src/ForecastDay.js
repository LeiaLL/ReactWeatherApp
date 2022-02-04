import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
  function maxTemperature() {
    let maxTemp = Math.round(props.forecast[0].temp.max);
    return `${maxTemp}°`;
  }

  function minTemperature() {
    let minTemp = Math.round(props.forecast[0].temp.min);
    return `${minTemp}°`;
  }

  function day() {
    let date = new Date(props.forecast[0].dt * 1000);
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

  return (
    <div>
      <div className="day">{day()}</div>
      <div className="weatherEmoji">
        {" "}
        <WeatherIcon icon={props.forecast[0].weather[0].icon} />
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
