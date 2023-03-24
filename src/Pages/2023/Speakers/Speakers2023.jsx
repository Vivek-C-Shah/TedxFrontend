import React from "react";
import Footer from "../../../Component/Footer";
import ScrollButton from "../../../Component/ScrollButton";
import SpeakersTab from "../../../Component/SpeakersYearTab/SpeakersTab";
import "./Speakers2023.css";
import { Container, Row, Col } from "react-bootstrap";
import Header2023 from "../../../Component/Header2023";

const data = [
  {
    name: "Bhavya Gandhi",
    dict: "images/Speakers 2023/Bhavya.png",
    title: "Actor",
    socials: ["#", "#", "#"],
  },
  {
    name: "Dr. Paul Salins",
    dict: "images/Speakers 2023/Dr.-Paul.webp",
    title: "Medical Director - MSMC",
    socials: ["#", "#", "#"],
  },
  {
    name: "Sudeep Chawla",
    dict: "images/Speakers 2023/Sudeep.png",
    title: "VP (Marketing) - Pidilite",
    socials: ["#", "#", "#"],
  },
  {
    name: "Kuldip Singh Kaler",
    dict: "images/Speakers 2023/Chetan_22.png",
    title: "Author and Influencer",
    socials: ["#", "#", "#"],
  },
  {
    name: "Kartikeya Sarabhai",
    dict: "images/Speakers 2023/Kartikeya.png",
    title: "Environmentalist",
    socials: ["#", "#", "#"],
  },
  {
    name: "Kshitij Gupta",
    dict: "images/Speakers 2023/Kshitij_2.png",
    title: "NFT artist | Founder - PolygonInu",
    socials: ["#", "#", "#"],
  },
  {
    name: "Chetan Tambe",
    dict: "images/Speakers 2023/Chetan.png",
    title: "Sportsperson | Fit India Ambassador",
    socials: ["#", "#", "#"],
  },
  {
    name: "Jignya Vyas",
    dict: "images/Speakers 2023/Jigna Vyas.png",
    title: "Theatre Artist",
    socials: ["#", "#", "#"],
  },
  {
    name: "Mira Erda",
    dict: "images/Speakers 2023/Mira Edra.png",
    title: "F4 Racer",
    socials: ["#", "#", "#"],
  },
  {
    name: "Priyanka Agarwal Mehta",
    dict: "images/Speakers 2023/Priyanka Agarwal Mehta.png",
    title: "Author, Founder of 'Sam' and 'Mi'",
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
        <Header2023 />
        {/* <YearTab /> */}
        <SpeakersTab />
        <h1>OUR SPEAKERS</h1>
        <Container>
          <Row className="gy-5">
            {data.map((spk) => (
              <Col lg={4} sm={5} className="box">
                <div className="subcontainer">
                  <img className="speaker-img" alt={spk.name} src={spk.dict} />
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
