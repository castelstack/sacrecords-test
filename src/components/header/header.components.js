import React from "react";

import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "../logo/logo";
import Search from "../../components/search/search.components";
import CustumButton from "../../components/button/button.components";

const HeaderBox = styled.div({
  
  width: "100%",
  display: "grid",
  gridTemplateColumns: "min-content 1fr min-content",
  alignItems: "center",
  gridGap: "33px",
});

const Header = () => {
  return (
    <HeaderBox>
      <Logo small />
      <Search />
      <Link to='/login'>
        <CustumButton type='submit' value='Login' />
      </Link>
    </HeaderBox>
  );
};

export default Header;
