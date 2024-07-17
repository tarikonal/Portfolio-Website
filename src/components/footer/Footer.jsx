import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import "./footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright"></Col>
        <Col md="4" className="footer-copywright">
          <span>
            All right reserved {" "}
            <i className="primary-header">{currentYear}</i>
          </span>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                style={{ color: `var(--clr-primary)` }}
                className="github"
                href="https://github.com/tarikonal"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="github"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                style={{ color: `var(--clr-primary)` }}
                className="twitter"
                href="https://twitter.com/tarikonal"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="twitter"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                style={{ color: `var(--clr-primary)` }}
                className="email"
                href="mailto:tarik.onal@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="email"
              >
                <AiOutlineMail />
              </a>
            </li>
            <li className="social-icons">
              <a
                style={{ color: `var(--clr-primary)` }}
                className="linkedin"
                href="https://www.linkedin.com/in/tarikonal/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="linkedin"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                style={{ color: `var(--clr-primary)` }}
                className="instagram"
                href="https://www.instagram.com/onal.tarik/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="instagram"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

const CurrentYear = () => {
  const year = new Date().getFullYear();

  return (
      <div>
        {year}
      </div>
  );
};
export default Footer;
