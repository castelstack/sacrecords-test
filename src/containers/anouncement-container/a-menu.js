import { Divider } from "@material-ui/core";
import React from "react";
import { NavLink, useRouteMatch } from "react-router-dom";

import styled from "styled-components";

const Container = styled.div``;

const MenuLink = styled(NavLink)`
  display: flex;
  align-items: center;

  width: 13rem;
  height: 50px;
  transition: all 0.5s ease-in;

  padding: 1.5rem 2rem;
  font-family: Antic Slab;
  font-weight: bold;
  font-size: 15px;
  line-height: 19.5px;
  color: #3e3e3e;
  text-decoration: none;

  &:hover {
    background: rgb(235, 233, 233);
    color: gray;
  }
`;
const active = {
  color: "#1CD1A1",
};
const AnouncementMenu = (props) => {
  let { url } = useRouteMatch();

  return (
    <Container>
      <>
        <MenuLink to={`${url}/create-anouncement`} activeStyle={active}>
          Create anouncement
        </MenuLink>
        <Divider />
        <MenuLink to={`${url}/allAnouncement`} activeStyle={active}>
          Anouncement
        </MenuLink>
      </>
    </Container>
  );
};

export default AnouncementMenu;
