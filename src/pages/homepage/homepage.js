import React, { Component } from "react";

import DailyBox from "../../components/daily-block/daily-block.components";
import AboutUs from "../../components/aboutUs/about-us.components";
import BlogContent from "../../components/blog-content/blog-content.components";
import Saint from "../../components/saintday/saint.components";
import ParishDetails from "../../components/aboutParish/about-parish.components";
import LoginForm from "../../components/login/login.components";

import styled from "styled-components";



const Container = styled.div({
  position: 'aboslute',
  right: 0,
  display: "flex",
  flexDirection: "column",
  // backgroundColor: '#303030'
});

const SectionSaint = styled.div({
  margin: "70px 0px",

  display: "grid",
  gridTemplateColumns: "min-content 1fr",
  gridGap: "70px",
});

class Homepage extends Component {
  render() {
    return (
      
   
      <Container>
        <DailyBox />

        <AboutUs />

        <BlogContent />

        <SectionSaint>
          <Saint />
          <ParishDetails />
        </SectionSaint>

        <LoginForm />
      </Container>
    );
  }
}

export default Homepage;



