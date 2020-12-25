import React from "react";
//import { useParams } from "react-router-dom";
import Input from "../../../components/input/input.components";
import CustomButton from "../../../components/button/button.components";
import { TextSub } from "../../../constants/styles/constant.style";
import styled from "styled-components";

const Container = styled.div`
display: flex;
flex-direction: column;
align-content: center;
`
const HeadBox = styled.div`
  background-color: #1cd1a1;
  padding: 15px;
  height: 43px;
  display: flex;
  justify-content: flex-Start;
  align-items: center;
  flex-grow: 1;
`;

const FormBox = styled.form`
  display: grid;
  grid-template-rows: repeat(5, min-content);
  grid-gap: 1.1rem;
  justify-content: center;
  margin-top: .5rem;
`;

const Save = styled(CustomButton)`
  align-self: center;
  margin-top: 4rem;
`;

const BookaMass = (props) => {
  

  return (
    <Container>
      <HeadBox>
        <TextSub>BOOK A MASS</TextSub>
      </HeadBox>
      <FormBox>
        <Input placeholder='Name...' name='Name' />
        <Input placeholder='Reason...' name='Reason' />
        <Input placeholder='Mass Time' name='Mass time' />
        <Input placeholder='Count' name='Count' />
        <Input placeholder='Date' name='Date' />
      </FormBox>
      <Save value='Save' big />
    </Container>
  );
};

export default BookaMass;
