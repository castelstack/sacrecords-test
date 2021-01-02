import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Logo from '../../components/logo/logo';
import Menulist from "../../components/menu/menuitem"

//styles
const Container = styled.div`
height: 80vh;
background: #fdfdfd;
display: grid;
grid-template-rows: 6rem min-content;

height: min-content;
`;


const LogoBox = styled.div`
display: grid;
justify-content: center;
align-items: center;

width: 15rem;
`

const Sidebar = () => {
  return (
    <Container>
      <LogoBox>
                <Link to='/'><Logo/></Link>
            
       </LogoBox>
      <Menulist />
    </Container>
  );
};

export default Sidebar;
