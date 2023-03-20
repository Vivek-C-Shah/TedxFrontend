import React, { useState } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faAddressCard,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import "./Contact.css";
import ScrollButton from "../Component/ScrollButton";
import Footer from "../Component/Footer";
import Header2023 from "../Component/Header2023";

const Contact = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const url = "https://tedpdeu.herokuapp.com";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [no, setNo] = useState("");
  const [mess, setMess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const i = await axios.post(url + "/addContact", {
      Name: name,
      Email: email,
      ContactNo: no,
      Query: mess,
    });
    // console.log(i);
    if (i.status === 201) {
      console.log("Contact Sent");
      window.location.reload();
    }
  };

  return (
    <>
      {scrollToTop()}
      <div id="particles-js">
        <Header2023 />
        <Container className="contact-us-container">
          <Row>
            <Col md={6} className="d-flex align-items-center">
              <Row className="contact-info">
                <Col md={12} xs={12}>
                  <div className="contact-box">
                    <h2 className="contact-box-h2">Address</h2>
                    <FontAwesomeIcon
                      className="info-icon fa-lg d-lg-none d-md-none d-sm-none"
                      icon={faAddressCard}
                    ></FontAwesomeIcon>
                    <address>
                      <a href="https://g.page/pdeuofficial?share">
                        PDPU Rd Gandhinagar, Gujarat 382007,<br></br> Knowledge
                        Corridor, Raisan Village,<br></br> Pandit Deendayal
                        Energy University (PDEU)
                      </a>
                    </address>
                  </div>
                </Col>
                <Col md={12} xs={12}>
                  <div className="contact-box">
                    <h2 className="contact-box-h2">Email</h2>
                    <FontAwesomeIcon
                      className="info-icon fa-lg d-lg-none d-md-none d-sm-none"
                      icon={faEnvelope}
                    ></FontAwesomeIcon>
                    <address>
                      <a href="mailto:tedxpdeuorganizers@gmail.com">
                        tedxpdeuorganizers@gmail.com
                      </a>
                    </address>
                  </div>
                </Col>
                <Col md={12} xs={12}>
                  <div className="contact-box">
                    <h2 className="contact-box-h2">Phone</h2>
                    <FontAwesomeIcon
                      className="info-icon fa-lg d-lg-none d-md-none d-sm-none"
                      icon={faPhone}
                    ></FontAwesomeIcon>
                    <address>
                      <span className="ll">Anish Sil</span> :{" "}
                      <a href="tel:+917048729570">7048729570</a>
                      <br></br>
                      <span className="ll">Vraj Shah</span> :{" "}
                      <a href="tel:+919662261113">9662261113</a>{" "}
                      <br></br>
                      <span className="ll">Tanmay Desai</span> :{" "}
                      <a href="tel:+917621805242">7621805242</a>{" "}
                    </address>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col md={6} className="form-col">
              <h1>CONTACT US</h1>
              <form onSubmit={handleSubmit} id="contact_form">
                <div className="name">
                  <label htmlFor="name"></label>
                  <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    id="name_input"
                    required
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="email">
                  <label htmlFor="email"></label>
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    id="email_input"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="telephone">
                  <label for="name"></label>
                  <input
                    type="text"
                    placeholder="Contact Number"
                    name="telephone"
                    id="telephone_input"
                    required
                    onChange={(e) => setNo(e.target.value)}
                  />
                </div>
                <div className="message">
                  <label for="message"></label>
                  <textarea
                    name="message"
                    placeholder="I'd like to know about"
                    id="message_input"
                    cols="30"
                    rows="5"
                    required
                    onChange={(e) => setMess(e.target.value)}
                  ></textarea>
                </div>
                <div className="submit">
                  <input type="submit" value="Send Message" id="form_button" />
                </div>
              </form>
            </Col>
          </Row>
        </Container>
        <ScrollButton />
        <Footer />
      </div>
    </>
  );
};

export default Contact;
