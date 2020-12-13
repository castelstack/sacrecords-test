import { TextField } from "@material-ui/core";
import React from "react";


// material ui text input component
export const TextInput = ({ label, value, name, onChange, ...props }) => {
    return (
      <div>
        <TextField
          variant="outlined"
          label={label}
          name={name}
                value={value}
                onChange={onChange}
                {...props}
        />
        
      </div>
    );
  };