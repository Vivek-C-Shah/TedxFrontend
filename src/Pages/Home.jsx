import React from "react";
import "./Home.css";
import ScrollButton from "../Component/ScrollButton";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import Video from "../Component/video/video.mp4";
import Timer from "../Component/Timer";

const Bg_Video = () => {
  return (
    <>
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: "-1",
        }}
      >
        <source
          src="https://www.tedxpdeu.com/static/media/video.2392a6078a1c4c4da997.mp4"
          type="video/mp4"
        />
      </video>
    </>
  );
};

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
      <Header />
      <Bg_Video />
      <Timer />
      <ScrollButton />
      <Footer />
    </>
  );
};

export default Home;
