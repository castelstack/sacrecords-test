import React from "react";
import {
  Container,
  SaintContent,
  Title,
  ArrowIcon,
  SaintName,
  SanitTitle,
  CalenderDetails,
  Day,
  CalImg,
} from "./saint.temp.style";
const Sainttemp = ({ saint, sttitle, arrow, calender, ...props }) => {
  return (
    <Container>
      <SaintContent>
        <Title>Name Of The Day’s Saint</Title>
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
