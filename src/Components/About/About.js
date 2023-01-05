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
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
              eligendi animi provident et qui alias natus error dolorem,
              obcaecati corrupti! Numquam nostrum repudiandae magnam ipsum
              blanditiis iure hic, sint fugit. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Minima odit corporis libero
              reprehenderit recusandae tempora porro itaque facilis dolorem
              temporibus magni culpa ullam, quae quo non id aliquid distinctio
              quas.
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
                    <li>CSS</li>
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
