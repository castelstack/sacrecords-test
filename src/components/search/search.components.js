import React from "react";
import styled from "styled-components";
//import SearchIcon from "../../images/Search.png";
import SearchIcon from '@material-ui/icons/Search';

//import InputSearch from "../../components/input/input.components";

const Container = styled.div`
display: flex;
align-items: center;
margin-right: .7rem;
justify-self: ${(props) =>
  props.end ? "flex-end" : "none"};
`;

const Icon = styled(SearchIcon)`
transform: translateX(2rem);
margin-right: -3px;
`;
const InputSearch =styled.input` 

padding: 15px 45px;

font-family: Antic Slab;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;

/* or 240% */
/*color: #3E3E3E;*/

mix-blend-mode: normal;
opacity: 0.5;

/* for box */
width: 320px;
height: 20px;
outline: 0;


border-radius: 100px;

&:focus {
  border-color: #1CD1A1; 
}
`;



const Search = ({onChange, placeholder, ...props}) => {
  return (
      <Container end='end' >
          <Icon />
      <InputSearch icon={SearchIcon} type='text' name='search' placeholder={placeholder} onChange={onChange}/>
         
    </Container>
  );
};

export default Search;
