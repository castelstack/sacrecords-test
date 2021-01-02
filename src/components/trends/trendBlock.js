import { Avatar } from '@material-ui/core';

import React from 'react';
import { HeadText, TextSub } from "../../constants/styles/constant.style";
import styled from 'styled-components';

const Container = styled.div({
    display: 'grid',
    gridTemplateColumns: 'min-content 260px',
    width: '280px',
    

})

const ContainerInfo = styled.div`
    display: grid;
    grid-template-rows: repeat(3,min-content);

`

const Title = styled(HeadText)({
fontWeight: '600',
fontSize: '21px',
lineHeight: '0px',


})

const Content = styled(TextSub)({

fontSize: '13px',
lineHeight: '15px'



})
const Link = styled.a({
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '4px',
    
    color: '#1CD1A1',
    textDecoration: 'none'
})
const TrendBlock = ({ title, content, image, link, ...props }) => {
    return (
        <Container>
            <Avatar alt="blog pic" src={image} style={{ marginRight: '24px' }}/>
            <ContainerInfo>
                <Title>{title}</Title>
                <Content>{content}</Content>
                <Link href="http://#">Read full Details</Link>
            </ContainerInfo>
            
        </Container>
    );
};

export default TrendBlock;