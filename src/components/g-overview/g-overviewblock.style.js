import styled from "styled-components";
import { HeadText, TextSub } from "../../constants/styles/constant.style";

export const Container = styled.div({
  display: "grid",
  gridTemplateRows: "repeat(3, min-content)",
  gridTemplateColumns: "1fr 1fr",
  alignContent: "center",

  width: "16.5rem",
  height: "164px",

 
  border: "2px solid #f0f0f0",
  borderRadius: "10px",
  boxShadow: ' 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)'
});

export const Content = styled.div`
  display: flex;
  align-items: center;

  justify-items: center;
  margin-left: 22px;

  grid-row: 2 / 3;
`;
export const ContentSub = styled.div`
  display: flex;
  flex-direction: column;
  grid-row: 2 / 3;
  transform: translate(-35%, 10%);
`;

export const CountBox = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  transform: translateY(-1rem);
`;

export const Frame = styled.img`
height: 6rem;`;

export const Num = styled(HeadText)`
  transform: translate(-182%, -20%);
  display: block;
font-weight: normal;
font-size: 36px;




color: #FCBC04;
`;

export const Nav = styled.img`
  grid-row: 1 / 2;
  grid-column: 2 /3;
  justify-self: end;

  margin-top: 25px;
  margin-right: 25px;
`;

export const Icon = styled.img`
  width: 9px;
  height: 5px;
  transform: translateY(-0.3rem);
`;
export const Base = styled.img`
  grid-row: 3 / 4;
  grid-column: 2 /3;
  justify-self: end;
  transform: translate(-28%, -90%);
`;

export const Title = styled(TextSub)`
  grid-column: 2 /3;
  font-family: Poppins;

  font-size: 16px;
  
  width: 120px;


  color: #858585;
`;

export const Count = styled(TextSub)`
  color: #1cd1a1;
  margin-top: 5px;
`;
