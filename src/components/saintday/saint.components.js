import React, { Component } from "react";
import styled from "styled-components";
import Arrow from "../../images/saints/Arrow.svg";
import Calender from "../../images/saints/calender.svg";

import Sainttemp from "./sainttemp.components";

const Container = styled.div({
  width: "min-content",
  padding: "25px  122px 49px",

  background: "rgba(242, 242, 242, 0.45)",
});

class Saint extends Component {
  constructor() {
    super();
    this.state = {
      saints: [
        {
          id: 1,
          saint: '"St Andrew day"',
          sttitle: "Doctor and Bishop Of the Church",
          date: 13,
          month: "1",
        },
      ],
    };
  }
  render() {
    return (
      <Container>
        {this.state.saints.map(({ id, sttitle, saint, date, month }) => (
          <Sainttemp
            key={id}
            saint={saint}
            sttitle={sttitle}
            arrow={Arrow}
            calender={Calender}
          />
        ))}
      </Container>
    );
  }
}

export default Saint;
