import React from "react";
import styled from "styled-components";
import bgimg from "./../../images/blog/blog2.png";
import BlogBlock from "../../components/blog/blogblock.components";
import TrendBlock from "../../components/trends/trendBlock";
import { HeadText } from "../../constants/styles/constant.style";
import Cards from "../../containers/card/card";

const Container = styled.div``;

const ContainerBlogTrends = styled.div`
  display: grid;
  grid-template-columns: 1fr min-content;
  grid-gap: 0.5rem;
  
`;

const BlogBox = styled.div({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem",
  objectFit: "cover",
  margin: "0 2rem",
});
const TrendsContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  gridGap: "2rem",
  justifyContent: "space-between",
  marginBottom: "1rem",
});

const TrendingPost = styled.div`
  display: flex;
  flex-direction: column;
`;

class Blogs extends React.Component {
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
          link: "https://material-ui.com/components/links/",
        },
        {
          id: 2,
          title: "adelanke",
          headContent: "Developing Oculus VR",
          content:
            "Virgin mary day to be remembered by all cattholics. This is for all catholic churches to uphold.",
          image: { bgimg },
        },
        {
          id: 3,
          title: "adelanke",
          headContent: "Developing Oculus VR",
          content:
            "Virgin mary day to be remembered by all cattholics. This is for all catholic churches to uphold.",
          image: { bgimg },
        },
        {
          id: 4,
          title: "adelanke",
          headContent: "Developing Oculus VR",
          content:
            "Virgin mary day to be remembered by all cattholics. This is for all catholic churches to uphold.",
          image: { bgimg },
        },
        {
          id: 5,
          title: "adelanke",
          headContent: "Developing Oculus VR",
          content:
            "Virgin mary day to be remembered by all cattholics. This is for all catholic churches to uphold.",
          image: { bgimg },
        },
        {
          id: 6,
          title: "adelanke",
          headContent: "Developing Oculus VR",
          content:
            "Virgin mary day to be remembered by all cattholics. This is for all catholic churches to uphold.",
          image: { bgimg },
        },
        {
          id: 7,
          title: "adelanke",
          headContent: "Developing Oculus VR",
          content:
            "Virgin mary day to be remembered by all cattholics. This is for all catholic churches to uphold.",
          image: { bgimg },
        },
        {
          id: 8,
          title: "adelanke",
          headContent: "Developing Oculus VR",
          content:
            "Virgin mary day to be remembered by all cattholics. This is for all catholic churches to uphold.",
          image: { bgimg },
        },
      ],
      blog: [
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
  /** blogbox contains the blogblock(blog heads) */
  render() {
    return (
      //  BlogBox have a diif style config here and filters to 8posts
      <Container>
        <HeadText padding>From our blog</HeadText>
        <ContainerBlogTrends>
          <BlogBox>
            {this.state.headline
              .filter((el, idx) => idx < 8)
              .map(({ id, title, headContent, image, link, ...props }) => (
                <BlogBlock
                  key={id}
                  title={title}
                  headContent={headContent}
                  image={bgimg}
                  link={link}
                />
              ))}
          </BlogBox>

          <TrendingPost>
            {/* <HeadText >Trending postss</ HeadText> */}
            <TrendsContainer>
              {this.state.blog
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
          </TrendingPost>
        </ContainerBlogTrends>
        <HeadText padding>Other articles</HeadText>
        <Cards />
      </Container>
    );
  }
}
export default Blogs;
