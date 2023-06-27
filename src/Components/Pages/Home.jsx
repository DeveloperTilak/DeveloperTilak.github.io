import React from "react";
import "../CSS/Home.css";
import { Container } from "@chakra-ui/layout";
import { Link } from "react-router-dom";
import Btn from "../SubComponents/Btn";
import DownloadBtn from "../SubComponents/DownloadBtn";
 

function Home(props) {
  return (
    <section className="home">
      <div className="homeTitle">
        <h2>Welcome to the world of Tilak,</h2>

        <p className="homeTag1">Your versatile Fullstack Web Developer!</p>
        <p className="homeTag2">
          As a fresh and ambitious Full Stack Web Developer, I am dedicated to
          creating <br />
          comprehensive solutions for websites and web applications.
        </p>
      <Container>
       <Link to= "/project"> <Btn text = "Project"  /></Link>
       <DownloadBtn />
      </Container>
      </div>
    </section>
  );
}

export default Home;
