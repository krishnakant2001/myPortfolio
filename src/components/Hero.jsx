import React from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 9;
`;

const Container = styled.div`
  height: 100vh;
  width: 1200px;
  display: flex;
  justify-content: center;
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  position: relative;
`;

const Title = styled.h1`
  font-size: 64px;
  span {
    color: #d494ff;
  }
`;
const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const Line = styled.hr`
  width: 15px;
  border: 2px solid white;
`;
const Subtitle = styled.h2`
  color: pink;
`;
const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
`;
const Button = styled.button`
  background-color: #ae273e;
  color: white;
  font-weight: 500;
  border: none;
  width: 130px;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: 0.3s;

  &:hover {
    background-color: #cf2f4c;
  }
`;
const Link = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  justify-content: flex-start;
`;

const Icon = styled.a`
  background-color: #ffffff39;
  color: #e1e1e1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    color: white;
  }
`;

const Right = styled.div`
  flex: 2;
  position: relative;
  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
  }
`;
const Img = styled.img`
  width: 300px;
  object-fit: cover;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  transform: rotate(-1.5deg);
  opacity: 0.95;
  animation: animate 1.5s ease-in;

  @keyframes animate {
    0% {
      opacity: 0;
      transform: rotate(-1.5deg) translateY(50px);
    }
    100% {
      opacity: 0.95;
      transform: rotate(-1.5 deg) translateY(0px);
    }
  }
`;

const Hero = (props) => {
  return (
    <Section>
      {/* <Navbar goToContact={props.onShowContact} /> */}
      <Container>
        <Left>
          <Title>
            <span>Hi,</span> I'm Krishna Kant Nagvanshi
          </Title>
          <WhatWeDo>
            <Line />
            <Subtitle>What I do</Subtitle>
          </WhatWeDo>
          <Desc>
            I enjoy creating delightful, human-centered digital experiences.
          </Desc>
          <Link>
            <Button onClick={props.onShowAbout}>Learn More</Button>
            <Icon
              href="https://www.linkedin.com/in/krishna-kant-nagvanshi/"
              target="_blank"
            >
              <LinkedInIcon />
            </Icon>
            <Icon href="https://github.com/krishnakant2001" target="_blank">
              <GitHubIcon />
            </Icon>
            <Icon>
              <AlternateEmailIcon onClick={props.onShowContact} />
            </Icon>
          </Link>
        </Left>
        <Right>
          <Canvas>
            <OrbitControls enableZoom={false} autoRotate={true} />
            <ambientLight intensity={0.8} />
            <directionalLight position={[3, 2, 1]} />
            <Sphere args={[1, 50, 100]} scale={2.5}>
              <MeshDistortMaterial
                attach="material"
                speed={1.3}
                transparent={true}
                opacity={0.2}
              />
            </Sphere>
          </Canvas>
          <Img src="./img/KKprofile.png" />
        </Right>
      </Container>
    </Section>
  );
};

export default Hero;
