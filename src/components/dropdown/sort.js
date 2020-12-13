import FilterListIcon from "@material-ui/icons/FilterList";

import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Divider, Typography } from "@material-ui/core";

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls='simple-menu'
        aria-haspopup='true'
        onClick={handleClick}
      >
        <FilterListIcon />{" "}
        <Typography
          style={{
            fontSize: "15px",
            letterSpacing: "0.005em",
            textTransform: "lowercase",
            color: "rgba(0, 0, 0, 0.8)",
            fontFamily: "Inter",
            fontStyle: "normal",
            fontWeight: "normal",
          }}
        >
          Sort by
        </Typography>
      </Button>
      <Menu
        id='simple-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}> Baptism</MenuItem>
        <Divider light />
        <MenuItem onClick={handleClose}>Communion</MenuItem>
        <Divider light />
        <MenuItem onClick={handleClose}>Confirmation</MenuItem>
        <Divider light />
        <MenuItem onClick={handleClose}>Matrimony</MenuItem>
        <Divider light />
        <MenuItem onClick={handleClose}>Death</MenuItem>
        <Divider light />
      </Menu>
    </div>
  );
}
