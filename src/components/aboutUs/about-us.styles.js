import styled from "styled-components";

export const Containerr = styled.div({
  margin: "23px 50px",
  
    display: "grid",
    gridTemplateRows: "min-content 1fr",
  });
  
  export const ContainerSub = styled.div({
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gridGap: '27px',
    alignItems: "self-start",
  });
  
  export const MainText = styled.h1({
    fontFamily: "Gilroy",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "24px",
    lineHeight: "37px",
  
    letterSpacing: "0.005em",
  
    color: "#2E2E2E",
  });
  
  export const SubText = styled.h3({
    width: "100%",
    transform: 'translateY(-1rem)',
  
  
    fontFamily: "Gilroy",
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: "18px",
    lineHeight: "37px",
    marginRight: "52px",
    letterSpacing: "0.065em",
  
    color: "#3E3E3E",
  
    padding: "18px 21px",
  
    border: "1px solid #EFEFEF",
    boxSizing: "border-box",
    borderRadius: "22px",
  });