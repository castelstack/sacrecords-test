import React from "react";
import FaqContainer from "../../containers/faq-container/faq-container";
import { HeadText } from "../../constants/styles/constant.style";
import styled from "styled-components";


const Container = styled.div({
    margin: '0 50px'
  });

const Faq = () => {
  return (
    <Container>
      <HeadText>FaQ</HeadText>
      <FaqContainer />
    </Container>
  );
};

export default Faq;
