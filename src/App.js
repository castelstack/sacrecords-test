import React from "react";
import clsx from "clsx";
import {  useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Header from '../src/components/header/header.components';
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Homepage from "../src/pages/homepage/homepage";
import Overview from "../src/pages/overview/overview.components";
import Records from "../src/pages/records/records";

import Blog from "../src/pages/blog/blog";
import Sidebar from "../src/components/sidebar/sidebar";
import Test from "../src/pages/testing/test";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { useStyles} from './app.styles'


function App() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className='App'>
      <Router>
        <CssBaseline />
        <AppBar
          position='fixed'
          color= 'inherit'
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar  className={classes.tool}>
            <IconButton
              color='inherit'
              aria-label='open drawer'
              onClick={handleDrawerOpen}
              edge='start'
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
           <Header />
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant='persistent'
          anchor='left'
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </div>
          <Divider />
          <List>
            <Sidebar />
          </List>
        </Drawer>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
          <Switch>
            <Route path='/' exact component={Homepage} />
            <Route path='/overview' component={Overview} />
            <Route path='/records' component={Records} />
            <Route path='/test' component={Test} />
            <Route path='/blog' component={Blog} />
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
