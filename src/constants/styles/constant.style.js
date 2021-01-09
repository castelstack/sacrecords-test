import styled from "styled-components";

export const HeadText = styled.h1`
font-family: Poppins;
  font-weight: 600;
  font-size: 20px;
  line-height: 29px;
  /* identical to box height */
  
  
  color: #061058;
  padding: ${(props) => (props.padding ? "10px 23px" : "0")}
  `;

  export const MedHeadText = styled.h1`
  font-family: Poppins;
    font-weight: 600;
    font-size: 18px;
    line-height: 29px;
    /* identical to box height */
    
    
    color: #061058;
    padding: ${(props) => (props.padding ? "10px 23px" : "0")}
    `;
  

export const TextSub = styled.h3`
font-family: Poppins;

  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.065em;
  color: #424242;
  font-weight: 300;
`;

export const HeadBox = styled.div`
  background-color: #1cd1a1;
  padding: 0 1rem;
  height: 50px;
  display: flex;
  
  align-items: center;
  justify-content: ${(props) => (props.flexEnd ? "flex-end" : "flex-start")}
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 13rem 1fr;
  grid-gap: 2rem;
`;