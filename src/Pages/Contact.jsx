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
import Header from "../Component/Header";
import Footer from "../Component/Footer";

const Contact = () => {
  const [sent, setSent] = useState("");
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const url = "https://tedxpdeus.herokuapp.com";

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
    console.log(i);
    if (i.status === 201) {
      console.log("Contact Sent");
      setEmail("");
      setName("");
      setNo("");
      setMess("");
      setSent("Your Message has been sent , We will contact you soon , Thankyou !!");
    }
  };

  return (
    <>
      {/* {scrollToTop()} */}
      <div id="particles-js">
        <Header />
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
                      <span className="ll">Priyansh Tratiya</span> :{" "}
                      <a href="tel:+919408990628">9408990628</a>
                      <br></br>
                      <span className="ll">Sachin Gupta</span> :{" "}
                      <a href="tel:+917016077032">7016077032</a>{" "}
                    </address>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col md={6} className="form-col">
              <h1>CONTACT US</h1>
              <form onSubmit={handleSubmit} id="contact_form">
                <div className="name">
                  <label for="name"></label>
                  <input
                    value={name}
                    type="text"
                    placeholder="Name"
                    name="name"
                    id="name_input"
                    required
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="email">
                  <label for="email"></label>
                  <input
                    value={email}
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
                    value={no}
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
                    value={mess}
                    placeholder="I'd like to know about"
                    id="message_input"
                    cols="30"
                    rows="5"
                    required
                    onChange={(e) => setMess(e.target.value)}
                  ></textarea>
                </div>
                <p style={{
                  color:"green"
                }}>{sent}</p>
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
