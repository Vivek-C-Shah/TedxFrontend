import React from "react";
import Footer from "../../Component/Footer";
import Header2023 from "../../Component/Header2023";
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
          <Header2023 />
          <YearTab />
          <Timer />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home2022;
