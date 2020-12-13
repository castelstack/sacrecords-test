import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded';
import PrintRoundedIcon from '@material-ui/icons/PrintRounded';
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Divider } from "@material-ui/core";

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

export default function CertDropdown() {
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
              size={9}
      >
        <StyledMenuItem>
          <ListItemIcon>
            <AddCircleOutlineRoundedIcon fontSize='small' style={{ color: '#FCBC04' }}/>
          </ListItemIcon>
          <ListItemText primary='Update' />
              </StyledMenuItem>
              <Divider light />
        <StyledMenuItem>
          <ListItemIcon>
                      <PrintRoundedIcon fontSize='small' style={{ color: '#1CD1A1' }}/>
          </ListItemIcon>
          <ListItemText primary='Print' />
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}
