import React, { useState } from "react";
import Weather from "./Weather";
import "./Navbar.css";

export default function Navbar() {
  let [ready, setReady] = useState(false);
  let [city, setCity] = useState(" ");

  function search() {}

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
        <form onSumbit={handelSubmit}>
          <input
            className="cityname"
            type="text"
            placeholder="Enter city name"
            onChange={handelChange}
          />
          <input className="searchbutton" type="submit" value=" 🔎 " />
          <input type="submit" value=" 📍 " />
        </form>
        <Weather city={city} />
      </div>
    );
  } else {
    return (
      <div className="Navbar">
        <form onSumbit={handelSubmit}>
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
