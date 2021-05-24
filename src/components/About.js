import React from "react";
import { Grid, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "12%",
    marginBottom: "10%"
  },
  topContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center"
  },
  imgContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#F9F0FF",
    color: "#722ED1",
    padding: "8px 16px",
    borderRadius: "22px",
    maxWidth: "150px",
    margin: "16px auto"
  },
  eyeImg: {
    height: "18px",
    width: "26px"
  },
  title: {
    fontSize: "36px",
    fontWeight: "bold",
    margin: "24px auto"
  },
  subtitle: {
    maxWidth: "500px",
    color: "#8989A2",
    textAlign: "center",
    margin: "24px auto"
  },
  component: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    maxWidth: "240px",
    margin: theme.spacing(2)
  },
  componentTitle: {
    fontWeight: "bold",
    marginBottom: theme.spacing(2),
    marginRight: theme.spacing(2)
  },
  componentSubtitle: {
    color: "#8989A2"
  },
  timelineImg: {
    backgroundColor: "#F6FFED",
    backgroundImage: "url('images/timeline.png')",
    backgroundAttachment: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    marginBottom: theme.spacing(3)
  },
  newsLetterImg: {
    backgroundColor: "#FFF1F0",
    backgroundImage: "url('images/newsletter-dev.png')",
    backgroundAttachment: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    marginBottom: theme.spacing(3)
  },
  chartBarImg: {
    backgroundColor: "#E6F7FF",
    backgroundImage: "url('images/chart-bar-33.png')",
    backgroundAttachment: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    marginBottom: theme.spacing(3)
  }
}));

const About = () => {
  const classes = useStyles();
  return (
    <>
      <Grid
        container
        alignItems="center"
        justify="center"
        className={classes.root}
      >
        <Grid item className={classes.topContainer}>
          <div className={classes.imgContainer}>
            <img
              src="images/Icon awesome-eye.png"
              alt="eye"
              className={classes.eyeImg}
            />
            <Typography variant="subtitle1"> Why Qubly?</Typography>
          </div>
          <Typography variant="h2" className={classes.title} gutterBottom>
            Get actionable insights from Big Data in 3 steps
          </Typography>
          <Typography
            variant="subtitle1"
            className={classes.subtitle}
            gutterBottom
          >
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </Typography>
        </Grid>
        <Grid item>
          <Grid
            container
            direction="row"
            alignContent="center"
            justify="space-between"
          >
            <Grid item>
              <div className={classes.component}>
                <div className={classes.timelineImg} />
                <Typography variant="h5" className={classes.componentTitle}>
                  Data in real-time
                </Typography>
                <Typography
                  variant="subtitle1"
                  className={classes.componentSubtitle}
                >
                  Collect data in real-time from multiple channels and move it
                  into a data lake, in its original format.
                </Typography>
              </div>
            </Grid>
            <Grid item>
              <div className={classes.component}>
                <div className={classes.newsLetterImg} />
                <Typography variant="h5" className={classes.componentTitle}>
                  Powerful Algorithms
                </Typography>
                <Typography
                  variant="subtitle1"
                  className={classes.componentSubtitle}
                >
                  With the help of powerful algorithms, quality rules &
                  techniques, obtain simplified & enriched data.
                </Typography>
              </div>
            </Grid>
            <Grid item>
              <div className={classes.component}>
                <div className={classes.chartBarImg} />
                <Typography variant="h5" className={classes.componentTitle}>
                  Valuable business insights
                </Typography>
                <Typography
                  variant="subtitle1"
                  className={classes.componentSubtitle}
                >
                  Collect processed & cleansed data that is ready to be analyzed
                  to gather valuable business insights.
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default About;
