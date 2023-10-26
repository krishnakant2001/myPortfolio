import React from "react";
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
`;

const Container = styled.div`
  width: 1200px;
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(3px);
  display: flex;
  justify-content: space-between;
  padding: 16px 0;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;
const Logo = styled.img`
  margin-left: 10px;
  height: 40px;
`;
const List = styled.ul`
  display: flex;
  gap: 35px;
  list-style: none;
`;
const ListItem = styled.li`
  cursor: pointer;
  font-size: 18px;
  transition: 0.3s;

  &:hover {
    color: #b3ccff;
  }
`;
const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const Icon = styled.img``;
const Button = styled.button`
  width: fit-content;
  padding: 10px;
  color: white;
  background-color: #4b1321d6;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  margin-right: 20px;
  cursor: pointer;
`;

const Navbar = (props) => {
  return (
    <Section>
      <Container>
        <Links>
          <Logo src="./img/KK.png" />
          <List>
            <ListItem>Home</ListItem>
            <ListItem>About</ListItem>
            <ListItem>Works</ListItem>
            <ListItem onClick={props.goToContact}>Contact</ListItem>
          </List>
        </Links>
        <Icons>
          <Icon src="" />
          <Button>Download CV</Button>
        </Icons>
      </Container>
    </Section>
  );
};

export default Navbar;
