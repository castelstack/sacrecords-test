import React, { Component } from "react";

import { VictoryAxis, VictoryBar, VictoryChart, VictoryTheme } from "victory";
import styled from "styled-components";
import {  HeadText } from "../../constants/styles/constant.style";

const Container = styled.div({
  width: "40rem",
    paddingBottom: '2rem',
    // border: '2px solid #F0F0F0',
    borderRadius: '.6rem',
  boxShadow: "0 9px 6px -6px  rgb(181, 177, 177)",
});


const Heading = styled(HeadText)({
  fontWeight: "700",
  fontSize: "18px",

  /* or 208% */

 
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
      
          <Heading>General Registration Statistics</Heading>
          
      
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
