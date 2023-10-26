import React, { useRef, useState } from "react";
import Hero from "./components/Hero";
import Who from "./components/Who";
import Works from "./components/Works";
import Contact from "./components/Contact";
import styled from "styled-components";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  color: white;
  background: url("./img/bg.jpg");
  background-size: cover;
  background-repeat: no-repeat;
`;
const Back = styled.div`
  position: fixed;
  font-size: 495px;
  color: transparent;
  -webkit-text-stroke: 1px white;
  opacity: 0.09;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: -10px;

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 4;
`;
const Backed = styled.div`
  position: fixed;
  font-size: 400px;
  color: transparent;
  -webkit-text-stroke: 1px white;
  opacity: 0.12;
  height: 100vh;
  width: 100vw;
  left: 32px;

  display: flex;

  z-index: 1;
`;
const App = () => {
  const [showMe, setShowMe] = useState(false);
  const [showProjects, setShowProjects] = useState(false);

  const showMeHandler = () => {
    setShowMe(true);
  };

  const hideMeHandler = () => {
    setShowMe(false);
  };

  const showProjectsHandler = () => {
    console.log("click");
    setShowProjects(true);
  };

  const hideProjectsHandler = () => {
    setShowProjects(false);
  };

  const scrollRef = useRef();

  const showMeContact = (e) => {
    e.current.scrollIntoView({
      behaviour: "smooth",
    });
  };

  return (
    <Container>
      <Backed>18</Backed>
      <Back>striker</Back>
      <Hero
        onShowAbout={showMeHandler}
        onShowContact={() => showMeContact(scrollRef)}
      />
      {showMe && <AboutMe onCloseAbout={hideMeHandler} />}

      <Who onShowProjects={showProjectsHandler} />
      {showProjects && <Projects onCloseProjects={hideProjectsHandler} />}

      <Works />

      <div ref={scrollRef}>
        <Contact />
      </div>
    </Container>
  );
};

export default App;
