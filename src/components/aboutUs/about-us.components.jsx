import React from "react";

import Quote from "../quote/quote.components";


import { Containerr, MainText, ContainerSub, SubText } from './about-us.styles';

const AboutUs = () => {
  return (
    <Containerr>
      <MainText>About Sacred Records</MainText>
      <ContainerSub>
        <SubText>
          Jackson Pallock is implicitly synonymous with modern art, and it
          doesn’t hurt that he fits the generally held image of the fugitive
          genius whose goals are balanced by a taste for living big. He turned
          the field of art history with radical innovations that include college
          and Cubism, which destroyed the stranglehold of representational
          material matter on art, and set the rate for other 20th-century
          artists.
        </SubText>
        <Quote />
      </ContainerSub>
    </Containerr>
  );
};

export default AboutUs;
