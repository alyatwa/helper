import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Deposits from './Deposits'
import HomeCard from './Card';
import sharedStyles from "../../components/sharedStyles";
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Markdown from '../../components/Markdown';
import { Scrollbars } from 'react-custom-scrollbars';

const useStyles = makeStyles(theme => ({
  ...sharedStyles,
  root: {
    flexGrow: 1,
  },
  box: {
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
    marginBottom: 25
  },

}));
function getCards() {
  return {
    components:[
      {
        name:'text',
        size:12,
        align:'center',
        title: `# Hi. How can we help?  
        text`
      },{
        name:'text',
        size:6,
        align:'center',
        title: `# Hi. How can we help?  
        text`
      },{
        name:'text',
        size:6,
        align:'center',
        title: `# Hi. How can we help?  
        text`
      },
    {name:'card',
    cards: [{
      size: 4,
      title: 'Getting started',
      description: 'Everything you need to know to get started and get to work in Slack.',
      link: {
        href: 'https://google.com',
        external: true,
        text: 'External',
      },
      img: 'https://a.slack-edge.com/80588/helpcenter/img/using-slack-illustration_new.png'
    },
    {
      size: 4,
      title: 'Using Slack',
      description: 'Everything you need to know to get started and get to work in Slack.',
      link: {
        href: '/stepper',
        external: false,
        text: 'Learn More',
      },
      img: 'https://a.slack-edge.com/80588/helpcenter/img/icon_book_new_2x.png'
    },
    {
      size: 4,
      title: 'Profile',
      description: 'Everything you need to know to get started and get to work in Slack.',
      link: {
        href: 'https://google.com',
        external: true,
        text: 'Learn More',
      },
      img: 'https://a.slack-edge.com/80588/helpcenter/img/icon_Integrations_for_your_team_2x.png'
    }, {
      size: 4,
      title: 'Getting started',
      description: 'Everything you need to know to get started and get to work in Slack.',
      link: {
        href: 'https://google.com',
        external: true,
        text: 'Learn More',
      },
      img: 'https://a.slack-edge.com/80588/helpcenter/img/using-slack-illustration_new.png'
    },
    {
      size: 4,
      title: 'Using Slack',
      description: 'Everything you need to know to get started and get to work in Slack.',
      link: {
        href: 'https://google.com',
        external: false,
        text: 'Learn More',
      },
      img: 'https://a.slack-edge.com/80588/helpcenter/img/icon_book_new_2x.png'
    },
    {
      size: 4,
      title: 'Profile',
      description: 'Everything you need to know to get started and get to work in Slack.',
      link: {
        href: 'https://google.com',
        external: false,
        text: 'Learn More',
      },
      img: 'https://a.slack-edge.com/80588/helpcenter/img/icon_Integrations_for_your_team_2x.png'
    }]},
    ]
  }
}
export default function Home() {
  const classes = useStyles();
  const home = getCards();
  return (
    <div className={classes.root}>
      
      <Grid container spacing={3}>
        
        {home.components.map((comp, index) => (
          <>
        {comp.name === 'text' ?
        <Grid item xs={12} md={comp.size}>
            <Paper className={classes.paper}>
            <Typography variant="body2" color="textSecondary" align={comp.align}>
              <Markdown>{comp.title}</Markdown>
              </Typography>
            </Paper>
        </Grid>
          :
        comp.cards.map((card, index) => (
          <Grid item lg={card.size} md={6} sm={12} xs={12}>
            <HomeCard
              title={card.title}
              description={card.description}
              link={card.link}
              img={card.img} />
          </Grid> ))
        }
          </>
          ))}
      </Grid>
    </div>
  );
}