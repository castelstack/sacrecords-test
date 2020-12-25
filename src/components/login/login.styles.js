import { Input } from "semantic-ui-react";
import { HeadText } from "../../constants/styles/constant.style";

import styled from "styled-components";

// import { Input } from "semantic-ui-react";

export const Container = styled.div({
  // display: "flex",
  //   justifyContent: "center",
  padding: "98px 0px",
  display: "grid",  
  gridTemplateRows: "repeat(2, min-content)",
  justifyItems: "center",
  gridGap: "65px",
});

export const InputForm = styled.form({
  display: "grid",
  gridTemplateRows: "repeat(4, min-content)",
  justifyItems: "center",
  gridGap: "65px",
});

export const Heading = styled(HeadText)({
  
  lineHeight: "0px",

  letterSpacing: "0.005em",
  textTransform: "capitalize",
  color: "#2E2E2E",
});

export const InputField = styled(Input)`
&:focus {
  border-color: #1CD1A1; 
}
`;

export const LabelText = {
    fontSize: "17px",
    lineHeight: "24px",
    letterSpacing: "0.1px",
    color: '#858585',
    
}
export const gridStyle = {
    display: 'grid',
    gridTemplateRows: 'min-content max-content',
}
export const border = {
    width: '594px',
    height: '62px',

  paddingLeft: "56px ",
  fontWeight: "normal",
  fontSize: "17px",
  lineHeight: "24px",
  letterSpacing: "0.1px",
  borderRadius: "40rem",
  borderColor: " #C4C4C4",
  "&:focus": {
    borderColor: "#1CD1A1",
    backgroundColor: "rgba(242, 242, 242, 0.45)",
  },
};
