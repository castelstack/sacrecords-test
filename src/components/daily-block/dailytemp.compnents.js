import React from "react";

import styled from "styled-components";

const Container = styled.div({

  display: 'grid',
  gridTemplateRows: 'repeat(3, min-content)',
  gridTemplateColumns: '1fr 1fr',
  alignContent: 'center',

  width: '311px',
  height: '164px',

 
  border: '2px solid #f0f0f0',
  borderRadius: '10px',
})

  
  
  



const Content = styled.div`
  display: flex;
  align-items: center;

  justify-items: center;
  margin-left: 25px;
  
  grid-row: 2 / 3;
`;
const ContentSub = styled.div`
display: flex;
flex-direction: column;
grid-row: 2 / 3;
transform: translate(-35%, 10%);
`;

const CountBox = styled.div`
display: flex;
  align-content: center;
  align-items: center;
  transform: translateY(-1rem);`;

const Frame = styled.img``;

const Logo = styled.img`
  transform: translate(-200%, -19%);
  display: block;
  width: 44px;
  height: 40px;
`;

const Nav = styled.img`
  grid-row: 1 / 2;
  grid-column: 2 /3;
  justify-self: end;

  margin-top: 25px;
  margin-right: 25px;
`;

const Icon = styled.img`
  width: 9px;
  height: 5px;
  transform: translateY(-.3rem);
`;
const Base = styled.img`
grid-row: 3 / 4;
grid-column: 2 /3;
justify-self: end;
transform: translate(-35%, -70%);`;

const Title = styled.h1`
  grid-column: 2 /3;
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  width: 120px;
  /* identical to box height */

  color: #858585;
`;

const Count = styled.h3`
  color: #1cd1a1;
  margin-top: 5px;                    
`;

const DailyBox = ({ frame, nav, title, base, icon, count, img,  margin}) => {
  return (
    <Container>
      <Nav src={nav} alt='navigator' />

      <Content>
        <Frame src={frame} alt='Frame' />
        <Logo src={img} alt='logo' />
      </Content>
      
      <ContentSub>
        <Title>{title}</Title>
        <CountBox>
          <Count>{count}</Count>
          <Icon src={icon} alt='content' />
        </CountBox>
      </ContentSub>

      <Base src={base} alt='base' />
    </Container>
  );
};

export default DailyBox;
