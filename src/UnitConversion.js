import React, { useState } from "react";
import "./UnitConversion.css";

export default function UnitConversion(props) {
  const [unit, setUnit] = useState("celcius");
  let temperatureFahrenheit = Math.round((props.temperature * 9) / 5 + 32);

  function convertFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertCelcius(event) {
    event.preventDefault();
    setUnit("celcius");
  }

  if (unit === "celcius") {
    return (
      <span>
        <span>{props.temperature}</span>°
        <span className="measurment">
          °C /{" "}
          <a href="/" onClick={convertFahrenheit}>
            {" "}
            °F
          </a>
        </span>
      </span>
    );
  } else {
    return (
      <span>
        <span>{temperatureFahrenheit}</span>°
        <span className="measurment">
          <a href="/" onClick={convertCelcius}>
            °C{" "}
          </a>
          / °F
        </span>
      </span>
    );
  }
}
