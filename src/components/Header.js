import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  makeStyles
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "transparent",
    width: "100vw"
  },
  toolbar: {
    display: "flex",
    margin: "auto 10%",
    alignContent: "center",
    justifyContent: "space-around"
  },
  menuContainer: {
    width: "80%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    flexGrow: 1
  },
  menuItem: {
    padding: theme.spacing(2),
    cursor: "pointer",
    textTransform: "capitalize",
    color: "#595959"
  },
  getStarted: {
    border: "1px solid #722ED1",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    borderRadius: "20px",
    color: "#722ED1"
  },
  logoContainer: {
    flexGrow: 1
  }
}));

const Header = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static" className={classes.appBar} elevation={0}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            aria-label="menu"
            className={classes.logoContainer}
          >
            <img src="images/Logo-1.png" alt="Logo" />
          </IconButton>
          <div className={classes.menuContainer}>
            <Button
              color="primary"
              className={classes.menuItem}
              endIcon={<ExpandMoreIcon />}
            >
              About
            </Button>
            <Button color="primary" className={classes.menuItem}>
              Pricing
            </Button>
            <Button color="primary" className={classes.menuItem}>
              Contact us
            </Button>
            <Button color="primary" className={classes.menuItem}>
              Login
            </Button>
            <Button
              color="primary"
              className={(classes.menuItem, classes.getStarted)}
            >
              Get Started
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
