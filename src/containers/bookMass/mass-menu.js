import { Divider } from "@material-ui/core";
import React from "react";
import { NavLink, useRouteMatch } from "react-router-dom";

import styled from "styled-components";

const Container = styled.div`
background-color: #F5F5F5;
height: 100%;
`;



const MenuLink = styled(NavLink)`
  text-decoration: none;

  display: flex;
  align-items: center;

  width: 13rem;
  height: 50px;
  transition: all .5s ease-in;
  &:hover {
    background: rgb(235, 233, 233);
    color: gray;
  }

  padding: 1.5rem 2rem;
  font-family: Antic Slab;

  font-size: 15px;
  line-height: 19.5px;
  color: #3e3e3e;


`;
const active = {
  color: "#1CD1A1",
};
const MassMenu = (props) => {
  let { url } = useRouteMatch();
  
 
  return (
    <Container>
      <>
        <MenuLink to={`${url}/all-mass`} activeStyle={active}>
          All masses
        </MenuLink>
        <Divider />
        <MenuLink to={`${url}/bookmass`} activeStyle={active}>
          Book mass
        </MenuLink>
       
      </>
    </Container>
  );
};

export default MassMenu;
