import React from "react";
import { Grid, Typography, Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "10% 0"
  },
  container: {
    width: "50%",
    padding: "5%"
  },
  formContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#fff",
    padding: "56px",
    boxShadow: "0.8px 0.6px 2px 0.6px rgba(0,0,0,0.1)"
  },
  title: {
    fontWeight: "bold",
    fontSize: "36px",
    marginBottom: "24px",
    paddingLeft: "64px"
  },
  lineContainer: {
    width: 400,
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  line: {
    margin: "16px 0",
    width: "100%",
    height: "1px",
    backgroundColor: "#8989A2"
  },
  trustedBy: {
    whiteSpace: "nowrap",
    margin: "0 10px",
    color: "#8989A2"
  },
  formControl: {
    display: "block"
  },
  login: {
    textDecoration: "underline",
    color: "#1563FF"
  },
  textField: {
    fontSize: "16px",
    padding: "16px",
    margin: "8px 0",
    width: "340px",
    color: "#8989A2",
    borderRadius: "4px",
    borderColor: "#8989A2",
    "&:focus": {
      outline: "none"
    }
  },
  submitBtn: {
    fontSize: "14px",
    margin: "16px",
    width: "100%",
    backgroundColor: "#722ED1",
    color: "#fff",
    textTransform: "capitalize",
    padding: "16px",
    "&:hover": {
      backgroundColor: "#722ED1"
    }
  },
  img: {
    margin: "16px"
  },
  background: {
    height: "630px",
    width: "530px",
    position: "absolute",
    backgroundColor: "#F9F0FF",
    borderRadius: "4px",
    zIndex: "-1",
    left: "-7%",
    top: "7%"
  }
}));

const Signup = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      alignItems="center"
      justify="space-around"
      direction="row"
      className={classes.root}
    >
      <Grid item className={classes.container}>
        <Grid
          container
          direction="column"
          alignItems="center"
          justify="space-around"
          spacing={6}
        >
          <Grid item>
            <Typography variant="h4" className={classes.title} align="center">
              See why the world’s best companies use Qubly to become truly
              data-driven.
            </Typography>
          </Grid>
          <Grid item>
            <div className={classes.lineContainer}>
              <div className={classes.line} />
              <Typography variant="subtitle1" className={classes.trustedBy}>
                Trusted By
              </Typography>
              <div className={classes.line} />
            </div>
          </Grid>
          <Grid item container justify="space-around" alignItems="center">
            <img src="images/accenture-4.png" alt="accenture" />
            <img src="images/react.png" alt="react" />
          </Grid>
          <Grid item container justify="space-around" alignItems="center">
            <img src="images/airbnb.png" alt="airbnb" />
            <img src="images/sky-4.png" alt="sky" />
          </Grid>
        </Grid>
      </Grid>
      <Grid item className={classes.container}>
        <Grid container style={{ width: "100%", position: "relative" }}>
          {/* For background color */}
          <Grid item>
            <div className={classes.background} />
          </Grid>

          <Grid item>
            {/* For Signup container */}
            <Grid
              container
              direction="column"
              spacing={4}
              alignItems="center"
              justify="space-around"
            >
              {/* <Grid item></Grid> */}
              <Grid item>
                <form className={classes.formContainer}>
                  <Typography
                    variant="h5"
                    style={{ fontWeight: "bold" }}
                    gutterBottom
                  >
                    Sign Up
                  </Typography>
                  <input
                    type="email"
                    placeholder="Your primary email"
                    className={classes.textField}
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className={classes.textField}
                  />
                  <input
                    type="password"
                    placeholder="Re-type password"
                    className={classes.textField}
                  />
                  <Button variant="submit" className={classes.submitBtn}>
                    Start your trail for free
                  </Button>
                  <Typography variant="body1" align="center" gutterBottom>
                    OR
                  </Typography>
                  <img
                    src="images/google.png"
                    alt="google"
                    className={classes.img}
                  />
                  <hr className={classes.line} />
                  <Typography
                    paragraph
                    gutterBottom
                    style={{ color: "#8989A2" }}
                  >
                    Already have an account?{" "}
                    <span className={classes.login}>Login</span>
                  </Typography>
                </form>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Signup;
