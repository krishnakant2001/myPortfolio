import { GitHub } from "@mui/icons-material";
import LanguageIcon from "@mui/icons-material/Language";
import React from "react";
import styled from "styled-components";


const Section = styled.div`
  background-color: #cfcfcfd4;
  backdrop-filter: blur(3px);
  padding: 1rem;
  margin: 1rem;
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  border-radius: 14px;
  border: 2px solid white;
  transition: 400ms;
  &:hover{
    transform: scale(1.035);
  }
`;


const Picture = styled.img`
  width: 100%;
  border-radius: 8px;
`;

const Title = styled.p`
  font-size: 32px;
  color: #2f0000;
`;

const Desc = styled.p`
  color: #2f2f2f;
  font-size: 16px;
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;

const Code = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: #3b3b3b;
`;

const Web = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: #3b3b3b;
`;

const ProjectItem = ({item}) => {
  console.log(item.img)
  return (
    <Section>
      {/* <Container> */}
      <Picture src={item.img} />
      <Title>{item.title}</Title>
      <Desc>
        {item.desc}
      </Desc>
      {/* </Container> */}
      <Buttons>
        <Code href={item.code}>
          <GitHub />
          code
        </Code>
        <Web href={item.website}>
          <LanguageIcon />
          website
        </Web>
      </Buttons>
    </Section>
  );
};

export default ProjectItem;
