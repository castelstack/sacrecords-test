import React, { Component } from "react";
import { HeadText } from "../../constants/styles/constant.style";

import CertificateTemp from "./certificate-temp.components";
import Avatar from "../../images/avatar/avatar.png";
import CustomButton from "../../components/button/button.components";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div({
  
  display: "flex",
  flexDirection: "column",
  
  borderRadius: "24px",
  flexGrow: '1'
});

const SubContainer = styled.div({
  border: "1px solid rgba(205, 208, 227, 0.295455)",
  boxShadow: "0 9px 6px -6px  rgb(181, 177, 177)",
  boxSizing: "border-box",
  borderRadius: "24px",
  padding: ".5rem",
});

const Title = styled(HeadText)({
  
});



const Headings = styled.div`

display: grid;
grid-template-columns: 240px repeat(2, 200px) ;
justify-content: space-between;
justify-items: flex-start;
padding: 1rem;
border-bottom: 2px solid  #E1E2EB;
&:nth-child(6) {
  
  border-bottom: none;
 
}
`

const Text = styled(HeadText)({
  fontSize: '1.2rem',
  lineHeight: "1px",
  letterSpacing: "-0.774737px",

  color: "#061058",

  mixBlendMode: "normal",
  
});

const Button = styled(CustomButton)({
  alignSelf: 'flex-end',
 
});

class Certificate extends Component {
  constructor() {
    super();
    this.state = {
      certificates: [
        {
          id: 1,
          name: "Amaka Okafor",
          parish: "Divine mercy",
          certificate: "Confirmation",
          date: '07/04/2020',
          image: { Avatar },
        },
        {
          id: 2,
          name: "Emeka Okafor",
          parish: "Divine mercy",
          certificate: "Matrimony",
          date: '07/04/2020',
          image: { Avatar },
        },
        {
          id: 3,
          name: "Ngozi Okafor",
          parish: "Divine mercy",
          certificate: "Confirmation",
          date: '07/04/2020',
          image: { Avatar },
        },
        {
          id: 4,
          name: "Emeka Okafor",
          parish: "Divine mercy",
          certificate: "Matrimony",
          date: '07/04/2020',
          image: { Avatar },
        },
        {
          id: 5,
          name: "Ngozi Okafor",
          parish: "Divine mercy",
          certificate: "Confirmation",
          date: '07/04/2020',
          image: { Avatar },
        },
      ],
    };
  }

  render() {
    return (
      <Container>
        <Title>Sacramental Certificates</Title>
        <SubContainer>
          <Headings>
            <Text>Name</Text>
            <Text>Certificate</Text>
            <Text>Date</Text>
            
          </Headings>

          {this.state.certificates.map(
            ({ id, name, certificate, image, parish, date }) => (
              <CertificateTemp
                key={id}
                name={name}
                parish={parish}
                certificate={certificate}
                image={Avatar}
                date={date}
              />
            )
          )}
          <Link to='/records'><Button value='View all' big /></Link>
        </SubContainer>
      </Container>
    );
  }
}

export default Certificate;
