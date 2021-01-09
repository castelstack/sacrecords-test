import { Avatar } from "@material-ui/core";

import React from "react";
import { HeadText, TextSub } from "../../constants/styles/constant.style";
import styled from "styled-components";

const Container = styled.div({
  display: "grid",
  gridTemplateRows: "repeat(2,min-content)",
});

const ContainerInfo = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr;
`;

const TitleContent = styled.div`
  display: grid;
  grid-template-rows: repeat(3, min-content);
`;

const Title = styled(HeadText)({
  fontWeight: "600",
  fontSize: "20px",
  lineHeight: "1px",
});

const Content = styled(TextSub)({
  fontSize: "11px",
  lineHeight: "15px",
});
const Link = styled.a({
  fontWeight: "normal",
  fontSize: "14px",
  lineHeight: "4px",

  color: "#1CD1A1",
  textDecoration: "none",
});
const TrendBlock = ({ title, content, image, link, ...props }) => {
  return (
    <Container>
      <ContainerInfo>
        <Avatar
          alt='blog pic'
          src={image}
          style={{ alignSelf: "flex-start", marginRight: "7px" }}
        />

        <TitleContent>
          <Title>{title}</Title>
          <Content>{content}</Content>
          <Link href='http://#'>Read full Details</Link>
        </TitleContent>
      </ContainerInfo>
    </Container>
  );
};

export default TrendBlock;
