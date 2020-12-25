import React from "react";
import {
  Container,
  Nav,
  Frame,
  Num,
  Content,
  ContentSub,
  Title,
  Count,
  CountBox,
  Icon,
  Base,
} from "./g-overviewblock.style";

const OverviewTemp = ({
  frame,
  nav,
  title,
  base,
  icon,
  count,
  num,
  margin,
}) => {
  return (
    <Container>
      <Nav src={nav} alt='navigator' />

      <Content>
        <Frame src={frame} alt='Frame' />
        <Num>{num}</Num>
      </Content>

      <ContentSub>
        <Title>{title}</Title>
        <CountBox>
          <Count>{count}</Count>
          <Icon src={icon} alt='content' />
        </CountBox>
      </ContentSub>

      <Base src={base} alt='base' />
    </Container>
  );
};

export default OverviewTemp;
