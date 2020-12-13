import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
width: ${props => (props.big ? '168px' : '86px')};
height: ${props => (props.big ? '46px' : '28px')};
cursor: pointer;


background: #1CD1A1;
border-radius: 100px;
border: none;
outline: none;


font-family: Gilroy;
font-size: 18px;
line-height: 18px;

color: #FFFFFF;

&:hover {
    background: #16a47e;
}
`

const CustomButton = ({value, ...otherProps}) => {
    return (
        
            <Button {...otherProps}>{value}</Button>
        
    );
};

export default CustomButton;