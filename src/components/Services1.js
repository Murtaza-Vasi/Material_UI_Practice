import React from "react";
import { Grid, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    padding: "48px"
  },
  imgContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F9F0FF",
    color: "#722ED1",
    borderRadius: "22px",
    padding: "8px 16px",
    maxWidth: "200px",
    marginBottom: "24px"
  },
  img: {
    marginRight: "8px"
  },
  title: {
    fontWeight: "bold",
    marginBottom: "24px",
    maxWidth: "500px"
  },
  subtitle: {
    color: "#8989A2",
    maxWidth: "400px"
  }
});

const Services1 = () => {
  const classes = useStyles();

  return (
    <>
      <Grid
        container
        justify="space-around"
        alignItems="center"
        className={classes.root}
      >
        <Grid item>
          <img src="images/Group 29.png" alt="group-29" />
        </Grid>
        <Grid item>
          <Grid container direction="column" justify="space-between">
            <Grid item className={classes.imgContainer}>
              <img
                src="images/electronic-circuit.png"
                alt="electronic circuit"
                className={classes.img}
              />
              <Typography variant="subtitle1">For product teams</Typography>
            </Grid>
            <Grid item>
              <Typography variant="h4" className={classes.title} gutterBottom>
                Launch with the best stack
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="subtitle1"
                className={classes.subtitle}
                gutterBottom
                paragraph
              >
                A centralized platform that integrates zillions of data sources
                using Big Data ELT (Extract, Load & Transform) that leaves no
                data behind
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Services1;
