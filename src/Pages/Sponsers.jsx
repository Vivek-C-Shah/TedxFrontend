import React from "react";
import Footer from "../Component/Footer";
import Header2023 from "../Component/Header2023";
import ScrollButton from "../Component/ScrollButton";
import "./sponsers.css";

const Sponsers = () => {
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
        <Header2023 />
        <h1 className="heading-dis">Coming Soon!!!</h1>
        <h1 className="heading-dis">Stay Tuned!!!</h1>
        <ScrollButton />
        <Footer />
      </div>
    </>
  );
};

export default Sponsers;
