import React from "react";
import "./Signature.css";

export default function Signature() {
  return (
    <div className="signature">
      Open-source code on{" "}
      <a
        href="https://github.com/LeiaLL/ReactWeatherApp.git"
        target="_blank"
        rel="noreferrer"
      >
        Github
      </a>{" "}
      by{" "}
      <a href="lealueders.eu" target="_blank" rel="noreferrer">
        {" "}
        Lea Lüders{" "}
      </a>
      and hosted on
      <a href="https://www.netlify.com" target="_blank" rel="noreferrer">
        {" "}
        Netlify{" "}
      </a>
    </div>
  );
}
