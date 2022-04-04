import React, { useEffect, useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import Footer from "../Component/Footer";
import Header from "../Component/Header";
import ScrollButton from "../Component/ScrollButton";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./speakers.css";

const data = [
  {
    name: "Sanam Kapoor",
    dict: "images/SpeakersImg/Sanam.jpg",
    title: "Founder - La Pinoz Pizza",
    socials: ["#", "#", "#"],
  },
  {
    name: "Ash King",
    dict: "images/SpeakersImg/Ash.jpg",
    title: "Singer and Song Writer",
    socials: [
      "https://twitter.com/iamashking?lang=en",
      "https://www.instagram.com/ashkinglive/?hl=en",
      "#",
    ],
  },
  {
    name: "Berty Ashley",
    dict: "images/SpeakersImg/Berty.jpg",
    title: "Molecular Biologist / Quiz Master",
    socials: [
      "https://mobile.twitter.com/bertyashley",
      "#",
      "https://www.facebook.com/berty.ashley",
    ],
  },
  {
    name: "Sandhya Koushika",
    dict: "images/SpeakersImg/Sandhya.jpg",
    title: "Neuroscientist",
    socials: ["https://mobile.twitter.com/wormlockholmes", "#", "#"],
  },
  {
    name: "Hunny Bhagchandani",
    dict: "images/SpeakersImg/Honey.jpg",
    title: "Founder - Torchit",
    socials: [
      "https://twitter.com/hunny_jb?lang=en",
      "https://www.instagram.com/hunny_jb/?hl=en",
      "https://www.facebook.com/hunny.bhagchandani",
    ],
  },
  {
    name: "Navneet Gill",
    dict: "images/SpeakersImg/Navneet.jpg",
    title: "Founder - Nini's Kitchen",
    socials: ["#", "#", "#"],
  },
  {
    name: "Viral Desai",
    dict: "images/SpeakersImg/Viral.jpg",
    title: "Environmentalist",
    socials: ["#", "#", "#"],
  },
  {
    name: "Edward Sonnenblick",
    dict: "images/SpeakersImg/Edward.jpg",
    title: "Actor, Artist & Comedian",
    socials: ["#", "https://www.instagram.com/edwardsonnenblick/?hl=en", "#"],
  },
  {
    name: "Dr. Pooja Thomas",
    dict: "images/SpeakersImg/Pooja.png",
    title: "Professor - MICA",
    socials: [
      "https://www.mica.ac.in/pooja-thomas",
      "https://www.mica.ac.in/pooja-thomas",
      "https://www.mica.ac.in/pooja-thomas",
    ],
  },
];

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
        <h1>OUR SPEAKERS</h1>
        <Container>
          <Row className="gy-5">
            {data.map((spk) => (
              <Col lg={4} sm={5} className="box">
                <div className="subcontainer">
                  <img className="speaker-img" alt="dog" src={spk.dict} />
                  <h2 className="speaker-name">{spk.name}</h2>
                  <h3 className="speaker-title">{spk.title}</h3>
                  <div className="socials">
                    <a href={spk.socials[0]} target="blank">
                      <i class="fab fa-twitter fa-md social-icon"></i>
                    </a>
                    <a href={spk.socials[1]} target="blank">
                      <i class="fab fa-instagram fa-md social-icon"></i>
                    </a>
                    <a href={spk.socials[2]} target="blank">
                      <i class="fab fa-facebook fa-md social-icon"></i>
                    </a>
                  </div>
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

export default Speakers;
