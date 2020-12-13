import React, { Component } from "react";
import styled from "styled-components";
import BlogBlock from "./blogblock.components";

import bgimg from "./../../images/blog/blog2.png";


const BlogBox = styled.div({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem",
  objectFit: "cover",
  margin: '0 2rem'
});

class BlogHeads extends Component {
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
      ],
    };
  }
  /** blogbox contains the blogblock(blog heads) */
  render() {
    return (
     
        <BlogBox>
          {this.state.headline.map(({ id, title, headContent, image, ...props }) => (
            <BlogBlock
              key={id}
              title={title}
              headContent={headContent}
              image={bgimg}
            />
          ))}
        </BlogBox>
     
    );
  }
}

export default BlogHeads;
