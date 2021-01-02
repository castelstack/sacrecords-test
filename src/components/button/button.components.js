import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
width: ${props => (props.big ? '168px' : '86px')};
height: ${props => (props.big ? '46px' : '28px')};
cursor: pointer;


background: #1CD1A1;
border-radius: 5px;
border: none;
outline: none;
box-shadow: 0px 17px 10px -10px rgba(0,0,0,0.4);

font-family: Gilroy;
font-size: 18px;
line-height: 18px;

color: #FFFFFF;

&:hover {
    background: #16a47e;
    box-shadow: 0px 37px 20px -20px rgba(0,0,0,0.2);
    
}
`

const CustomButton = ({value, onChange, ...otherProps}) => {
    return (
        
        <Button onChange={onChange} {...otherProps}>{value}</Button>
        
    );
};

export default CustomButton;