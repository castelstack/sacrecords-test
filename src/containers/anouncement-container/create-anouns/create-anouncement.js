import { TextField } from "@material-ui/core";
import React from "react";
import { HeadText } from "../../../constants/styles/constant.style";
import CustomButton from '../../../components/button/button.components';
import styled from 'styled-components';

const Container = styled.div`
display: flex;
flex-direction: column;

`
const SaveButton = styled(CustomButton)`
align-self: flex-end;`


const CreateAnouncement = () => {
  return (
    <Container>
      <HeadText>Create anouncement</HeadText>
      <TextField
        id='outlined-full-width'
        label='Create anouncement'
        style={{
          margin: 8
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
        }}
        placeholder='Write anouncement'
              fullWidth
              multiline
              
        margin='normal'
        InputLabelProps={{
          shrink: true,
        }}
        variant='outlined'
          />
          <SaveButton type='submit' value='Save Anouncement' big />
    </Container>
  );
};

export default CreateAnouncement;
