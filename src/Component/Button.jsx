import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

export function Button() {
  return (
    <a href="https://forms.gle/DBaKhzTS3NPXPyrH7" target="_blank">
      <button className="btn">Book Now</button>
    </a>
  );
}
