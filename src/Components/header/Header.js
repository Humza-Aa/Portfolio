import { Container, Nav, Navbar } from "react-bootstrap";
import "./header.css";
// import profilePic from "./images/profilepic.JPG";

export default function Header() {
  return (
    <>
      <Navbar className="header_main" sticky="top">
        <Container fluid>
          <Navbar.Brand href="#home">Humza Aamir</Navbar.Brand>
          <Nav className="">
            <Nav.Link href="#home">About</Nav.Link>
            <Nav.Link href="#features">Skills</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
