import React from "react";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import { HeadText, TextSub } from '../../constants/styles/constant.style';
import styled from "styled-components";

const Container = styled.div`
display: grid;
grid-template-columns: repeat(3, min-content);

justify-content: space-between;`;

const AboutBox = styled.div`
display: grid;
grid-template-rows: repeat(3, min-content);
justify-content: space-between;
justify-content: center;
justify-items: center;
padding: 3rem 3rem;
box-shadow: 0 3px 4px rgba(0,0,0,0.15);
height: 395px;
width: 340px;
`;

const AboutTitle = styled(HeadText)`
font-size: 1.1rem;
color: black`;
const AboutText = styled(TextSub)`
font-size: .9rem;
justify-items: center;
`;
const About = () => {
  return (
    <Container>
      <AboutBox>
        <EmojiPeopleIcon style={{ fontSize: 60, color: "#1CD1A1" }}/>
        <AboutTitle>Who are we?</AboutTitle>
        <AboutText>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit, nemo
          veniam delectus, ad quaerat quia provident blanditiis vero nulla et
          architecto sequi repellendus! Recusandae, aliquid pariatur minima
          tenetur nobis officiis.
        </AboutText>
      </AboutBox>
      <AboutBox>
        <AssignmentTurnedInIcon style={{ fontSize: 60, color: "#1CD1A1" }}/>
        <AboutTitle>Our goals</AboutTitle>
        <AboutText>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui aperiam
          ea sequi sapiente optio. A, debitis alias! Ipsum itaque, doloribus,
          praesentium voluptates iure iste eligendi reprehenderit fugiat
          molestiae, necessitatibus inventore?
        </AboutText>
      </AboutBox>
      <AboutBox>
        <SupervisedUserCircleIcon style={{ fontSize: 60, color: "#1CD1A1" }}/>
        <AboutTitle>Our value</AboutTitle>
        <AboutText>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat et
          corrupti neque nihil ullam voluptatibus at consequuntur quia
          blanditiis animi sapiente minima expedita ipsum quibusdam, tenetur vel
          tempora optio molestiae.
        </AboutText>
      </AboutBox>
    </Container>
  );
};

export default About;
