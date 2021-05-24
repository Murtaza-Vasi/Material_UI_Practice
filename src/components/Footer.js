import React from "react";
import {
  Grid,
  makeStyles,
  TextField,
  Typography,
  InputAdornment
} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "48px 48px 64px"
  },
  img: {
    margin: "16px auto"
  },
  iconContainer: {
    display: "flex",
    alignItems: "center",
    margin: "24px 0"
  },
  icon: {
    marginRight: "16px"
  },
  item1: {
    maxWidth: "250px"
  },
  title: {
    fontSize: "16px",
    fontWeight: "bold",
    margin: "16px auto"
  },
  itemList: {
    color: "#160637",
    fontSize: "12px"
  },
  inputContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    boxShadow: "1px 2px 2px 1px rgba(0,0,0,0.1)"
  },
  input: {
    border: "0",
    fontSize: "14px",
    padding: "16px",
    color: "#888",
    letterSpacing: "0.5px",
    "&:focus": {
      outline: "none"
    }
  },
  sendIcon: {
    margin: "8px",
    color: "#722ED1"
  }
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <>
      <Grid
        container
        alignItems="flex-start"
        justify="space-around"
        alignContent="center"
        className={classes.root}
      >
        <Grid item className={classes.item1}>
          <img src="images/Logo.png" alt="Logo" className={classes.img} />
          <Typography paragraph gutterBottom>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat ut wisi enim ad minim
          </Typography>
          <div className={classes.iconContainer}>
            <img
              src="images/facebook-icon.png"
              alt="facebook-icon"
              className={classes.icon}
            />
            <img
              src="images/twitter-3.png"
              alt="twitter-icon"
              className={classes.icon}
            />
            <img
              src="images/instagram-2016.png"
              alt="instagram-icon"
              className={classes.icon}
            />
          </div>
        </Grid>
        <Grid item>
          <Typography variant="h6" className={classes.title}>
            Product
          </Typography>
          <div className={classes.itemList}>
            <Typography variant="body1" gutterBottom>
              Connections
            </Typography>
            <Typography variant="body1" gutterBottom>
              Protocols
            </Typography>
            <Typography variant="body1" gutterBottom>
              Intergrations Catalog
            </Typography>
            <Typography variant="body1" gutterBottom>
              Pricing
            </Typography>
            <Typography variant="body1" gutterBottom>
              Security
            </Typography>
            <Typography variant="body1" gutterBottom>
              GDPR
            </Typography>
          </div>
        </Grid>
        <Grid item>
          <Typography variant="h6" className={classes.title}>
            For Developers
          </Typography>
          <div className={classes.itemList}>
            <Typography variant="body1" gutterBottom>
              Docs
            </Typography>
            <Typography variant="body1" gutterBottom>
              API
            </Typography>
            <Typography variant="body1" gutterBottom>
              Open Source
            </Typography>
            <Typography variant="body1" gutterBottom>
              Engineering Team
            </Typography>
          </div>
        </Grid>
        <Grid item>
          <Typography variant="h6" className={classes.title}>
            Company
          </Typography>
          <div className={classes.itemList}>
            <Typography variant="body1" gutterBottom>
              Careers
            </Typography>
            <Typography variant="body1" gutterBottom>
              Blog
            </Typography>
            <Typography variant="body1" gutterBottom>
              Press
            </Typography>
          </div>
        </Grid>
        <Grid item>
          <Typography variant="h6" className={classes.title}>
            Support
          </Typography>
          <div className={classes.itemList}>
            <Typography variant="body1" gutterBottom>
              Help Center
            </Typography>
            <Typography variant="body1" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body1" gutterBottom>
              Security Bulletins
            </Typography>
            <Typography variant="body1" gutterBottom>
              Documentation
            </Typography>
            <Typography variant="body1" gutterBottom>
              Partner Portal
            </Typography>
          </div>
        </Grid>
        <Grid item>
          <Typography variant="h6" className={classes.title}>
            Newsletter
          </Typography>
          <div className={classes.inputContainer}>
            <input type="email" placeholder="Email" className={classes.input} />
            <span>
              <SendIcon className={classes.sendIcon} />
            </span>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Footer;
