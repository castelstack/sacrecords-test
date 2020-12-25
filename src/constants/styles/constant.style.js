import styled from "styled-components";

export const HeadText = styled.h1`
font-family: Antic Slab;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  /* identical to box height */
  
  
  color: #061058;
  padding: ${(props) => (props.padding ? "10px 23px" : "0")}
  `;



export const TextSub = styled.h3`
font-family: 'Assistant', sans-serif; 
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.065em;
  color: black;
  font-weight: 500;
`;

export const HeadBox = styled.div`
  background-color: #1cd1a1;
  padding: 0 1rem;
  height: 43px;
  display: flex;
  
  align-items: center;
  justify-content: ${(props) => (props.flexEnd ? "flex-end" : "flex-start")}
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 13rem 1fr;
  grid-gap: 2rem;
`;