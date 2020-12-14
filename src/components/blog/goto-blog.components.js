import React from "react";

import { Link } from 'react-router-dom'; 
import CustomButton from "../../components/button/button.components";
import styled from "styled-components";

const Container = styled.div({
  display: "flex",
  flexDirection: "column",
  width: "229px",
  
});

const HeadText = styled.h1({
  fontFamily: "Poppins",
  fontStyle: "normal",
  fontWeight: "normal",
  fontSize: "30px",
  lineHeight: "45px",

  color: "#1C1C1C",
});

const SubText = styled.h3({
  fontFamily: "Poppins",
  fontStyle: "normal",
  fontWeight: "300",
  fontSize: "14px",
  lineHeight: "160%",
  /* or 21px */

  color: "#343434",
});

/*component with the go to blog button*/
const gotoBlog = () => {
  return (
    <Container>
      <HeadText>From Our Blog</HeadText>
      <SubText>
        Suscipit libero pretium nullam potenti. Interdum, blandit phasellus
        consectetuer dolor ornare dapibus enim
      </SubText>

      <Link to='/blog' > <CustomButton value='Go to blog' big/> </Link>
      
    </Container>
  );
};

export default gotoBlog;
