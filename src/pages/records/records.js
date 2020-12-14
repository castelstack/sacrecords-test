import React from "react";
import Table from "../../containers/useTable/table";
import styled from "styled-components";

const Container = styled.div`
  margin: 0 50px;
`;

const Records = () => {
  return (
    <Container>
      <Table />
    </Container>
  );
};

export default Records;
