import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ListSubheader from '@material-ui/core/ListSubheader';
import Box from '@material-ui/core/Box';
import Linka from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    fontSize:14
  },
  listText:{
      color: '#696969',
      fontSize:14,
  },
  list:{
    padding: 0,
    paddingLeft: 25
},
  listTitle:{
    color: '#454545'
  }
}));


function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Linka color="inherit" href="https://material-ui.com/">
          Your Website
        </Linka>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Grid container>
        <Grid item xs={4}>
        <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader className={classes.listTitle} component="div" id="nested-list-subheader">
          Nested List Items
        </ListSubheader>
      }
      className={classes.root}
    >
      <ListItem 
    to="/" 
    component={Link}
    className={classes.list}
    >
      <ListItemText classes={{primary:classes.listText}} primary="Dashboard" />
    </ListItem>
      <ListItem 
    to="/stepper" 
    component={Link}
    className={classes.list}>
      <ListItemText classes={{primary:classes.listText}} primary="Stepper" />
    </ListItem>
      </List>
        </Grid>
        <Grid item xs={4}>
        <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader className={classes.listTitle} component="div" id="nested-list-subheader">
          Nested List Items
        </ListSubheader>
      }
      className={classes.root}
    >
    
      <ListItem 
    to="/" 
    component={Link}
    className={classes.list}
    
    >
      <ListItemText classes={{primary:classes.listText}} primary="Dashboard" />
    </ListItem>
      <ListItem 
    to="/stepper" 
    component={Link}
    className={classes.list}>
      <ListItemText classes={{primary:classes.listText}} primary="Stepper" />
    </ListItem>
      </List>
        </Grid>
        <Grid item xs={4}>
        <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader className={classes.listTitle} component="div" id="nested-list-subheader">
          Nested List Items
        </ListSubheader>
      }
      className={classes.root}
    >
    
      <ListItem 
    to="/" 
    component={Link}
    className={classes.list}
    
    >
      <ListItemText classes={{primary:classes.listText}} primary="Dashboard" />
    </ListItem>
      <ListItem 
    to="/stepper" 
    component={Link}
    className={classes.list}>
      <ListItemText classes={{primary:classes.listText}} primary="Stepper" />
    </ListItem>
      </List>
        </Grid>
        </Grid>
        <Box my={2}>
<Copyright/></Box>
    </div>
  );
}