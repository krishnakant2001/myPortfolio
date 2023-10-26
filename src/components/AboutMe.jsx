import React from "react";
import Modal from "./Modal";
import AboutMeContent from "./AboutMeContent";

const AboutMe = (props) => {
  return (
    <Modal onClose={props.onCloseAbout}>
      <AboutMeContent/>
    </Modal>
  );
};

export default AboutMe;
