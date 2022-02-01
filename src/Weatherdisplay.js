import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import "./Weatherdisplay.css";

export default function Weatherdisplay(props) {
  return (
    <div className="Weatherdisplay">
      <div className="row">
        <div className="col-7">
          <section className="main">
            <h5>
              <span> {props.weather.city}</span>,
              <span> {props.weather.country}</span>
            </h5>
            <p className="weather">
              <span className="weather">
                <FormattedDate />
              </span>
              <span className="weather">{props.weather.description}</span>
            </p>
            <br />
            <h1>
              <strong>
                <span className="current-weater-icon">
                  {" "}
                  <WeatherIcon
                    icon={props.weather.icon}
                    description={props.weather.description}
                  />
                </span>
                <span>{props.weather.temperature}</span>°
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
              Feels like: <span> {props.weather.feelsLike}</span> °C
            </li>
            <li>
              Wind: <span> {props.weather.wind}</span>
              <span> km/h </span>
            </li>
            <li>
              Humidity: <span> {props.weather.humidity}</span> %
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
