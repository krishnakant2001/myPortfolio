import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import emailjs from '@emailjs/browser';
import Map from './MapChart.jsx'
import SendIcon from '@mui/icons-material/Send';

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  position: relative;
  z-index: 9;
`

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 50px; 
`

const Left = styled.div`
  flex: 1;
`

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Title = styled.h1`
  font-weight: 300;
  font-size: 38px;
`

const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`

const Input = styled.input`
  padding: 20px;
  font-size: 16px;
  color: #393e46;
  background-color: #f2f2f2ed;
  border: none;
  outline: none;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  padding: 20px;
  font-size: 16px;
  color: #393e46;
  background-color: #f2f2f2ed;
  border: none;
  outline: none;
  border-radius: 5px;
  
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  background-color: #ae273e;
  color: white;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  padding: 16px;
  font-size: 18px;
  transition: 0.3s;
  width: 100px;
  margin: auto;
  margin-right: 10px;

  

  &:hover {
    background-color: #cf2f4c;
  }
`;
const Msg = styled.p`
  color: white;
  margin: auto;
  font-size: 18px;
`



const Contact = () => {
  const ref = useRef();

  const [success, setSuccess] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_fp1diea', 'template_algtdlj', ref.current, 'N-SxK62TClfRsVmHv')
      .then((result) => {
        console.log(result.text);
        setSuccess(true)
      }, (error) => {
        console.log(error.text);
        setSuccess(false)
      });
  }
  return (
    <Section>
      <Container>
        <Left>
          <Map />
        </Left>
        <Right>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Title>Contact Me</Title>
            <Input placeholder="Name" name="name" required />
            <Input placeholder="Email" name="email" type="email" required />
            <TextArea
              placeholder="Write your Message"
              name="message"
              rows={6}
              required
            />
            <Button type="submit"><SendIcon/></Button>
            {success && (
              <Msg>Your message has been send. We'll get back to you soon !</Msg>
            )}
          </Form>
        </Right>
      </Container>
    </Section>
  );
}

export default Contact