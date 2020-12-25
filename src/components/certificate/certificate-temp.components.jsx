import React from "react";
import { TextSub } from "../../constants/styles/constant.style";
import CertDropdown from '../dropdown/cert-dropdown';
import styled from "styled-components";

const Container = styled.div`

display: grid;
grid-template-columns: repeat(3, 210px) ;
justify-content: space-between;
justify-items: flex-start;
padding: 1rem;
border-bottom: 2px solid  #E1E2EB;
&:nth-child(6) {
  
  border-bottom: none;
 
}

`


const NameParish = styled.ul({
  marginLeft: '-3.7rem',
  listStyleType: 'none'
});

const MemberInfo = styled.div({
  display: "grid",
  gridTemplateColumns: 'repeat(2, min-content) ',

});

const Name = styled.li`
  font-weight: 600;
  font-size: 16px;
  width: max-content;
  line-height: 8px;
  color: #061058;
  margin-bottom: .5rem;
`

const Parish = styled.li({
  fontWeight: "500",
  fontSize: "14px",
  lineHeight: '8px',
  /* identical to box height */
marginTop: '1rem',
  color: "#B4B7CC",
});

const Certificate = styled(TextSub)({
  display: "flex",
  
  color: "#1CD1A1",
});
const Dot = styled.div({
  background: "#FCBC04",
  borderRadius: "8px",
  height: "18px",
  width: "18px",
  marginRight: "8px",
});

const Image = styled.img({
  height: "80px",
  width: "80px",
  marginRight: "24px",
});

const Date = styled(TextSub)({
  color: "#061058",
  display: 'grid',
  gridTemplateColumns: 'repeat(2, max-content)',
  gridGap: '4rem'
});

const CertificateTemp = ({
  name,
  certificate,
  image,
  parish,
  date,
  ...props
}) => {
  return (
    <Container>
      <MemberInfo>
        <Image src={image} alt={name} />
        <NameParish>
          <Name>{name}</Name>
          <Parish>{parish}</Parish>
        </NameParish>
      </MemberInfo>
      <Certificate>
        <Dot></Dot>
        {certificate}
      </Certificate>
      <Date >{date} <CertDropdown style={{ marginLeft: '10rem' }}/></Date>
    
        
    </Container>
  );
};

export default CertificateTemp;
