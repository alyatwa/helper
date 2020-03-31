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

export default function PagesList(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleClick = () => {
    setOpen(!open);
  };
  const pages = props.links
//console.log(pages)
  return (
    <>
      {pages.map((data, index) => (
        <>
          <List
          key={data.id+index}
            subheader={
              <ListSubheader key={data.id} disableSticky={true}>
                {data.subheader}
              </ListSubheader>
            }
            className={classes.root}
          >
            {data.items.map((item, indx) => (
                <ListItem button
                  to={item.href}
                  key={item.id}
                  component={Link}>
                  <ListItemText key={item.id+item.text} primary={item.text} />
                </ListItem>
            ))}
          </List>
          {props.links[index+1] ? <Divider key={data.id+'c'+index} />: ''}
        </>
      ))}
    </>



  );
}
