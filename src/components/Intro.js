import React from "react";
import {
  Grid,
  Container,
  Typography,
  Button,
  makeStyles
} from "@material-ui/core";

import Header from "./Header";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyCotents: "center",
    flexDirection: "column",
    margin: 0
  },
  rootGrid: {
    padding: "7% 12%"
  },
  version: {
    borderRadius: "20px",
    padding: "12px 16px",
    backgroundColor: "#F9F0FF",
    display: "flex",
    color: "#722ED1",
    margin: theme.spacing(4),
    maxWidth: "260px"
  },
  learnMore: {
    textDecoration: "underline"
  },
  tagline: {
    fontWeight: "bold",
    fontSize: "48px",
    margin: theme.spacing(4),
    maxWidth: "400px"
  },
  subtitle: {
    color: "#8989A2",
    fontSize: "16px",
    margin: theme.spacing(4),
    letterSpacing: "0.2px",
    maxWidth: "460px"
  },
  btnGroup: {
    margin: theme.spacing(4),
    display: "flex"
  },
  freeTrialBtn: {
    borderRadius: "24px",
    padding: "12px 48px",
    textTransform: "capitalize",
    backgroundColor: "#722ED1",
    color: "#fff",
    margin: theme.spacing(1),
    "&:hover": {
      backgroundColor: "#733ED1"
    }
  },
  learnMoreBtn: {
    borderRadius: "24px",
    padding: "12px 48px",
    textTransform: "capitalize",
    backgroundColor: "#fff",
    color: "#000",
    margin: theme.spacing(1)
  },
  background: {
    backgroundImage: "linear-gradient(to bottom, #FFFFFF, #E2F1FF)",
    position: "absolute",
    height: "100%",
    width: "100%",
    zIndex: "-1",
    transform: "skew(0deg, -7deg)"
  }
}));

const Intro = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header />
      <div className={classes.background} />
      <Grid
        container
        alignItems="center"
        justify="space-around"
        spacing={2}
        className={classes.rootGrid}
      >
        <Grid item md={6}>
          <Grid container direction="column">
            <Grid item>
              <div className={classes.version}>
                <img
                  src="/images/edit-brightness.png"
                  alt="version"
                  style={{ height: "16px", width: "16px" }}
                />
                <Typography variant="body1">
                  {" "}
                  v 3.1 released.{" "}
                  <span className={classes.learnMore}>Learn more</span>
                </Typography>
              </div>
            </Grid>

            <Grid item>
              <Typography variant="h2" className={classes.tagline}>
                Your data with real time analysis
              </Typography>
              <Typography
                variant="subtitle1"
                paragraph
                className={classes.subtitle}
                align="justify"
              >
                Harness the potential of Big Data Analytics & Cloud Services and
                become a data-driven organization with Needle tail
              </Typography>
            </Grid>

            <Grid item className={classes.btnGroup}>
              <Button className={classes.freeTrialBtn}>Start free trial</Button>
              <Button className={classes.learnMoreBtn}>Learn More</Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={6}>
          <img src="images/308-03.png" alt="Hero" />
        </Grid>
      </Grid>
    </div>
  );
};

export default Intro;
