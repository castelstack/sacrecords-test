import React from 'react';
import { HeadText } from "../../constants/styles/constant.style";
import About from '../../containers/about/about';
import Support from '../../containers/support/support';
import SendMsg from '../../components/Send-msg/send-msg';
import styled from "styled-components";

const Container = styled.div`
margin: 0 50px;`
const Grid = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
margin-top: 3rem;`;

const AboutSupport = () => {
    return (
        <Container>
            <HeadText>ABOUT</HeadText>
            <About />
            
            <Grid><Support /><SendMsg/></Grid>
        </Container>
    );
};

export default AboutSupport;