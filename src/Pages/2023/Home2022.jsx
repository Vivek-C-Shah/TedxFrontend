import React from "react";
import Footer from "../../Component/Footer";
import Header from "../../Component/Header";
import YearTab from "../../Component/YearTab/YearTab";
import Timer from "./Timer/Timer";

const Home2022 = () => {
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
          <YearTab />
          <Timer />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home2022;
