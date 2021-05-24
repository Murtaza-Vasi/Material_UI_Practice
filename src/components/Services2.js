import React from "react";
import { Grid, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    padding: "48px",
    margin: "10% 0"
  },
  imgContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F9F0FF",
    color: "#722ED1",
    borderRadius: "22px",
    padding: "8px 16px",
    maxWidth: "250px",
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
        justify="center"
        alignItems="center"
        className={classes.root}
        direction="row-reverse"
      >
        <Grid item>
          <img src="images/308-02.png" alt="hero" />
        </Grid>
        <Grid item>
          <Grid container direction="column" justify="space-between">
            <Grid item className={classes.imgContainer}>
              <img
                src="images/compass.png"
                alt="compass"
                className={classes.img}
              />
              <Typography variant="subtitle1">For engineering teams</Typography>
            </Grid>

            <Grid item>
              <Typography variant="h3" className={classes.title} gutterBottom>
                Data-driven pipelines in minutes
              </Typography>
            </Grid>

            <Grid item>
              <Typography
                variant="subtitle1"
                className={classes.subtitle}
                gutterBottom
                paragraph
              >
                Maintenance-free data pipelines with quick set-up and
                straight-forward deployments that are powered by a modern &
                scalable platform.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Services1;
