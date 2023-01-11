import React from "react";
import { NavLink } from "react-router-dom";
import "../YearTab/YearTab.css";

const SpeakersTab = () => {
  const activeClassName = "activeClassName";
  return (
    <section className="yearTab__container">
      <NavLink
        to={"/speakers-2022"}
        className={({ isActive }) =>
          isActive ? activeClassName : "yearTab__links"
        }
      >
        2022
      </NavLink>
      <NavLink
        to={"/speakers"}
        className={({ isActive }) =>
          isActive ? activeClassName : "yearTab__links"
        }
      >
        2023
      </NavLink>
    </section>
  );
};

export default SpeakersTab;
