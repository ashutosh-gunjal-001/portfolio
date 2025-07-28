import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Welcome - I'm Ashutosh, <br/><span className="purple"> a Full-Stack, AI & Robotics Developer. </span>
            </h1>
            <p className="home-about-body">
            I’m a <span className="purple">Full-Stack Developer, AI Enthusiast, and Robotics Innovator</span> with hands-on experience in building modern, scalable solutions across multiple domains.
            <br/><br/>
            On the web development front, I specialize in crafting responsive and dynamic applications using <span className="purple">HTML, CSS, JavaScript, and frameworks like React, MERN Stack, and Firebase, with backend APIs powered by FastAPI and Node.js.</span>
            <br/><br/>
            My AI journey involves working with PyTorch to develop intelligent models and integrating AI capabilities through custom and third-party API implementations.
            <br/><br/>
            In the field of Robotics, I enjoy prototyping embedded systems using the Arduino IDE, integrating various sensors, and designing interactive physical computing projects.
            <br/><br/>
            I thrive at the intersection of software, intelligence, and hardware — constantly exploring how each can enhance the other.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/ashutosh-gunjal-001"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ashutosh-gunjal-7a2b8228b/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/ashutosh_gunjal_10/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
