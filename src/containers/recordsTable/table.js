import {
  Paper,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { useTable } from "./useTable";
import WithSpinner from '../../components/with-spinner/with-spinner'
import RecordDropdown from "../../components/dropdown/recordDd";
import { useEffect } from "react";
import styled from "styled-components";
import Search from "../../components/search/search.components";
import { HeadBox } from '../../constants/styles/constant.style';
import Axios from "axios";




const SearchBox = styled(Search)`
  margin: 4rem 0;
`;
const headCells = [
  { id: "firstName", label: "Firstname" },
  { id: "lastName", label: "Username" },
  { id: "stateOfOrigin", label: "company" },
  { id: "gender", label: "street" },
  { id: "nameOfPriest", label: "suite", disabledSorting: true },
  { id: "dropdown" },
];

const Table = () => {
  const [loading, setLoading] = useState(true);
  const [records, setRecords] = useState([]);
  const [filterFn, setFilterFn] = useState({
    fn: (items) => {
      return items;
    },
  });

  // api call with axios in useEffect hook
 
  useEffect(() => {
    
    const apiUrl = '/recor';
    Axios.get(apiUrl).then((repos) => {
      const allRecord = repos.data;
      setRecords(allRecord);
      setLoading(false)
    });
  }, [setRecords, setLoading]);

  // function from useTable file
  const {
    TblContainer,
    TblHead,
    TblPagination,
    recordsAfterPagingAndSorting,
  } = useTable(records, headCells, filterFn);

  // onChange for search text field
  const searchHandler = (e) => {
    let target = e.target;
    setFilterFn({
      fn: (items) => {
        if (target.value === "") return items;
        else
          return items.filter((x, api) =>
            x.firstName.toLowerCase().includes(target.value)
          );
      },
    });
  };

  // Container with search field, table head, table body and table pagination
  return (
    <div>
      <Paper>
        <HeadBox flexEnd>
        <SearchBox onChange={searchHandler} placeholder='Search records' />
        </HeadBox>
        {
          loading ?
            <WithSpinner />
            :
        
            <TblContainer
              style={{ border: "1px solid #DFE0EB", borderRadius: "10px" }}
            >
              <TblHead />
              <TableBody>
                {
                  recordsAfterPagingAndSorting().map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>{item.firstName}</TableCell>
                      <TableCell>{item.lastName}</TableCell>
                      <TableCell>
                        <>
                          <Typography>{item.stateOfOrigin}</Typography>
                          <Typography color='textSecondary' variant='subtitle2'>
                            {item.lga}
                          </Typography>
                        </>
                      </TableCell>
                      <TableCell>{item.gender}</TableCell>
                      <TableCell>{item.nameOfPriest}</TableCell>
                      <TableCell>
                        <RecordDropdown />
                      </TableCell>
                    </TableRow>
                  ))
                }
            
          
              </TableBody>
          
            </TblContainer>
        }
        <TblPagination />
      </Paper>
    </div>
  );
};

export default Table;
