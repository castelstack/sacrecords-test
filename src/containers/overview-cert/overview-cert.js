import React from 'react';
import { HeadText } from '../../constants/styles/constant.style';
import OverviewCertTable from './ocert-table/table';
import styled from "styled-components";


const Title = styled(HeadText)({
    gridColumn: "1/ -1",
    lineHeight: "29px",
    
  });
const OverviewCert = () => {
    return (
        <div>
            <Title>Certificate</Title>
 
            <OverviewCertTable />
        </div>
    );
};

export default OverviewCert;