import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import { Link } from 'react-router-dom';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
  }),
);

export default function NestedList() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      component="nav"
     >
<ListItem button
    to="/" 
    component={Link}>
      <ListItemText primary="Dashboard" />
    </ListItem>

    <ListItem button
    to="/orders" 
    component={Link}>
      <ListItemText primary="Subscription" />
    </ListItem>
    <ListItem button
    to="/solver" 
    component={Link}>
      <ListItemText primary="Solver" />
    </ListItem>
    <ListItem button
    to="/stepper" 
    component={Link}>
      <ListItemText primary="Stepper" />
    </ListItem>
<Divider/>
<List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Router settings
        </ListSubheader>
      }
      className={classes.root}
    >
      <ListItem button onClick={handleClick}
    to="/settings" 
    component={Link}>
      <ListItemText primary="ZTE" />
      {open ? <ExpandLess /> : <ExpandMore />}
    </ListItem>
    <Collapse in={!open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Starred" />
          </ListItem>
        </List>
      </Collapse>
    <ListItem button>
      <ListItemText primary="Huawei" />
    </ListItem>
    <ListItem button>
      <ListItemText primary="Vdsl" />
    </ListItem>      
    </List>
    <Divider/>
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Troubleshooting Internet
        </ListSubheader>
      }
    >
    <ListItem button>
      <ListItemText primary="Internet Not Working" />
    </ListItem>
    <ListItem button>
      <ListItemText primary="Monitor bandwidth usage" />
    </ListItem>
    <ListItem button>
      <ListItemText primary="Limit internet speed" />
    </ListItem>
    </List>

    </List>

    
  );
}
