import { Link } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import { HeadText, TextSub } from "../../constants/styles/constant.style";

const Container = styled.div({});
const Heading = styled.div`
  background-color: white;
  background: rgb(0, 0, 0);
  background: rgba(0, 0, 0, 0.5);
  
  
  padding: 0rem 0.4rem;
  
`;

const Title = styled(HeadText)({
  fontWeight: "bold",
  fontSize: "1.2rem",
  lineHeight: "19px",
  display: "flex",
  alignItems: "center",
  color: "white",
});

const HeadContent = styled(TextSub)({
  fontSize: ".8rem",
  lineHeight: "19px",

  color: "#FFFFFF",
});

/* template box for blog heads */
const BlogBlockCard = ({ title, headContent, image, link, ...props }) => {
  return (
    <Link href={link}>
      <Container
        style={{
          backgroundImage: `url(${image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          borderRadius: "5px",

          height: "228px",

          display: "flex",
          flexDirection: "column",
          justifyItem: "flex-end",
          justifyContent: "flex-end",
          
        }}
      >
        <Heading>
      
            <Title>{title}</Title>
            <HeadContent>{headContent}</HeadContent>
          
        </Heading>
      </Container>
    </Link>
  );
};

export default BlogBlockCard;
