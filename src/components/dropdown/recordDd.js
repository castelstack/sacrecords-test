import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import ListItemText from "@material-ui/core/ListItemText";
import EditRoundedIcon from '@material-ui/icons/EditRounded';

import MoreVertIcon from "@material-ui/icons/MoreVert";


const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.white,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.grey,
      },
    },
  },
}))(MenuItem);

export default function RecordDropdown() {
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
        aria-controls='customized-menu'
        aria-haspopup='true'
              onClick={handleClick}
              
      >
        <MoreVertIcon />
      </Button>
      <StyledMenu
        id='customized-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
              onClose={handleClose}
              size={2}
      >
        <StyledMenuItem >
          
            <EditRoundedIcon fontSize='small'  style={{ color: "#1CD1A1", marginRight: '5px' }}/>

          <ListItemText primary='Edit detals' />
              </StyledMenuItem>
            
      </StyledMenu>
     
    </div>
  );
}

