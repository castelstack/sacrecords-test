import React from "react";

import { Link } from "react-router-dom";
import CustomButton from "../../components/button/button.components";
import { HeadText, TextSub } from "../../constants/styles/constant.style";

import styled from "styled-components";


const Container = styled.div({
  display: "flex",
  flexDirection: "column",
  width: "229px",
});

const Title = styled(HeadText)({
  lineHeight: "45px",
  color: "#1C1C1C",
});

const Text = styled(TextSub)({
  fontSize: "14px",
  lineHeight: "160%",
  color: "#343434",
});

/*component with the go to blog button*/
const gotoBlog = () => {
  return (
    <Container>
      <Title>From Our Blog</Title>
      <Text>
        Suscipit libero pretium nullam potenti. Interdum, blandit phasellus
        consectetuer dolor ornare dapibus enim
      </Text>

      <Link to='/blog'>
        {" "}
        <CustomButton value='Go to blog' big />{" "}
      </Link>
    </Container>
  );
};

export default gotoBlog;
