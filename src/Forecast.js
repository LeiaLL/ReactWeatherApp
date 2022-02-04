import React, { useState } from "react";
import ForecastDay from "./ForecastDay";
import axios from "axios";
import "./Forecast.css";

export default function Forecast(props) {
  let latitute = props.coordinates.lat;
  let longitute = props.coordinates.lon;
  let [ready, setReady] = useState(false);
  let [forecast, setForecast] = useState(" ");

  function showForecast(response) {
    setForecast(response.data.daily);

    setReady(true);
  }
  console.log(forecast);

  if (ready) {
    return (
      <div className="Forecast">
        <section className="forecast">
          <div className="container">
            <div className="row">
              {forecast.map(function (dailyForecast, index) {
                if (index < 5) {
                  return (
                    <div className="col predicted" key={index}>
                      {" "}
                      <ForecastDay forecast={forecast} />
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </section>
      </div>
    );
  } else {
    let apiKey = "f6ac59a63eb6c11f9c97a0f9c5fb1033";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitute}&lon=${longitute}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showForecast);

    return null;
  }
}
