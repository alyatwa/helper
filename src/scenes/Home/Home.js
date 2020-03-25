import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Deposits from './Deposits'
import HomeCard from './Card';
import sharedStyles from "../../components/sharedStyles";
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
    ...sharedStyles,
  root: {
    flexGrow: 1,
  },
  box:{
    justifyContent:'center',
    display: 'flex',
     alignItems:'center',
     marginBottom: 25
   },

}));

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Container className={classes.box}>
        <Typography component="h2" variant="h1" gutterBottom>
            {"Hi. How can we help?"}</Typography>
         </Container>
        
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
          title={"Profile"} 
          description={"Everything you need to know to get started and get to work in Slack."}
          img= {"https://a.slack-edge.com/80588/helpcenter/img/icon_tony.png"}/>
        </Grid>
        <Grid item xs={4}>
        <HomeCard
          title={"Tips"} 
          description={"Everything you need to know to get started and get to work in Slack."}
          img= {"https://a.slack-edge.com/80588/helpcenter/img/icon_Integrations_for_your_team_2x.png"}/>
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
          img= {"https://a.slack-edge.com/80588/helpcenter/img/icon_tips.png"}/>
        </Grid>

      </Grid>
    </div>
  );
}