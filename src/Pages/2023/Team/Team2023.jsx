import React from "react";
import "./Team.css";
import { team } from "../../../team2023";
import ScrollButton from "../../../Component/ScrollButton";
import { Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import Header from "../../../Component/Header";
import Footer from "../../../Component/Footer";
import YearTab from "../../../Component/YearTab/YearTab";
import AboutYearTab from "../../../Component/AboutYearTab/AboutYearTab";

const RenderMembers = (props) => {
  return props.dept.members.map((member) => (
    <Col lg={6} className="profile">
      <img src={member.image} className="profile-img" />
      <h3 className="user-name">
        <span>{member.name}</span>
      </h3>
      <h5 className="user-role">{member.role}</h5>

      <div className="member-social-media">
        <a href={member.socials[0]} target="blank">
          <FontAwesomeIcon size="sm" icon={faInstagram}></FontAwesomeIcon>
        </a>
        <a href={member.socials[1]} target="blank">
          <FontAwesomeIcon size="sm" icon={faTwitter}></FontAwesomeIcon>
        </a>
      </div>
    </Col>
  ));
};

const RenderDepartment = () => {
  return team.map((dept) => (
    <>
      <hr style={{ color: "red", height: "2px" }} />
      <Container key={dept.id} className="pro">
        <h2 className="title">{dept.department}</h2>
        <Row className="profiles">
          <RenderMembers dept={dept} />
        </Row>
      </Container>
    </>
  ));
};

const Team2023 = () => {
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
        {/* <AboutYearTab /> */}
        <div>
          <h1 className="heading">Meet Our Team</h1>
          <RenderDepartment />
        </div>
        <ScrollButton />
        <Footer />
      </div>
    </>
  );
};

export default Team2023;
