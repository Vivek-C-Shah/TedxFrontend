import React, { useEffect, useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import Footer from "../Component/Footer";
import Header from "../Component/Header";
import ScrollButton from "../Component/ScrollButton";
import "./speakers.css";

const Speakers = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      {scrollToTop()}
      <div id="particles-js">
        <Header />
        <h1 className="heading-dis">Comming Soon!!!</h1>
        <h1 className="heading-dis">Stay Tuned!!!</h1>

        <ScrollButton />
        <Footer />
      </div>
    </>
  );
};

export default Speakers;
