import React from "react";
import styled from "styled-components";

//import Logo from '../../components/logo/logo';
import Menulist from "../../components/menu/menuitem"

//styles
const Container = styled.div`
height: 80vh;
background: #fdfdfd;
`;
// display: grid;
// grid-template-rows: 5rem min-content;

// height: min-content;


//const LogoBox = styled.div`
// display: flex;
// justify-content: center;
// align-items: center;

// width: 15rem
// `

const Sidebar = () => {
  return (
    <Container>
      {/* <LogoBox>
                
            <Logo />
       </LogoBox> */}
      <Menulist />
    </Container>
  );
};

export default Sidebar;
