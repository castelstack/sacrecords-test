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
box-shadow: 1px 1px 12px 0px rgba(50, 50, 50, 0.79);

font-family: Gilroy;
font-size: 18px;
line-height: 18px;

color: #FFFFFF;

&:hover {
    background: #16a47e;
    box-shadow: 1px -1px 6px -1px rgba(50, 50, 50, 0.79);
}
`

const CustomButton = ({value, onChange, ...otherProps}) => {
    return (
        
        <Button onChange={onChange} {...otherProps}>{value}</Button>
        
    );
};

export default CustomButton;