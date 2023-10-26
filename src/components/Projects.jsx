import React from "react";
import ProjectModal from "./ProjectModal";
import ProjectItem from "./ProjectItem";
import styled from "styled-components";
import { projectList } from "../data";

const Section = styled.div`
  max-height: 80vh;
  overflow: auto;
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
`;
const Title = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  padding: 1rem;
`;

const Projects = (props) => {
  return (
    <ProjectModal onClose={props.onCloseProjects}>
      <Section>
        <Title>Projects</Title>
        <Container>
          {projectList.map((item) => (
            <ProjectItem item={item} key={item.id} />
          ))}
        </Container>
      </Section>
    </ProjectModal>
  );
};

export default Projects;
