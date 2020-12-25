import React from "react";
import styled from "styled-components";
import { HeadText, TextSub } from "../../constants/styles/constant.style";
const Container = styled.div({
  width: "100%",
  border: "1px solid #EFEFEF",
  boxSizing: "border-box",
  borderRadius: "22px",
});

const QuoteText = styled(TextSub)({
  padding: "12px 21px",
});

const Heading = styled(HeadText)({
  padding: "4px 21px",
});
const quoteOfDay = {
  text:
    "Jackson Pallock is implicitly synonymous with modern art, and it doesn’t hurt that he fits the generally held image of the fugitive genius whose goals are balanced",
};
const Quote = () => {
  return (
    <Container>
      <Heading>Quote of the day</Heading>
      <QuoteText>{quoteOfDay.text}</QuoteText>
    </Container>
  );
};

export default Quote;
