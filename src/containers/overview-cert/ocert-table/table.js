import { Paper, TableBody, TableCell, TableRow } from "@material-ui/core";
import React, { useState } from "react";
import { TableContainer } from "./table-container";
import MASS from "../../../components/MASS.json";

import { useEffect } from "react";
import styled from "styled-components";
import Search from "../../../components/search/search.components";
import { TextSub } from '../../../constants/styles/constant.style';
import CustomButton from '../../../components/button/button.components';
import { useHistory } from "react-router-dom";

const Button = styled(CustomButton)({
    alignSelf: 'flex-end',
   
});
  
const Text = styled(TextSub)`
    font-size: 16px;
`;

const SearchBox = styled(Search)`
  padding: 2rem 0;
`;
// array of table head cells label and data<thead>
const headCells = [
  { id: "name", label: "Name" },
  { id: "certificate", label: "Certificate" },
  { id: "date", label: "Date" },
  
  
];

const OverviewCertTable = () => {
  const [mass, setMass] = useState([]);
  const [filterFn, setFilterFn] = useState({
    fn: (items) => {
      return items;
    },
  });

  // api call with axios in useEffect hook
  useEffect(
    function effectFunction() {
      function fetchData() {
        const response = { MASS };

        const result = response.MASS;
        setMass(result);
        console.log(result);
        return response;
      }
      fetchData();
    },
    [setMass]
  );
      //usehistory hook for button to push to /records
      let history = useHistory();

      function handleClick() {
        history.push("/records");
      }

  // function from useTable file
  const {
    TblContainer,
    TblHead,
    TblPagination,
    massAfterPagingAndSorting,
  } = TableContainer(mass, headCells, filterFn);

  // onChange for search text field
  const searchHandler = (e) => {
    let target = e.target;
    setFilterFn({
      fn: (items) => {
        if (target.value === "") return items;
        else
          return items.filter((x, api) =>
            x.name.toLowerCase().includes(target.value)
          );
      },
    });
  };


  // Container with search field, table head, table body and table pagination
  return (
    <div>
      
      <Paper>
        <TblContainer
          style={{ border: "1px solid #DFE0EB", borderRadius: "10px" }}
        >
          <TblHead />
          <TableBody>
            {massAfterPagingAndSorting().map((item) => (
              <TableRow key={item.id}>
                <TableCell><Text>{item.name}</Text></TableCell>
                <TableCell><Text>{item.certificate}</Text></TableCell>
                <TableCell><Text>{item.date}</Text></TableCell>
                
                
              </TableRow>
            ))}
          </TableBody>
        </TblContainer>
              <Button value='View all' onChange={handleClick} big style={{ margin: '.9rem' }}/>
      </Paper>
    </div>
  );
};

export default OverviewCertTable;
