import React from "react";
import Footer from "../../../Component/Footer";
import Header from "../../../Component/Header";
import ScrollButton from "../../../Component/ScrollButton";
import SpeakersTab from "../../../Component/SpeakersYearTab/SpeakersTab";
import "./Speakers2023.css";

const Speakers2023 = () => {
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
        <SpeakersTab />
        <h1 className="heading-dis">Coming Soon!!!</h1>
        <h1 className="heading-dis">Stay Tuned!!!</h1>
        <ScrollButton />
        <Footer />
      </div>
    </>
  );
};

export default Speakers2023;
