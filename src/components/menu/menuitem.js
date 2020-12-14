import React from "react";
import styled from "styled-components";

import blog from "../../images/blog.png";
import conversation from "../../images/conversation.png";
import dashboard from "../../images/dashboard.png";
import eucharist from "../../images/eucharist.png";
import event from "../../images/event.png";
import information from "../../images/information.png";
import megaphone from "../../images/megaphone.png";
import records from "../../images/records.png";
import printer from "../../images/printer.png";
import { NavLink } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  text-align: center;
`;

const Icon = styled.img`
  margin-right: 3%;
  margin-left: 15%;
`;

const active = {
  color: "#1CD1A1",
  backgroundColor: "rgba(0, 242, 184, 0.14)",
};
const MenuLink = styled(NavLink)`
  text-decoration: none;

  display: flex;
  align-items: center;
  
  width: 230px;
  height: 58px;

  &:hover {
    background: rgba(0, 242, 184, 0.14);
  }

  padding: 1.5rem 2rem;
  font-weight: bold;
  font-size: 13px;
  line-height: 19.5px;
  color: #979797;

  display: flex;
`;

const Menulist = () => {
  return (
    <Container>
      <MenuLink to='/overview' activeStyle={active}>
        <Icon src={dashboard} alt='lol' />
        Overview
      </MenuLink>
      <MenuLink to='/records' activeStyle={active}>
        <Icon src={records} alt='records' />
        records
      </MenuLink>
      <MenuLink to='/blog' activeStyle={active}>
        <Icon src={blog} alt='blog' />
        blog
      </MenuLink>
      <MenuLink to='/' activeStyle={active}>
        <Icon src={printer} alt='print' />
        Home for now
      </MenuLink>
      <MenuLink to='/record' activeStyle={active}>
      <Icon src={event} alt='events and todos/' />
        Book Mass
      </MenuLink>
      <MenuLink to='/record' activeStyle={active}>
        <Icon src={event} alt='events and todos/' />
        Events & Todo
      </MenuLink>
      <MenuLink to='/record' activeStyle={active}>
        
        <Icon src={megaphone} alt='anouncement' />
        Anouncement
      </MenuLink>
      <MenuLink to='/record' activeStyle={active}>
        <Icon src={eucharist} alt='parishes' />
        Parishes
      </MenuLink>
      <MenuLink to='/record' activeStyle={active}>
        <Icon src={conversation} alt='About/ support' />
        About/ support
      </MenuLink>
      <MenuLink to='/record' activeStyle={active}>
        
        <Icon src={information} alt='information' />
        information
      </MenuLink>
    </Container>
  );
};

export default Menulist;
