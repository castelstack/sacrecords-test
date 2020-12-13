import React from "react";
import styled from "styled-components";

const Container = styled.div({
    display: "grid",
    gridTemplateColumns: 'repeat(2, max-content)',
    gridGap: '100px',
});

const SaintContent = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyItems: "center",
  justifyContent: "center",
});

const CalenderDetails = styled.div({
    display: "grid",
    gridTemplateColumns: 'repeat(2, min-content)',
    alignItems: 'center',
    alignContent: 'start',
    justifyContent: 'space-between'
});

const HeadText = styled.h1({
  fontFamily: "Gilroy",
  fontStyle: "normal",
  fontWeight: "600",
  fontSize: "24px",
  lineHeight: "37px",

  color: "#2E2E2E",
});

const ArrowIcon = styled.img({});

const SaintName = styled.h1({
  fontFamily: "Gilroy",
  fontStyle: "normal",
  fontWeight: "600",
  fontSize: "24px",
  lineHeight: "11px",

  color: "#2E2E2E",
});

const SanitTitle = styled.h3({
  fontFamily: "Gilroy",
  fontSize: "18px",
  lineHeight: "0px",
  letterSpacing: "0.065em",

  color: "#3E3E3E",
});
const Day = styled.h3({
  fontFamily: "Gilroy",
  fontStyle: "normal",
  fontWeight: "normal",
  fontSize: "12px",
  lineHeight: "37px",

  color: "#000000",
});
const CalImg = styled.img({
 marginLeft: '5px'
});
const Sainttemp = ({ saint, sttitle, arrow, calender, ...props }) => {
  return (
    <Container>
      <SaintContent>
        <HeadText>Name Of The Day’s Saint</HeadText>
        <ArrowIcon src={arrow} alt='arrow_down' />
        <SaintName>{saint}</SaintName>
        <SanitTitle>{sttitle}</SanitTitle>
      </SaintContent>
      <CalenderDetails>
        <Day>Mon</Day>
        <CalImg src={calender} alt='calender' />
      </CalenderDetails>
    </Container>
  );
};

export default Sainttemp;
