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
import Launch from '@material-ui/icons/Launch';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import { Link } from 'react-router-dom';
import Linka from '@material-ui/core/Link';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) =>
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

export default function NestedList(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div>
          <List
            subheader={
              <ListSubheader disableSticky={true}>
                {'Profile'}
              </ListSubheader>
            }
            className={classes.root}
          >
                <ListItem button
                  to={'/dashboard/profile'}
                  component={Link}>
                  <ListItemText primary={'Profile'} />
                </ListItem>
          </List>
          <Divider/>
          <List
            subheader={
              <ListSubheader disableSticky={true}>
                {'Subscription'}
              </ListSubheader>
            }
            className={classes.root}
          >
                <ListItem button
                  to={'/dashboard/subscription'}
                  component={Link}>
                  <ListItemText primary={'Renew'} />
                </ListItem>
          </List>
          <Divider/>
          <List
            subheader={
              <ListSubheader disableSticky={true}>
                {'Team'}
              </ListSubheader>
            }
            className={classes.root}
          >
                <ListItem button
                  to={'/dashboard/addmember'}
                  component={Link}>
                  <ListItemText primary={'Add Member'} />
                </ListItem>
          </List>
    </div>
  );
}
