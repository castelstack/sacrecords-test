import React from "react";
import styled from "styled-components";

import AnnouncementRoundedIcon from "@material-ui/icons/AnnouncementRounded";
import DashboardRoundedIcon from "@material-ui/icons/DashboardRounded";
import FolderIcon from "@material-ui/icons/Folder";
import ChromeReaderModeIcon from "@material-ui/icons/ChromeReaderMode";

import BookIcon from "@material-ui/icons/Book";
import TodayIcon from "@material-ui/icons/Today";
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';

import HouseIcon from "@material-ui/icons/House";
import LiveHelpIcon from "@material-ui/icons/LiveHelp";

import { NavLink } from "react-router-dom";

//import LIST from "./sidebar.json";
// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-items: center;

// `;

const Item = styled.h4`
  margin-left: 0.5rem;
`;
const active = {
  color: "white",
  backgroundColor: "#1CD1A1",
  boxShadow: "0 3px 4px rgba(0,0,0,0.15)",
  fontWeight: 'bold',
};
const MenuLink = styled(NavLink)`
  text-decoration: none;

  display: flex;
  align-items: center;
  margin-bottom: 6px;
  width: 239px;
  height: 40px;
  transition: all 0.5s ease-in;
  &:hover {
    background: rgb(235, 233, 233);
    color: gray;
  }

  padding: 1.5rem 3.1rem;
  font-family: Antic Slab;
  
  font-size: 15px;
  line-height: 19.5px;
  color: black;
`;

const Menulist = () => {
  // const [list, setList] = useState([]);

  //   // api call with axios in useEffect hook
  //   useEffect(
  //     function effectFunction() {
  //       function fetchData() {
  //         const response = { LIST };

  //         const result = response.LIST;
  //         setList(result);
  //         console.log(result);
  //         return response;
  //       }
  //       fetchData();
  //     },
  //     [setList]
  //   );
  return (
    <>
      {/* {
        list.map(item => (
          <MenuLink key={item.id} to={item.to} activeStyle={active}>
        
        <Icon>{item.icon}</Icon>
        <Item>{item.listItem}</Item>
      </MenuLink>
        ))
      } */}
      
      <MenuLink to='/overview' activeStyle={active}>
        <DashboardRoundedIcon />
        <Item>Overview</Item>
      </MenuLink>
      <MenuLink to='/records' activeStyle={active}>
        <FolderIcon />
        <Item> Records</Item>
      </MenuLink>
      <MenuLink to='/blog' activeStyle={active}>
        <ChromeReaderModeIcon />
        <Item>Blog</Item>
      </MenuLink>
     
      <MenuLink to='/book-mass' activeStyle={active}>
        <BookIcon />
        <Item>Book Mass</Item>
      </MenuLink>
      <MenuLink to='/record' activeStyle={active}>
        <TodayIcon />
        <Item>Events & Todo</Item>
      </MenuLink>
      <MenuLink to='/anouncement' activeStyle={active}>
        <AnnouncementRoundedIcon />
        <Item>Anouncement</Item>
      </MenuLink>
      <MenuLink to='/parish' activeStyle={active}>
        <HouseIcon />
        <Item>Parishes</Item>
      </MenuLink>
      <MenuLink to='/about-support' activeStyle={active}>
        <LiveHelpIcon />
        <Item>About/ support</Item>
      </MenuLink>
     
      <MenuLink to='/faq' activeStyle={active}>
        <QuestionAnswerIcon />
        <Item>FaQ</Item>
      </MenuLink>
    </>
  );
};

export default Menulist;
