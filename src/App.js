import "bootstrap/dist/css/bootstrap.min.css";
// import { Container, Row, Col } from "react-bootstrap";
import "./App.css";
import Header from "./Components/header/Header";
import IntroPage from "./Components/Intro_Page/IntroPage";
import About from "./Components/About/About";
import Project from "./Components/Projects/Project";

function App() {
  return (
    <>
      <IntroPage />
      <Header />
      <About />
      <Project />
    </>
  );
}

export default App;
