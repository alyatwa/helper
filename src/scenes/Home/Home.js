import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Deposits from './Deposits'
import HomeCard from './Card';
import sharedStyles from "../../components/sharedStyles";

const useStyles = makeStyles(theme => ({
    ...sharedStyles,
  root: {
    flexGrow: 1,
  },

}));

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>

      <Grid item xs={4}>
          <HomeCard
          title={"Getting started"} 
          description={"Everything you need to know to get started and get to work in Slack."}
          img= {"https://a.slack-edge.com/80588/helpcenter/img/using-slack-illustration_new.png"}/>
        </Grid>
        <Grid item xs={4}>
        <HomeCard
          title={"Using Slack"} 
          description={"Everything you need to know to get started and get to work in Slack."}
          img= {"https://a.slack-edge.com/80588/helpcenter/img/icon_book_new_2x.png"}/>
        </Grid>
        <Grid item xs={4}>
        <HomeCard
          title={"Getting started"} 
          description={"Everything you need to know to get started and get to work in Slack."}
          img= {"https://a.slack-edge.com/80588/helpcenter/img/using-slack-illustration_new.png"}/>
        </Grid>
        <Grid item xs={4}>
        <HomeCard
          title={"Getting started"} 
          description={"Everything you need to know to get started and get to work in Slack."}
          img= {"https://a.slack-edge.com/80588/helpcenter/img/using-slack-illustration_new.png"}/>
        </Grid>
        <Grid item xs={4}>
        <HomeCard
          title={"Getting started"} 
          description={"Everything you need to know to get started and get to work in Slack."}
          img= {"https://a.slack-edge.com/80588/helpcenter/img/using-slack-illustration_new.png"}/>
        </Grid>
        <Grid item xs={4}>
        <HomeCard
          title={"Getting started"} 
          description={"Everything you need to know to get started and get to work in Slack."}
          img= {"https://a.slack-edge.com/80588/helpcenter/img/using-slack-illustration_new.png"}/>
        </Grid>

      </Grid>
    </div>
  );
}