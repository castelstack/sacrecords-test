import React from "react";

import OverviewTemp from "./g-overviewblock.components";
import { HeadText } from "../../constants/styles/constant.style";

import styled from "styled-components";

import Base from "../../images/daily/Base.svg";
import Nav from "../../images/daily/nav.png";
import Dropdown from "../../images/daily/drpdwn.png";
import Frame from "../../images/daily/frame.png";

const Container = styled.div({
  margin: "8px 50px",

  display: "grid",
  gridTemplateRows: "repeat(2, min-content)",
  gridGap: "23px",
  
});

const ContainerTemp = styled.div({
  display: "grid",
  gridTemplateColumns: "repeat(3, min-content)",
  justifyContent: "space-between",
  // justifyItems: 'center'
});

const Title = styled(HeadText)({
  gridColumn: "1/ -1",
  lineHeight: "29px",
  
});

const OverviewHead = () => {
  return (
    <Container>
     <Title>General Overview</Title>
      <ContainerTemp>
        <OverviewTemp
          frame={Frame}
          num='45'
          title='Sacramental records'
          count='0'
          base={Base}
          nav={Nav}
          icon={Dropdown}
        />
        <OverviewTemp
          frame={Frame}
          num='45'
          title='Parishes'
          count='0'
          base={Base}
          nav={Nav}
          icon={Dropdown}
        />
       

        <OverviewTemp
          frame={Frame}
          num='45'
          title='Weekly Activities'
          count='0'
          base={Base}
          nav={Nav}
          icon={Dropdown}
          margin
        />
      </ContainerTemp>
    </Container>
  );
};

export default OverviewHead;
