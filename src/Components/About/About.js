import "./About.css";
import ProfilePic from "./images/profilepic.JPG";
import { Container, Image } from "react-bootstrap";

export default function About() {
  return (
    <>
      <Container id="AboutSection" className="AboutCont" fluid>
        <Container className="AboutHeader">
          <div>
            <div className="UnderLine">
              <h2>About Me</h2>
            </div>
          </div>
          <div className="AboutText">
            <p>
              Hi there! My name is Humza and I am a fourth-year Computer Engineering
              student at York University, I have developed a strong foundation
              in web development over the past year. I have gained experience in
              designing and building static single page applications, as well as
              creating responsive and interactive full stack applications. I
              have had the privilege of working as a web developer at Excel
              Lassonde, a major club at York University, and am excited to be
              pursuing an internship as a full stack developer at Project Human
              City.
            </p>
            <div>
              <p>Some Tools I use on a daily basics:</p>
              <div className="ListDiv">
                <div>
                  <ol>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Node.js</li>
                  </ol>
                </div>
                <div className="List2">
                  <ol>
                    <li>MongoDB</li>
                    <li>HTML</li>
                    <li>CSS/Sass</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </Container>
        <Container className="PicDiv">
          <Image className="ProfilePic" src={ProfilePic} thumbnail></Image>
        </Container>
      </Container>
    </>
  );
}
