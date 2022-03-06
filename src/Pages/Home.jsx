import React from "react";
import "./Home.css";
import ScrollButton from "../Component/ScrollButton";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import Timer from "../Component/Timer";

const Home = () => {
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
        <div className="backi">
          <Header />
          <Timer />
          <ScrollButton />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
