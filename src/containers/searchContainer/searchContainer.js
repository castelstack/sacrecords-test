/* eslint-disable no-use-before-define */
import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import axios from "axios";
const filter = createFilterOptions();

export default function SearchContainer() {
    const [value, setValue] = useState(null);
    const [records, setRecords] = useState([]);
   
  
    useEffect(
      function effectFunction() {
        async function fetchData() {
          const response = await axios(
            "https://jsonplaceholder.typicode.com/users"
          );
          setRecords(response.data);
          console.log(response.data);
          return response;
        }
        fetchData();
      },
      [setRecords]
    );

  return (
    <Autocomplete
      value={value}
      onChange={(event, newValue) => {
        if (typeof newValue === 'string') {
          setValue({
            username: newValue,
          });
        } else if (newValue && newValue.inputValue) {
          // Create a new value from the user input
          setValue({
            username: newValue.inputValue,
          });
        } else {
          setValue(newValue);
        }
      }}
      filterOptions={(options, params) => {
        const filtered = filter(options, params);

        // Suggest the creation of a new value
        if (params.inputValue !== '') {
          filtered.push({
            inputValue: params.inputValue,
            username: `Add "${params.inputValue}"`,
          });
        }

        return filtered;
      }}
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      id="free-solo-with-text-demo"
      options={records}
      getOptionLabel={(option) => {
        // Value selected with enter, right from the input
        if (typeof option === 'string') {
          return option;
        }
        // Add "xxx" option created dynamically
        if (option.inputValue) {
          return option.inputValue;
        }
        // Regular option
        return option.username;
      }}
      renderOption={(option) => option.username}
      style={{ width: 300 }}
      freeSolo
      renderInput={(params) => (
        <TextField {...params} label="Free solo with text demo" variant="outlined" />
      )}
    />
  );
}