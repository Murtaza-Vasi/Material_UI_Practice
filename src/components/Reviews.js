import React from "react";
import { Grid, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    padding: "7%"
  },
  line: {
    width: "",
    margin: "24px 0"
  },
  imgContainer: {
    padding: "12px 24px",
    maxWidth: "1000px"
  },
  img: {
    margin: "24px 24px 12px"
  },
  name: {
    fontWeight: "bold"
  },
  reviewContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%"
  },
  review: {
    maxWidth: "60%",
    fontSize: "21px"
  },
  background: {
    height: "130%",
    width: "100%",
    position: "absolute",
    backgroundImage: "linear-gradient(to bottom, #F9F0FF, #E2F1FF)",
    zIndex: "-1",
    transform: "skew(0deg,-7deg)",
    left: 0
  }
}));

const Review = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      alignItems="center"
      justify="center"
      direction="column"
      className={classes.root}
    >
      <Grid item className={classes.background} />
      <Grid item className={classes.reviewContainer}>
        <Typography
          variant="h5"
          gutterBottom
          align="center"
          className={classes.review}
        >
          "What I love about Qubly is the easy way we can collaborate even if
          there is a lot of people involved in the process"
        </Typography>
      </Grid>
      <Grid item>
        <img src="images/Profile.png" alt="Profile" className={classes.img} />
      </Grid>
      <Grid item>
        <Typography variant="subtitle1" className={classes.name}>
          Guillaume Cabane
        </Typography>
        <Typography variant="subtitle1" className={classes.name} gutterBottom>
          CTO @ BigSpring
        </Typography>
      </Grid>
      <Grid item>
        <hr className={classes.line} />
      </Grid>
      <Grid
        item
        container
        alignItems="center"
        justify="space-around"
        className={classes.imgContainer}
      >
        <img src="images/Tonkean.png" alt="Tonkean" />
        <img src="images/BigSpring.png" alt="BigSpring" />
        <img src="images/Clearbit.png" alt="Clearbit" />
        <img src="images/Mine.png" alt="Mine" />
        <img src="images/Shake.png" alt="Shake" />
      </Grid>
    </Grid>
  );
};

export default Review;
