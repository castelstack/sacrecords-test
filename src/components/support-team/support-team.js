import React from "react";
import { HeadText, TextSub } from "../../constants/styles/constant.style";
import styled from "styled-components";

const Container = styled.div`
`;
const SupportTeamMsg = styled(TextSub)`
font-size: .9rem;

`;
const FromSupporTeam = () => {
  return (
    <Container>
      <HeadText>FROM OUR SUPPORT TEAM</HeadText>
      <SupportTeamMsg>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos est vero
        magnam dolore soluta aspernatur labore quas illo eligendi aperiam,
        aliquam animi laborum vitae ipsum velit mollitia totam blanditiis!
        Quidem?
      </SupportTeamMsg>
    </Container>
  );
};

export default FromSupporTeam;
