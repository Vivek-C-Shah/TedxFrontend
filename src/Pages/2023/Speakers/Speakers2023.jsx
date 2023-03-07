import React from "react";
import Footer from "../../../Component/Footer";
import Header from "../../../Component/Header";
import ScrollButton from "../../../Component/ScrollButton";
import SpeakersTab from "../../../Component/SpeakersYearTab/SpeakersTab";
import "./Speakers2023.css";
import { Container, Row, Col } from "react-bootstrap";


const data = [
  {
    name: "Dr. Paul Salins",
    dict: "images/Speakers 2023/Dr.-Paul.webp",
    title: "Surgeon",
    socials: ["#", "#", "#"],
  },
  {
    name: "Sudeep Chawla",
    dict: "images/Speakers 2023/Sudeep.jpg",
    title: "VP (Marketing) - Pidilite",
    socials: ["#", "#", "#"],
  },
  {
    name: "Kartikeya Sarabhai",
    dict: "images/Speakers 2023/Kartikeya.jpg",
    title: "Environmentalist",
    socials: ["#", "#", "#"],
  },
  {
    name: "Kuldip Singh Kaler",
    dict: "images/Speakers 2023/Kuldip.png",
    title: "Author and Influencer",
    socials: ["#", "#", "#"],
  },
  
];

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
        {/* <YearTab /> */}
        <SpeakersTab />
        <h1>OUR SPEAKERS</h1>
        <Container>
          <Row className="gy-5">
            {data.map((spk) => (
              <Col lg={4} sm={5} className="box">
                <div className="subcontainer">
                  <img className="speaker-img" alt="dog" src={spk.dict} />
                  <h2 className="speaker-name">{spk.name}</h2>
                  <h3 className="speaker-title">{spk.title}</h3>
                  {/* <div className="socials">
                    <a href={spk.socials[0]} target="blank">
                      <i class="fab fa-twitter fa-md social-icon"></i>
                    </a>
                    <a href={spk.socials[1]} target="blank">
                      <i class="fab fa-instagram fa-md social-icon"></i>
                    </a>
                    <a href={spk.socials[2]} target="blank">
                      <i class="fab fa-facebook fa-md social-icon"></i>
                    </a>
                  </div> */}
                </div>
              </Col>
            ))}
          </Row>
        </Container>
        <ScrollButton />
        <Footer />
      </div>
    </>
  );
};

export default Speakers2023;
