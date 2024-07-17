import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeIcon from "../../Assets/homeicons.svg";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

import Home2 from "./Home2";
import Type from "./Type";
import "./home.css";
import DownloadButton from "./DownloadButton";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{paddingBottom: 15}} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>{" "}
                I'M
              </h1>

              <h1 className="heading-name">
                <strong className="main-name"> Tarık ÖNAL</strong>
              </h1>

              <div style={{padding: 10}} className="type">
                <Type/>
              </div>
              {/*<button className="btn-1">*/}
              {/*  <a href="https://drive.google.com/drive/folders/1vATFqG275Grw04FwqWxwP2GtE6BsiZhV" target="_blank"*/}
              {/*     rel="noopener noreferrer">*/}
              {/*    Download CV*/}
              {/*  </a>*/}
              {/*</button>*/}
              <div style={{padding: 20}} className="type">
                <DownloadButton/>
              </div>
            </Col>

            <Col md={5} style={{paddingBottom: 20}}>
              <img
                  src={homeIcon}
                  alt="home pic"
                  className="img-fluid"
                style={{ paddingTop: 50 }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
      <ScrollToTop />
    </section>
  );
}

export default Home;
