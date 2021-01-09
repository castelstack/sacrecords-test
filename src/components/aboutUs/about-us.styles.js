import styled from "styled-components";
import { HeadText, TextSub } from "../../constants/styles/constant.style";
export const Containerr = styled.div({
  margin: "50px 50px",

  display: "grid",
  gridTemplateRows: "min-content 1fr",
  
});

export const ContainerSub = styled.div({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gridGap: "45px",
  alignItems: "self-start",
  
});

export const MainText = styled(HeadText)({
  lineHeight: "37px",
});

export const SubText = styled(TextSub)({
  width: "100%",
  transform: "translateY(-1rem)",
  lineHeight: "37px",
  marginRight: "52px",
  padding: "18px 21px",
  border: "1px solid #EFEFEF",
  boxSizing: "border-box",
  borderRadius: "10px",
  boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)'
});
