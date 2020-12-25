import React from 'react';
import { TextSub, HeadText } from "../../constants/styles/constant.style";
import CallIcon from '@material-ui/icons/Call';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EmailIcon from '@material-ui/icons/Email';
import styled from "styled-components";
const Container = styled.div`
align-self: flex-start;
height: 5rem`
const ContactItem = styled.div`
display: flex;
align-items: center;

`;
const ContactInfo = styled(TextSub)`
font-size: .9rem;
line-height: 1px;
margin-left: .4px;
`;
const Contact = () => {
    return (

   <Container>
            <>
            <HeadText>CONTACT INFORMATION</HeadText>
            <ContactItem><LocationOnIcon  style={{ color: "#FCBC04" }}/><ContactInfo>Owerri</ContactInfo></ContactItem>
            <ContactItem><CallIcon style={{ color: "#FCBC04" }}/><ContactInfo>08108776518</ContactInfo></ContactItem>
            <ContactItem><EmailIcon style={{ color: "#FCBC04" }}/><ContactInfo>sacrecord@gmail.com</ContactInfo></ContactItem>
        </>
   </Container>
    );
};

export default Contact;