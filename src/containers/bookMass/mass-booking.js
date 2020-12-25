import React from "react";
import { HeadText, Content } from "../../constants/styles/constant.style";
import styled from "styled-components";

import { Switch, Route, useRouteMatch } from "react-router-dom";
import AllMassTable from "./allMassTable/allMassTable";
import PrintMassTable from "./print-mass/print-mass-table";
import MassMenu from "./mass-menu";
import BookaMass from "./book-a-mass/book-a-mass";

const Container = styled.div``;

const Menu = styled.div``;
const Main = styled.div``;

const MassBookings = (props) => {
  let { path } = useRouteMatch();

  return (
    <Container>
      <HeadText>BOOK MASS</HeadText>
      <Content>
        <Menu>
          <MassMenu />
        </Menu>
        <Main>
          <Switch>
         
            <Route path={`${path}/:all-mass`} component={AllMassTable} />

            <Route path={`${path}/:bookmass`} component={BookaMass} />
            <Route path={`${path}/:printmass`} component={PrintMassTable} />
          </Switch>
        </Main>
      </Content>
    </Container>
  );
};

export default MassBookings;
