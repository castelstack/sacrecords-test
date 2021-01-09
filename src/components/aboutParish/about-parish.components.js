import React from "react";
import { Link } from "react-router-dom";
import CustomButton from "../button/button.components";

import { Container, ParishInfo, ParishName } from "./about-parish.styles";

const ParishDetails = () => {
  return (
    <Container>
      <ParishName>St Peter/s parish</ParishName>
      <ParishInfo>
        Jackson Pallock is implicitly synonymous with modern art, and it doesn’t
        hurt that he fits the generally held image of the fugitive genius whose
        goals are balanced by a taste for living big. He turned the field of art
        history with radical innovations that include college and Cubism, which
        destroyed the stranglehold of{" "}
      </ParishInfo>
      <Link to='parish'>
        <CustomButton value='More Parish' big />
      </Link>
    </Container>
  );
};

export default ParishDetails;
