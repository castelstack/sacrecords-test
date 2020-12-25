import React, { Component } from "react";
import bgimg from "./../../images/blog/blog2.png";
import TrendBlock from "./trendBlock";
import { HeadText } from "../../constants/styles/constant.style";
import styled from "styled-components";

const Container = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});

const TrendsContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  gridGap: "2rem",
  justifyContent: "space-between",
  marginBottom: "5rem",
});
const Title = styled(HeadText)({
  lineHeight: "29px",
 
});
class Trends extends Component {
  constructor() {
    super();

    this.state = {
      headline: [
        {
          id: 1,
          title: "adelanke",
          headContent: "Developing Oculus VR",
          content:
            "Virgin mary day to be remembered by all cattholics. This is for all catholic churches to uphold.",
          image: { bgimg },
          link: "###",
        },
        {
          id: 2,
          title: "adelanke",
          headContent: "Developing Oculus VR",
          content:
            "Virgin mary day to be remembered by all cattholics. This is for all catholic churches to uphold.",
          image: { bgimg },
          link: "###",
        },
        {
          id: 3,
          title: "adelanke",
          headContent: "Developing Oculus VR",
          content:
            "Virgin mary day to be remembered by all cattholics. This is for all catholic churches to uphold.",
          image: { bgimg },
          link: "###",
        },
        {
          id: 4,
          title: "adelanke",
          headContent: "Developing Oculus VR",
          content:
            "Virgin mary day to be remembered by all cattholics. This is for all catholic churches to uphold.",
          image: { bgimg },
          link: "###",
        },
        {
          id: 5,
          title: "adelanke",
          headContent: "Developing Oculus VR",
          content:
            "Virgin mary day to be remembered by all cattholics. This is for all catholic churches to uphold.",
          image: { bgimg },
          link: "###",
        },
        {
          id: 6,
          title: "adelanke",
          headContent: "Developing Oculus VR",
          content:
            "Virgin mary day to be remembered by all cattholics. This is for all catholic churches to uphold.",
          image: { bgimg },
          link: "###",
        },
        {
          id: 7,
          title: "adelanke",
          headContent: "Developing Oculus VR",
          content:
            "Virgin mary day to be remembered by all cattholics. This is for all catholic churches to uphold.",
          image: { bgimg },
          link: "###",
        },
        {
          id: 8,
          title: "adelanke",
          headContent: "Developing Oculus VR",
          content:
            "Virgin mary day to be remembered by all cattholics. This is for all catholic churches to uphold.",
          image: { bgimg },
          link: "###",
        },
        {
          id: 9,
          title: "adelanke",
          headContent: "Developing Oculus VR",
          content:
            "Virgin mary day to be remembered by all cattholics. This is for all catholic churches to uphold.",
          image: { bgimg },
          link: "###",
        },
        {
          id: 10,
          title: "adelanke",
          headContent: "Developing Oculus VR",
          content:
            "Virgin mary day to be remembered by all cattholics. This is for all catholic churches to uphold.",
          image: { bgimg },
          link: "###",
        },
      ],
    };
  }

  render() {
    return (
      <Container>
        <Title>Trending From Our Blog</Title>
        <TrendsContainer>
          {this.state.headline
            .filter((el, idx) => idx < 5)
            .map(({ id, title, content, image, link, ...props }) => (
              <TrendBlock
                key={id}
                title={title}
                content={content}
                image={bgimg}
                link={link}
              />
            ))}
        </TrendsContainer>
      </Container>
    );
  }
}

export default Trends;
