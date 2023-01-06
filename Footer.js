import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./../css/Footer.css";
import {AiFillGithub} from "react-icons/ai";
import {SiCodechef} from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed by Nidhi Verma </h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © 2023 NV</h3>
        </Col>
        <Col  className="footer-copywright">
         <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Nidhiverma91"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/nidhi-verma-9ab11116a/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.codechef.com/users/code_v12"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <SiCodechef/>
                </a>
              </li>
            </ul>
        </Col>
      
      </Row>
    </Container>
  );
}

export default Footer;