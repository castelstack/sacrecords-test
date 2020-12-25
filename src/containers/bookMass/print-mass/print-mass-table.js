import { Paper, TableBody, TableCell, TableRow } from "@material-ui/core";
import React, { useState } from "react";
import { TableContainer } from "./print-table-container";
import MASS from "../../../components/MASS.json";
import RecordDropdown from "../../../components/dropdown/recordDd";
import { useEffect } from "react";
import styled from "styled-components";
import Search from "../../../components/search/search.components";
//import { useParams } from "react-router-dom";

const HeadBox = styled.div`
  background-color: #1cd1a1;

  height: 43px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const SearchBox = styled(Search)`
  padding: 2rem 0;
`;
// array of table head cells label and data<thead>
const headCells = [
  { id: "name", label: "Name" },
  { id: "reason", label: "Reason" },
  { id: "massTime", label: "Mass Time" },
  
  { id: "dropdown" },
];

const PrintMassTable = (props) => {
  
  

  
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
      <HeadBox>
        <SearchBox onChange={searchHandler} placeholder='PRINT mass' />
      </HeadBox>
      <Paper>
        
        <TblContainer
          style={{ border: "1px solid #DFE0EB", borderRadius: "10px" }}
        >
          <TblHead />
          <TableBody>
            {massAfterPagingAndSorting().map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.reason}</TableCell>
                <TableCell>{item.massTime}</TableCell>
              
                <TableCell>
                  <RecordDropdown />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TblContainer>
        <TblPagination />
      </Paper>
    </div>
  );
};

export default PrintMassTable;
