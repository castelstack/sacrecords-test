import React from "react";
import {
  Table,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
} from "@material-ui/core";
import { useStyle, tableHead, row } from "./table.styles";
import { useState } from "react";

// container component carrying only table and table head wrapper
export const TableContainer = (mass, headCells, filterFn) => {
  const classes = useStyle();

// number of rows in a table page
  const pages = [8, 10, 15];

  // useStates
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(pages[page]);
  const [order, setOrder] = useState();
  const [orderBy, setOrderBy] = useState();

// table container
  const TblContainer = (props) => (
    // table wrapper
    <Table className={classes.table}>{props.children}</Table>
  );

// function for teble head sorting
  const TblHead = (props) => {
    const createSortHandler = (cellId) => {
      const isAsc = orderBy === cellId && order === "asc";
      setOrder(isAsc ? "desc" : "asc");
      setOrderBy(cellId);
    };

    return (
      // table head wrapper
      <TableHead style={tableHead}>
        <TableRow>
          {headCells.map((headCell) => (
            <TableCell style={row} key={headCell.id}
              sortDirection={orderBy === headCell.id ? order : false}>
              {headCell.disabledSorting ? headCell.label : 
              
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : "asc"}
                onClick= {() => {createSortHandler(headCell.id)}}
              >
                {headCell.label}
              </TableSortLabel>
              }
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };


// stable sort function
  function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  }

  function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }
  
  function getComparator(order, orderBy) {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }
  
  

  const massAfterPagingAndSorting = () => {
    return stableSort( filterFn.fn(mass), getComparator(order, orderBy)).slice(
      page * rowsPerPage,
      (page + 1) * rowsPerPage
    );
  };

  const TblPagination = () => {
    return (
      <TablePagination
        component='div'
        page={page}
        rowsPerPageOptions={pages}
        rowsPerPage={rowsPerPage}
        count={mass.length}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    );
  };

  return {
    TblContainer,
    TblHead,
    TblPagination,
    massAfterPagingAndSorting,
  };
};
