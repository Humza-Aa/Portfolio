import Header from "./Components/header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Container, Row, Col } from "react-bootstrap";
import "./App.css";
import IntroPage from "./Components/Intro_Page/IntroPage";
import About from "./Components/About/About";
function App() {
  return (
    <>
      <IntroPage />
      <Header />
      <About />
    </>
  );
}

export default App;
