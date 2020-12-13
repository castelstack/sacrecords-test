import React from "react";

import DailyBox from "./dailytemp.compnents";

import styled from "styled-components";

import Base from "../../images/daily/Base.svg";
import Bible from "../../images/daily/bible.png";
import Cross from "../../images/daily/cross.png";
import Nav from "../../images/daily/nav.png";
import Dropdown from "../../images/daily/drpdwn.png";
import Frame from "../../images/daily/frame.png";
import Activity from "../../images/daily/activity.png";

const Container = styled.div({
  margin: "5px 50px",
  
  display: "grid",
  gridTemplateColumns: "repeat(3, min-content)",

  justifyContent: "space-between",
});

const Daily = () => {
  return (
    <Container>
      <DailyBox
        frame={Frame}
        img={Bible}
        title='Daily readings'
        count='0'
        base={Base}
        nav={Nav}
        icon={Dropdown}
      />
      <DailyBox
        frame={Frame}
        img={Cross}
        title='Daily Quotes'
        count='0'
        base={Base}
        nav={Nav}
        icon={Dropdown}
      />
      <DailyBox
        frame={Frame}
        img={Activity}
        title='Daily Activities'
        count='0'
        base={Base}
        nav={Nav}
        icon={Dropdown}
        margin
      />
    </Container>
  );
};

export default Daily;
