import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

export function Button() {
  return (
    <Link
      to={"/payment"}
    >
      <button className="btn">Book Now</button>
    </Link>
  );
}
