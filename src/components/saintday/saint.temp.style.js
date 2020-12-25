import { HeadText, TextSub } from "../../constants/styles/constant.style";

import styled from "styled-components";

export const Container = styled.div({
  display: "grid",
  gridTemplateColumns: "repeat(2, max-content)",
  gridGap: "100px",
});

export const SaintContent = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyItems: "center",
  justifyContent: "center",
});

export const CalenderDetails = styled.div({
  display: "grid",
  gridTemplateColumns: "repeat(2, min-content)",
  alignItems: "center",
  alignContent: "start",
  justifyContent: "space-between",
});

export const Title = styled(HeadText)({
  lineHeight: "37px",
});

export const ArrowIcon = styled.img({});

export const SaintName = styled(HeadText)({
  lineHeight: "11px",
});

export const SanitTitle = styled(TextSub)({
  lineHeight: "0px",
});

export const Day = styled(TextSub)({
  fontSize: "12px",
  lineHeight: "37px",
  color: "#000000",
});
export const CalImg = styled.img({
  marginLeft: "5px",
});