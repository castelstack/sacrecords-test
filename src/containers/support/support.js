import React from 'react';
import SupportTeam from '../../components/support-team/support-team';
import Contact from '../../components/contact/contact';
import styled from "styled-components";

const Container = styled.div`
display: grid;
grid-template-rows: repeat(2, min-content);
width: 29rem;
`;
const Support = () => {
    return (
        <Container>
            <SupportTeam />
            <Contact />
        </Container>
    );
};

export default Support;