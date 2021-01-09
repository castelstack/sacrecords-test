import React from "react";

import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "../logo/logo";
import Search from "../../components/search/search.components";
import CustumButton from "../../components/button/button.components";

const HeaderBox = styled.div({
  width: "100%",
  display: "grid",
  gridTemplateColumns: "min-content min-content 1fr min-content",
  alignItems: "center",
  gridGap: "33px",
});

const CreateRecord = styled(CustumButton)`
  font-size: 15px;
  width: 140px;
  border-radius: 10rem;
  justify-self: self-end;
`;

const Login = styled(CustumButton)`
  font-size: 15px;
`;
const Header = () => {
  return (
    <HeaderBox>
      <Logo small />
      <Link to='/create-records'>
        <CreateRecord value='Create Record' />
      </Link>
      <Search placeholder='Search...' />
      <Link to='/login'>
        <Login type='submit' value='Login' />
      </Link>
    </HeaderBox>
  );
};

export default Header;
