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
  },
}));

export const table = {
  border: "1px solid #DFE0EB",
  borderRadius: "10px",
};

export const tableHead = {
  color: "#1CD1A1",
};

export const row = {
  fontWeight: "500",
  fontSize: "16px",
  lineHeight: "24px",
  /* identical to box height */

  letterSpacing: "0.2px",

  color: "#1CD1A1",
};

