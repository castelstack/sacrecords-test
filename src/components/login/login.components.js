import React from "react";

import CustomButton from "../../components/button/button.components";
import {
  Container,
  InputForm,
  Heading,
  InputField,
  border, gridStyle, LabelText
} from "./login.styles";

import { Component } from "react";
import { Label } from "semantic-ui-react";


class LoginForm extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
    };
  }

  handlesubmit = (event) => {
    event.preventDefault();
    this.setState({
      email: "",
      password: "",
    });
  };

  handlechange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <Container>
        <Heading>Login To Continue</Heading>
        <InputForm onSubmit={this.handlesubmit}>
          <InputField
            style={gridStyle}
            placeholder='churchparish01@email.com'
            type='email'
            name='email'
            onChange={this.handlechange}
            value={this.state.email}
            required
          >
            <Label style={LabelText} >Email</Label>
            <input style={border} />
          </InputField>
         

          <InputField
            style={gridStyle}
            placeholder='Passoword'
            type='password'
            name='password'
            onChange={this.handlechange}
            value={this.state.password}
            required
          >
            <Label style={LabelText} >Password</Label>
            <input style={border} />
          </InputField>
          
          <CustomButton value='Login' big />
        </InputForm>
      </Container>
    );
  }
}

export default LoginForm;
