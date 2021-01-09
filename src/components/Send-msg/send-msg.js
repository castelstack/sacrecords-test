import React from "react";
//import { useParams } from "react-router-dom";
import Input from "../input/input.components";
import CustomButton from "../button/button.components";
import { MedHeadText } from "../../constants/styles/constant.style";
import styled from "styled-components";

const Container = styled.div`
display: flex;
flex-direction: column;
align-content: center;
`


const FormBox = styled.form`
  display: grid;
  grid-template-rows: repeat(5, min-content);
  grid-gap: 1.1rem;
  justify-content: center;
  margin-top: .5rem;
`;

const Send = styled(CustomButton)`
  align-self: center;
  margin-top: 1rem;
`;

const SendMsg = (props) => {
  

  return (
    <Container>
      
        <MedHeadText>SEND US A MESSAGE</MedHeadText>
      
      <FormBox>
        <Input placeholder='Name...' name='Name' />
        <Input placeholder='Email' name='Email' />
        <Input placeholder='Message' name='Message' />
       
      </FormBox>
      <Send value='Send Message' big />
    </Container>
  );
};

export default SendMsg;
