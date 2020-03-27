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
import Markdown from '../../components/Markdown';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    fontSize: 14
  },
  listText: {
    color: '#696969',
    fontSize: 14,

  },
  listItem: {
    padding: '0px 0px 0 10px',
    color: '#696969',
    fontSize: 14,
    //textDecoration: 'none !important'
  },
  listTitle: {
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
export default function Footer(props) {
  const classes = useStyles();
console.log(props)
  return (
    <div className={classes.root}>
      <Grid container>
        {props.links.linkstext.map((data, index) => (
          <Grid item xs={data.size}>
            <List
              component="nav"
              key={index}
              aria-labelledby="nested-list-subheader"
              subheader={
                <ListSubheader className={classes.listTitle} component="div" id="nested-list-subheader">
                  {data.title}
                </ListSubheader>
              }
              className={classes.root}
            >
              {data.links.map((link, index) => (
                <>
                  {link.external ?
                    <ListItem  >
                      <Linka className={classes.listItem} href={link.href}>{link.text}</Linka>
                    </ListItem>
                    :
                    <ListItem  >
                      <Linka component={Link} className={classes.listItem} to={link.href}>{link.text}</Linka>
                    </ListItem>
                  }
                </>
              ))}
            </List>
          </Grid>
        ))}
      </Grid>
      <Box my={2}>
      <Typography variant="body2" color="textSecondary" align="center">
      <Markdown>{props.links.copyright}</Markdown>
      </Typography>
        </Box>
    </div>
  );
}