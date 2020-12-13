import { Avatar } from '@material-ui/core';

import React from 'react';

import styled from 'styled-components';

const Container = styled.div({
    display: 'grid',
    gridTemplateColumns: 'min-content 250px',
    width: '360px',
    

})

const ContainerInfo = styled.div`
    display: grid;
    grid-template-rows: repeat(3,min-content);

`

const Title = styled.h2({
    fontFamily: 'DM Sans',
fontStyle: 'normal',
fontWeight: '500',
fontSize: '21.1569px',
lineHeight: '1px',

color: '#000000',
})

const Content = styled.h2({
    fontFamily: 'DM Sans',
fontStyle: 'normal',
fontWeight: 'normal',
fontSize: '13.4635px',


color: '#000000',
mixBlendMode: 'normal',
opacity: '0.4',
})
const Link = styled.a({
    fontFamily: 'Gilroy-Medium',
    fontStyle: 'normal',
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