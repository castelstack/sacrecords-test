import {
  // Checkbox,
  // FormControlLabel,
  Paper,
  TableBody,
  TableCell,
  TableRow,
  Typography,
  //withStyles,
} from "@material-ui/core";
import React, { useState } from "react";
import { useTable } from "./useTable";
// import axios from "axios";
import { TextInput } from "../../components/input/textInput";
import DATAA from "../../components/DATAA.json";
// import DATA from "../../components/DATA.json";
import RecordDropdown from "../../components/dropdown/recordDd";
// import SearchContainer from "../../containers/searchContainer/searchContainer"
import { useEffect } from "react";
import { Search } from "@material-ui/icons";
//import { green, grey } from "@material-ui/core/colors";
const headCells = [
  { id: "firstName", label: "Firstname" },
  { id: "lastName", label: "Username" },
  { id: "stateOfOrigin", label: "company",},
  { id: "gender", label: "street" },
  { id: "nameOfPriest", label: "suite", disabledSorting: true },
  { id: "dropdown" },
];

const Table = () => {
  const [records, setRecords] = useState([]);
  const [filterFn, setFilterFn] = useState({
    fn: (items) => {
      return items;
    },
  });
 // const [api, setApi] = useState('');
  
  //const [state, setState] = React.useState({
    //checked: true, 
  //});

 


  // api call with axios in useEffect hook
  useEffect(
    function effectFunction() {
      function fetchData() {
        const response = { DATAA };
        
        const result = response.DATAA;
        setRecords(result);
        console.log(result);
        return response;
      }
      fetchData();
    },
    [setRecords]
  );

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
        if (target.value === "")
        return items;
        else
          return items.filter((x, api) =>
            
            x.gender.toLowerCase().includes(target.value)
           
          );
      },
    });
  };




  // checkbox styling
  // const GreenCheckbox = withStyles({
  //   root: {
  //     color: grey,
  //     '&$checked': {
  //       color: green[600],
  //     },
  //   },
  //   checked: {},
  // })((props) => <Checkbox color="default" {...props} />);
  return (
    <div>
      <Paper>
      {/* <FormControlLabel
        control={<GreenCheckbox checked={setState.checked} onChange={setApi('gender')} name="checkedG" />}
        label="gender"
        /> */}
        
        <TextInput
          variant='outlined'
          label='search records'
          name='searchrecords'
          size='small'
          onChange={searchHandler}
          icon={Search}
        >
          <Search />
        </TextInput>

        <TblContainer
          style={{ border: "1px solid #DFE0EB", borderRadius: "10px" }}
        >
          <TblHead />
          <TableBody>
            {recordsAfterPagingAndSorting().map((item) => (
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
            ))}
          </TableBody>
        </TblContainer>
        <TblPagination />
      </Paper>
    </div>
  );
};

export default Table;
