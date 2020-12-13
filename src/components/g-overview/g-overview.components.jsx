import React from "react";

import OverviewTemp from "./g-overviewblock.components";

import styled from "styled-components";

import Base from "../../images/daily/Base.svg";

import Nav from "../../images/daily/nav.png";
import Dropdown from "../../images/daily/drpdwn.png";
import Frame from "../../images/daily/frame.png";

const Container = styled.div({
  margin: "5px 50px",

  display: "grid",
  gridTemplateRows: "repeat(2, min-content)",
  gridGap: '23px'
});

const ContainerTemp = styled.div({
 
  display: "grid",
  gridTemplateColumns: "repeat(4, min-content)",
  justifyContent: "space-between",
  // justifyItems: 'center'
});

const HeadText = styled.h1({
  gridColumn: "1/ -1",
  fontFamily: "Gilroy",
  fontStyle: "normal",
  fontWeight: "600",
  fontSize: "24px",
  lineHeight: "29px",

  color: "#7C7C7C",
});

const OverviewHead = () => {
  return (
    <Container>
      <HeadText>General Overview</HeadText>
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
        title='OverviewHead Activities'
        count='0'
        base={Base}
        nav={Nav}
        icon={Dropdown}
        margin
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
