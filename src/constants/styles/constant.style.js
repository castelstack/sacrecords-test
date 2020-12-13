import styled from 'styled-components';

export const TitleHead = styled.h1`
  font-family: Gilroy;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  /* identical to box height */
  
  
  color: #7C7C7C;
  padding: ${props => (props.padding ? '10px 23px' : '0')}
  `