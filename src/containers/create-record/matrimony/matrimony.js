import React, { useState } from "react";
import Input from "../../../components/input/input.components";
import CustomButton from "../../../components/button/button.components";
import {
  Container,
  InputForm,
  Heading,
  InputField,
  border,
  gridStyle,
  LabelText,
} from "./matrimony.styles";

const MatrimonyForm = () => {
  const [matrimony, setMatrimony] = useState({
    firstName: "",
    lastName: "",
    createdAt: "",
    gender: "",
    alive: true,
    christainName: "",
    stateOfOrigin: "",
    lga: "",
    ordained: false,
    nameOfPriest: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setMatrimony({
      firstName: "",
      lastName: "",
      createdAt: "",
      gender: "",
      alive: true,
      christainName: "",
      stateOfOrigin: "",
      lga: "",
      ordained: false,
      nameOfPriest: "",
    });
  };

  const handlechange = (event) => {
    const { name, value } = event.target;
    setMatrimony({ [name]: value });
  };

  return (
    <Container>
      <Heading>Login To Continue</Heading>
      <InputForm onSubmit={handleSubmit}>
        <Input
          placeholder='Legal Name'
          type='text'
          name='legalName'
          onChange={handlechange}
          required
          small
        />

<Input
          placeholder='Last Name'
          type='text'
          name='lastName'
          onChange={handlechange}
          required
        />

<Input
          placeholder='Name of Priest'
          type='text'
          name='nameOfPriest'
          onChange={handlechange}
          required
        />


        <Input
          placeholder='Christain Name'
          type='text'
          name='christainName'
          onChange={handlechange}
          required
        />

        <CustomButton value='Save' big />
      </InputForm>
    </Container>
  );
};

export default MatrimonyForm;
