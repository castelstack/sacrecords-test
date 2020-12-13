import React from "react";
import styled from "styled-components";

const Container = styled.div({
  width: "100%",
  border: "1px solid #EFEFEF",
  boxSizing: "border-box",
  borderRadius: "22px",
});

const QuoteText = styled.h3({
  fontFamily: "Gilroy",
  fontStyle: "normal",
  fontWeight: "300",
  fontSize: "18px",
  lineHeight: "37px",

  letterSpacing: "0.065em",

  color: "#3E3E3E",

  padding: "12px 21px",
});

const HeadText = styled.h1({
  fontFamily: "Gilroy",
  fontStyle: "normal",
  fontWeight: "600",
  fontSize: "24px",
  lineHeight: "0px",

  letterSpacing: "0.005em",

  color: "#2E2E2E",
  padding: "4px 21px",
});
const quoteOfDay = {
  text:
    "Jackson Pallock is implicitly synonymous with modern art, and it doesn’t hurt that he fits the generally held image of the fugitive genius whose goals are balanced",
};
const Quote = () => {
  return (
    <Container>
      <HeadText>Quote of the day</HeadText>
      <QuoteText>{quoteOfDay.text}</QuoteText>
    </Container>
  );
};

export default Quote;
