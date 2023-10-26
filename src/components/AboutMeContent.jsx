import React from "react";
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  height: fit-content;
  
`;
const Left = styled.div`
  padding: 12px;
  display: flex;
  flex: 3;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 8px;
`;
const Content = styled.p`
  color: #202020;
  font-family: Arial, Helvetica, sans-serif;
  text-align: justify;
`;
const Right = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 2;
`;
const Img = styled.img`
  height: 500px;
  border-radius: 10px;
  border: solid 3px #3b3b3b;
`;

const AboutMeContent = () => {
  return (
    <Section>
      <Left>
        <Content>
          I am Krishna Kant Nagvanshi, a passionate and detail-oriented computer
          science enthusiast pursuing my B.Tech in Computer Science and
          Engineering from Madhav Institute of Technology and Science, Gwalior.
          With a solid academic background and a CGPA of 8.07/10, I am dedicated
          to expanding my knowledge and skills in the field of technology.
        </Content>

        <Content>
          I thrive on challenges and am constantly exploring new avenues in the
          world of software development. During my educational journey, I have
          honed my expertise in a variety of technologies including C++,
          React.js, Node.js, Express.js, MongoDB, HTML, CSS, and JavaScript. My
          curiosity and enthusiasm have driven me to participate in various
          projects and internships, allowing me to gain practical experience in
          building dynamic web applications and enhancing user experiences.
        </Content>

        <Content>
          In my recent internships, I had the opportunity to work on real-world
          projects such as developing features for chat applications, creating
          user-friendly interfaces for blog websites, and contributing to the
          development of an e-commerce platform. I also take pride in my role as
          a DSA Scholar Intern, where I designed quizzes and solved problems
          related to data structures and algorithms, showcasing my
          problem-solving skills.
        </Content>

        <Content>
          I am not only dedicated to my academic and professional growth but
          also passionate about collaborating with teams and contributing
          positively to projects. My achievements, including being shortlisted
          in prestigious competitions like Flipkart GRiD 5.0 and receiving
          recognition for my contributions to minor projects, highlight my
          commitment to excellence.
        </Content>

        <Content>
          I am an avid learner, a team player, and a technology enthusiast,
          constantly seeking opportunities to expand my horizons and make a
          meaningful impact in the world of software engineering. Connect with
          me, and let's create innovative solutions together.
        </Content>
      </Left>
      <Right>
        <Img src="./img/AboutMe.jpeg" />
      </Right>
    </Section>
  );
};

export default AboutMeContent;
