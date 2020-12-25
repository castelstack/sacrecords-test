import React from "react";
import OverviewHead from "../../components/g-overview/g-overview.components";
//import Certificate from "../../components/certificate/certificate.components";
import Trends from "../../components/trends/trends";
import BlogContent from "../../components/blog-content/blog-content.components";
import Chart from "../../components/chart/chart";
import Backup from "../../components/backup/backup";
import OverviewCert from '../../containers/overview-cert/overview-cert';
import styled from "styled-components";

const Container = styled.div({
  display: "flex",
  flexDirection: "column",
});
const CertTrends = styled.div({
  display: "grid",
  gridTemplateColumns: '1fr min-content',
 
  margin: "60px 50px",
  gridGap: "5rem",
});

const ChartBackup = styled.div({
  display: "grid",
  gridTemplateRows: "50vh",
  gridTemplateColumns: "1fr min-content",
  margin: "60px 50px",
});
const Overview = () => {
  
  return (
    <Container>
      
      <OverviewHead />
      <CertTrends>
         <OverviewCert /> 
        {/* <Certificate /> */}
        <Trends small/>
      </CertTrends>
      <BlogContent />
      <ChartBackup>
        <Chart />
        <Backup />
      </ChartBackup>
    </Container>
  );
};

export default Overview;
