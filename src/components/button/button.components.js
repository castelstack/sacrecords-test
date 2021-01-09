import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
width: ${props => (props.big ? '168px' : '86px')};
height: ${props => (props.big ? '46px' : '28px')};
cursor: pointer;


background: #1CD1A1;
border-radius: 50px;
border: none;
outline: none;


font-family: Poppins;
font-size: 18px;
line-height: 18px;

color: #FFFFFF;
transition: all .2s ease-out;
&:hover {
    background: #16a47e;
    box-shadow: 5px 8px 9px -10px rgba(0,0,0,0.4);
    transform: translateY(-.6px);
}

&:active {
    background: #1CD1A1;
    box-shadow: 5px 8px 9px -10px rgba(0,0,0,0.4);
    transform: translateY(.6px);
}
`

const CustomButton = ({value, onChange, type, ...otherProps}) => {
    return (
        
        <Button onChange={onChange} type={type} {...otherProps}>{value}</Button>
        
    );
};

export default CustomButton;