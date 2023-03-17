import React from "react";
import "./sponsers.css";
import { sponsors } from "../sponsors";
import ScrollButton from "../Component/ScrollButton";
import { Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import Footer from "../Component/Footer";
import AboutYearTab from "../Component/AboutYearTab/AboutYearTab";
import Header2023 from "../Component/Header2023";


const RenderMembers = (props) => {
  return props.dept.members.map((member, i) => (
    <Col key={i} lg={6} className="profile">
      <img alt={member.name} src={member.image} className="profile-img" />
      <h3 className="user-name">
        <span>{member.name}</span>
      </h3>
      <h5 className="user-role">{member.description}</h5>

      {/* <div className="member-social-media">
        <a href={member.socials[0]} target="blank">
          <FontAwesomeIcon size="sm" icon={faInstagram}></FontAwesomeIcon>
        </a>
        <a href={member.socials[1]} target="blank">
          <FontAwesomeIcon size="sm" icon={faTwitter}></FontAwesomeIcon>
        </a>
      </div> */}
    </Col>
  ));
};

const RenderDepartment = () => {
  return sponsors.map((dept, i) => (
    <div key={i}>
      <hr style={{ color: "red", height: "2px" }} />
      <Container key={dept.id} className="pro">
        <h2 className="title">{dept.department}</h2>
        <Row className="profiles">
          <RenderMembers dept={dept} />
        </Row>
      </Container>
    </div>
  ));
};

const Teams = () => {
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
        <div>
          <RenderDepartment />
        </div>
        <ScrollButton />
        <Footer />
      </div>
    </>
  );
};

export default Teams;
