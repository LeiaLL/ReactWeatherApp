import React from "react";

export default function Navbar() {
  return (
    <div className="Navbar">
      <form>
        <input className="cityname" type="text" placeholder="Enter city name" />
        <input className="searchbutton" type="submit" value=" 🔎 " />
        <input type="submit" value=" 📍 " />
      </form>
    </div>
  );
}
