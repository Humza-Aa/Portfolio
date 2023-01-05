import "./Project.css";
import { Container, Row, Col } from "react-bootstrap";

export default function Projects() {
  return (
    <>
      <Container id="ProjectCont" className="MainContainer" fluid>
        {/* <div className="ProjectContentDiv"> */}
        <Container fluid className="ProjectTitleCont">
          <div className="ProjectTitleDiv">
            <h2>Projects</h2>
          </div>
        </Container>
        <div className="ProjectsDiv">
          <Row>
            <Col>sm=true</Col>
            <Col>sm=true</Col>
            <Col>sm=true</Col>
          </Row>
        </div>
        {/* </div> */}
      </Container>
    </>
  );
}
