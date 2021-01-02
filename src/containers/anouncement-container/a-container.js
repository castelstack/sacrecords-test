import React from "react";
import {
  HeadText,
  Content
} from "../../constants/styles/constant.style";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import AnouncementMenu from './a-menu';
import AllAnouncement from './all-anouncement/all-anouncement';
import CreateAnouncement from './create-anouns/create-anouncement';
import styled from "styled-components";


const Container = styled.div`
padding: 0 50px;`;
const Menu = styled.div``;
const Main = styled.div``;

const AnouncementContainer = () => {
  let { path } = useRouteMatch();
  console.log(path)
  return (
    <Container>
      <HeadText>ANOUNCEMENT</HeadText>
      <Content>
        <Menu>
         <AnouncementMenu />
        </Menu>
        <Main>
           <Switch>
            <Route path={`${path}/:create-anouncement`} component={CreateAnouncement} />
            <Route exact path={`${path}/:allAnouncement`} component={AllAnouncement} />
            <Route exact path={`${path}/`} component={AllAnouncement} />
          

          </Switch> 
        </Main>
      </Content>
    </Container>
  );
};

export default AnouncementContainer;
