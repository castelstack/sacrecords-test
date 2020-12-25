import styled from "styled-components";
import {HeadText, TextSub} from '../../constants/styles/constant.style'
export const Container = styled.div({
    display: "flex",
    flexDirection: "column",
width: '88%',
    justifyContent: "space-between",
  });
  
  export const ParishName = styled(HeadText)({
    lineHeight: "0px",
  });
  
  export const ParishInfo = styled(TextSub)({
   
  });