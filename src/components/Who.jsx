import React from 'react'
import styled from 'styled-components'
import Cube from "./Cube";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 9;

`

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1200px;
  display: flex;
  justify-content: center;
`;

const Left = styled.div`
  flex: 1;
  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
  }

  
`
const Title = styled.h1`
  font-size: 74px;
`
const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  
`
const Line = styled.hr`
  width: 15px;
  border: 2px solid white;
`;
const Subtitle = styled.h2`
  color: pink;
`
const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
`
const Button = styled.button`
  background-color: #ae273e;
  font-size: 16px;
  color: white;
  font-weight: 500;
  border: none;
  width: 150px;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #cf2f4c;
  }
`;



const Who = (props) => {
  return (
    <Section>
      <Container>
        <Left>
          <Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
            <OrbitControls enableZoom={false} autoRotate={true} />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Cube />
          </Canvas>
        </Left>
        <Right>
          <Title>Think Outside the Square Space</Title>
          <WhatWeDo>
            <Line />
            <Subtitle>Who I am</Subtitle>
          </WhatWeDo>
          {/* <Desc>
            a creative group of designers and developers with a passion for the
            arts.
          </Desc> */}
          <Desc>
            Passion for solving coding challenges and creating user-friendly
            digital experiences.
          </Desc>
          <Button onClick={props.onShowProjects}>See my Works</Button>
        </Right>
      </Container>
    </Section>
  );
}

export default Who