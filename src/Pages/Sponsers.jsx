import React from "react";
import "./sponsers.css";
import { sponsors } from "../sponsors.js";
import ScrollButton from "../Component/ScrollButton";
import { Container, Row, Col } from "reactstrap";
import Footer from "../Component/Footer";
import Header2023 from "../Component/Header2023";


const RenderMembers = (props) => {
  return (
    <>
      {
        props.dept.members.map((member, i) => (
    
          <Col key={i} lg={6} className="sponsor__column">

            <img className="sponsor__image" alt={member.name} src={member.image} />
          <h3 className="sponsor__name">
            <span>{member.name}</span>
          </h3>
          {/* <a className="sponsor__contact" href={`tel:+91${member.contactNumber}`}>
            <span>Contact: </span>{member.contactNumber}
          </a> */}
          <div className="sponsor__contact__container">
            <span className="sponsor__contact__text">Contact: </span>
            <a className="sponsor__contact" href={`tel:+91${member.contactNumber}`}>
            {member.contactNumber}
          </a>
          </div>
          <h5 className="sponsor__description" id="description">
            
              {member.description}
            
          </h5>

          {/* <a className="sponsor__link" href={member.link} target="_blank" rel="noopener noreferrer">
            <p className="sponsor__link__text">{member.linkText}</p>
          </a> */}
          <a href={member.link} target="_blank" rel="noopener noreferrer">
          <button className='payment__button'>{member.linkText}</button>
          </a>

          {/* <div>
            <SponsorsDesc desc={member.description} />
          </div> */}
          {/* <div className="member-social-media">
            <a href={member.socials[0]} target="blank">
              <FontAwesomeIcon size="sm" icon={faInstagram}></FontAwesomeIcon>
            </a>
            <a href={member.socials[1]} target="blank">
              <FontAwesomeIcon size="sm" icon={faTwitter}></FontAwesomeIcon>
            </a>
          </div> */}
        </Col>
           
        ))
      }
    </>  
  )
};

const RenderDepartment = () => {
  return sponsors.map((dept, i) => (
    <div key={i}>
      <hr style={{ color: "red", height: "2px" }} />
      <Container className="sponsors__container" key={dept.id}>
        <h2 className="title">{dept.department}</h2>
        <Row className="sponsors__row">
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
