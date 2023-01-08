import { Container, Row, Button } from "react-bootstrap";
import "./intro_page.css";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ParticleBg from "./Particles/Particles";

export default function Intro_Page() {
  return (
    <>
      <ParticleBg />
      <Container fluid id="titleCon" className="titleCon">
        <Row className="titleRow">
          <h1 className="IntroText">
            Hello, I'm <span className="highLight">Humza Aamir</span> <br />
            I'm a full-stack web developer
          </h1>
          <Button
            href="#AboutSection"
            className="IntroBtn"
            variant="outline-secondary"
          >
            Learn more about me
            <FontAwesomeIcon className="RightArrow" icon={faArrowRight} />
          </Button>{" "}
        </Row>
      </Container>
    </>
  );
}
