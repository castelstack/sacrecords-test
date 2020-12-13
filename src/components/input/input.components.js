import React from "react";

import styled from "styled-components";

const Container = styled.div({
  display: "flex",
  flexDirection: "column",
});

const InputField = styled.input`
  background: #FFFFFF;
  border: 1px solid #C4C4C4;
  border-radius: 100px;

  padding-left: 56px ;
  padding-top: 11.5px ;
  padding-bottom: 11.5px;

  width: 594px;
  height: 39px;
  outline: none;

  font-family: Gilroy;
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 24px;
  letter-spacing: 0.1px;

  color: #858585;

  &:focus {

    background: rgba(242, 242, 242, 0.45);
  };
  
  `




const Label = styled.label({
  fontFamily: "Gilroy",
  fontStyle: "normal",
  fontWeight: "normal",
  fontSize: "17px",
  lineHeight: "34px",
  /* or 141% */

  letterSpacing: "0.1px",

  color: "#858585",
});

// customize input component
const Input = ({ placeholder, name }) => {
  return (
    <Container>
      <Label>{name}</Label>
      <InputField placeholder={placeholder} style={{ paddingLeft: '56px',
  paddingTop: '11.5px',
  paddingBottom: '11.5px'
 }}/>
    </Container>
  );
};

export default Input;
