import { Fragment } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const Back = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.7);
`;

const ModalView = styled.div`
  position: fixed;
  top: 8vh;
  left: 4%;
  right: 4%;
  margin: auto;
  
  height: 80vh;
  width: 80%;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 30;
  animation: slide-down 300ms ease-out forwards;

  @keyframes slide-down {
    0% {
      opacity: 0;
      transform: translateY(-3rem);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Backdrop = (props) => {
  return <Back onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
  return (
    <ModalView>
      <div>{props.children}</div>
    </ModalView>
  );
};

const portalElement = document.getElementById("overlaysProjects");


const ProjectModal = (props) => {
  return (
    <Fragment>
    {ReactDOM.createPortal(
      <Backdrop onClose={props.onClose} />,
      portalElement
    )}
    {ReactDOM.createPortal(
      <ModalOverlay>{props.children}</ModalOverlay>,
      portalElement
    )}
  </Fragment>
  )
}

export default ProjectModal