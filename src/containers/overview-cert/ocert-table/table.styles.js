import { makeStyles } from "@material-ui/core";

export const useStyle = makeStyles(() => ({
    table: {
        
        
    "& thead th": {
          borderRadius: "10px",
        
    },
    "& tbody tr:hover": {
      fontSize: "7rem",
      backgroundColor: "rgba(242,242,242,0.45) ",
        },
        "& tbody tr td": {
            fontFamily: 'Assistant, sans-serif',
  fontSize: '16px',
  lineHeight: '24px',
  letterSpacing: '0.065em',
  color: 'black',
  fontWeight: '500',
            
          }
  },
}));

export const table = {
  border: "1px solid #DFE0EB",
    borderRadius: "10px",
 
};

export const tableHead = {
  color: "#061058",
};

export const row = {
  fontWeight: "500",
  fontSize: "19px",
  lineHeight: "24px",
  /* identical to box height */
    height: '4rem',
  letterSpacing: "0.2px",

  color: "#061058",
};

