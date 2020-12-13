import { Link } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

const Container = styled.div({});

const Title = styled.h1({
  fontFamily: "Poppins",
  fontStyle: "normal",
  fontWeight: "600",
  fontSize: "16px",
  lineHeight: "4px",
  /* identical to box height, or 150% */

  display: "flex",
  alignItems: "center",
 
  color: "#FFFFFF",
});

const HeadContent = styled.h3({
  fontFamily: "Poppins",
  fontStyle: "normal",
  fontWeight: "normal",
  fontSize: "20px",
  lineHeight: "5px",
  /* identical to box height */
  width: 'max-content',
  color: "#FFFFFF",
});

/* template box for blog heads */
const BlogBlock = ({ title, headContent, image, link,...props }) => {
  return (
    <Link href={link}>
    
    <Container
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        borderRadius: "5px",
        
        height: "228px",
        
        display: 'flex',
        flexDirection: 'column',
        justifyItem: 'flex-end',
        justifyContent: 'flex-end',
        padding: '0 1rem'
      }}
    >
      <Title>{title}</Title>
      <HeadContent>{headContent}</HeadContent>
      </Container>
      </Link>
  );
};

export default BlogBlock;
