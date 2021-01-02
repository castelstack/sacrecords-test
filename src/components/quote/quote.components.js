import React from "react";
import styled from "styled-components";
import { HeadText, TextSub } from "../../constants/styles/constant.style";
const Container = styled.div`
  width: 100%;
  border: 1px solid ;
  border-color: #EFEFEF #1CD1A1 #1CD1A1 #EFEFEF;
  box-sizing: border-box;
  border-radius: 10px;
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  &:hover {
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  }
`;

const QuoteText = styled(TextSub)`
  padding: 12px 21px;
  font-style: italic;
  
    quotes: '"' '"' "'" "'";
  
  &::before {
    content: open-quote;
  }
  &::after {
    content: close-quote;
  }
`

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
