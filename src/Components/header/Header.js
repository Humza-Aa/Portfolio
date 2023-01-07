import { Container } from "react-bootstrap";
import { useEffect } from "react";
import "./header.css";
// import profilePic from "./images/profilepic.JPG";

export default function Header() {
  useEffect(() => {
    const items = document.querySelectorAll(".HeaderL");
    items.forEach((item) => {
      item.addEventListener("click", () => {
        document.querySelector(".ActiveLink").classList.remove("ActiveLink");
        item.classList.add("ActiveLink");
      });
    });
    console.log(items);
  }, []);

  return (
    <>
      <Container id="LinksHeader" className="LinksHeader" fluid>
        <a href="#titleCon">
          <div className="HeaderL ActiveLink">Home</div>
        </a>
        <a href="#AboutSection">
          <div className="HeaderL">About</div>
        </a>
        <a href="#ProjectCont">
          <div className="HeaderL">Projects</div>
        </a>
        <a href="#ContactCont">
          <div className="HeaderL">Contact</div>
        </a>
      </Container>
    </>
  );
}
