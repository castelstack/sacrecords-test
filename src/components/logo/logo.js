import React from "react";
import styled from "styled-components";

import logo from "../../images/logo.png";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  margin-right: auto;
`;

const Image = styled.img`

  width: ${props => (props.small ? '56px' : '80px')};
  height: ${props => (props.small ? '56px' : '79px')}
`;

const Logo = () => {
  return (
    <Container>
      <Image src={logo} small='small'/>
    </Container>
  );
};

export default Logo;
