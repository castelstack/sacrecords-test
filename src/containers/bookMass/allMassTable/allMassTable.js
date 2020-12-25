import { Paper, TableBody, TableCell, TableRow } from "@material-ui/core";
import React, { useState } from "react";
import { TableContainer } from "./tableContainer";
import MASS from "../../../components/MASS.json";
import MassDropdown from "../../../components/dropdown/mass-dropdown";
import { useEffect } from "react";
import styled from "styled-components";
import Search from "../../../components/search/search.components";
import { HeadBox } from '../../../constants/styles/constant.style';


const SearchBox = styled(Search)`
  padding: 2rem 0;
`;
// array of table head cells label and data<thead>
const headCells = [
  { id: "name", label: "Name" },
  { id: "reason", label: "Reason" },
  { id: "massTime", label: "Mass Time" },
  { id: "count", label: "Count" },
  { id: "date", label: "Date", disabledSorting: true },
  { id: "dropdown" },
];

const AllMassTable = () => {
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
      <HeadBox flexEnd>
        <SearchBox onChange={searchHandler} placeholder='Search mass' />
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
                <TableCell>{item.count}</TableCell>
                <TableCell>{item.date}</TableCell>
                <TableCell>
                  <MassDropdown />
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

export default AllMassTable;
