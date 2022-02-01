import React, { useState } from "react";
import axios from "axios";
import Forecast from "./Forecast";
import Weatherdisplay from "./Weatherdisplay";
import "./Search.css";

export default function Search() {
  let [ready, setReady] = useState(false);
  let [city, setCity] = useState(" ");
  let [weather, setWeather] = useState({});

  function showWeather(response) {
    setWeather({
      city: response.data.name,
      country: response.data.sys.country,
      temperature: Math.round(response.data.main.temp),
      feelsLike: Math.round(response.data.main.feels_like),
      wind: Math.round(response.data.wind.speed),
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
      humidity: Math.round(response.data.main.humidity),
      date: new Date(response.data.dt * 1000),
    });
    setReady(true);
  }

  function search() {
    let apiKey = "f6ac59a63eb6c11f9c97a0f9c5fb1033";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
  }

  function handelSubmit(event) {
    event.preventDefault();
    search();
  }

  function handelChange(event) {
    setCity(event.target.value);
  }

  if (ready) {
    return (
      <div className="Navbar">
        <form onSubmit={handelSubmit}>
          <input
            className="cityname"
            type="text"
            placeholder="Enter city name"
            onChange={handelChange}
          />
          <input className="searchbutton" type="submit" value=" 🔎 " />
          <input type="submit" value=" 📍 " />
        </form>
        <Weatherdisplay weather={weather} />
        <Forecast />
      </div>
    );
  } else {
    return (
      <div className="Navbar">
        <form onSubmit={handelSubmit}>
          <input
            className="cityname"
            type="text"
            placeholder="Enter city name"
            onChange={handelChange}
          />
          <input className="searchbutton" type="submit" value=" 🔎 " />
          <input type="submit" value=" 📍 " />
        </form>
        <br />
        Loading...
      </div>
    );
  }
}
