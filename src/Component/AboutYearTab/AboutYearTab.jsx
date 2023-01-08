import React from "react";
import { NavLink } from "react-router-dom";
import "../YearTab/YearTab.css";

const AboutYearTab = () => {
  const activeClassName = "activeClassName";
  return (
    <section className="yearTab__container">
      <NavLink
        to={"/teams/2022"}
        className={({ isActive }) =>
          isActive ? activeClassName : "yearTab__links"
        }
      >
        2022
      </NavLink>
      <NavLink
        to={"/teams"}
        className={({ isActive }) =>
          isActive ? activeClassName : "yearTab__links"
        }
      >
        2023
      </NavLink>
    </section>
  );
};

export default AboutYearTab;
