import React from "react";
import { NavLink } from "react-router-dom";
import "./YearTab.css";

const YearTab = () => {
  const activeClassName = "activeClassName";
  return (
    <section className="yearTab__container">
      <NavLink
        to={"/2022"}
        className={({ isActive }) =>
          isActive ? activeClassName : "yearTab__links"
        }
      >
        2022
      </NavLink>
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          isActive ? activeClassName : "yearTab__links"
        }
      >
        2023
      </NavLink>
    </section>
  );
};

export default YearTab;
