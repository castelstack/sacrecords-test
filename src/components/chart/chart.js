import React, { Component } from "react";
import ControlledOpenSelect from "../../components/dropdown/sort";
import { VictoryAxis, VictoryBar, VictoryChart, VictoryTheme } from "victory";
import styled from "styled-components";
import { TextSub } from "../../constants/styles/constant.style";

const Container = styled.div({
  width: "40rem",
    paddingBottom: '2rem',
    // border: '2px solid #F0F0F0',
    borderRadius: '.6rem',
  boxShadow: "0 9px 6px -6px  rgb(181, 177, 177)",
});
const Bar = styled.div({
  display: "grid",
  gridTemplateColumns: "repeat(2, max-content)",
  justifyContent: "center",
  gridGap: "5rem",
  transform: "translateY(77%)",
});

const HeadText = styled(TextSub)({
  fontWeight: "700",
  fontSize: "12px",

  /* or 208% */

  color: "#858585",
});
const customgreen = "#00F2B8";
const data = [
  { record: 1, number: 2200 },
  { record: 2, number: 1650 },
  { record: 3, number: 2425 },
  { record: 4, number: 1900 },
  { record: 5, number: 2000 },
];

class Chart extends Component {
  render() {
    return (
      <Container>
        <Bar>
          <HeadText>General Registration Statistics</HeadText>
          <ControlledOpenSelect />
        </Bar>
        <VictoryChart
          // domainPadding will add space to each side of VictoryBar to
          // prevent it from overlapping the axis
          domainPadding={{ x: 20, y: 17 }}
          height={350}
          width={400}
          theme={VictoryTheme.material}
        >
          <VictoryAxis
            style={{
              tickLabels: { fontSize: 11, padding: 2 },
            }}
            // tickValues specifies both the number of ticks and where
            // they are placed on the axis
            tickValues={[1, 2, 3, 4, 5]}
            tickFormat={[
              "Baptism",
              "Communion",
              "Confirmation",
              "Matrimony",
              "Death",
            ]}
          />
          <VictoryAxis
            dependentAxis
            style={{
              tickLabels: { fontSize: 10, padding: 1 },
            }}
            // tickFormat specifies how ticks should be displayed
            tickFormat={(x) => `${x / 10}`}
          />
          <VictoryBar
            data={data}
            x='record'
            y='number'
            barWidth={18}
            cornerRadius={8}
            style={{
              data: { fill: customgreen },
            }}
          />
        </VictoryChart>
      </Container>
    );
  }
}

export default Chart;
