import React from "react";

import styled from "styled-components";

const Container = styled.div({
  display: "flex",
  flexDirection: "column",
});

const InputField = styled.input`
  background: #ffffff;
  border: 1px solid #c4c4c4;
  border-radius: 100px;

  padding-left: 56px;
  padding-top: 11.5px;
  padding-bottom: 11.5px;


  width: ${props => (props.small ? '168px' : '590px')};
height: ${props => (props.small ? '46px' : '60px')};
  outline: none;

  font-weight: 100;
  font-size: 17px;
  line-height: 24px;
  letter-spacing: 0.1px;

  color: #858585;

  &:focus {
    background: rgba(242, 242, 242, 0.45);
  }
`;

const Label = styled.label({
  fontWeight: "normal",
  fontSize: "17px",
  lineHeight: "34px",
  /* or 141% */

  letterSpacing: "0.1px",

  color: "#858585",
});

// customize input component
const Input = ({ placeholder, name, onChange, label, ...props }) => {
  return (
    <Container>
      <Label>{placeholder}</Label>
      <InputField placeholder={placeholder} onChange={onChange}/>
    </Container>
  );
};

export default Input;
