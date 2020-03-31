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
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

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
    ListItem: {
      //paddingLeft: 0,
      paddingRight: 0,
    },
    ListItemText: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      width: '66%'

    },
    subheader: {
      paddingLeft: 0,
      paddingRight: 0,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      width: '85%'
    }
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
            key={data.id + index}
            subheader={
              <ListItem
                className={classes.ListItem} 
                key={data.id}>

                <div className={classes.ListItemText}>
                  <ListSubheader className={classes.subheader}>{data.subheader}</ListSubheader>
                </div>
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="add">
                    <AddIcon fontSize="small" />
                  </IconButton>
                  <IconButton edge="end" aria-label="rename">
                    <TextFieldsIcon fontSize="small" />
                  </IconButton>
                  <IconButton edge="end" aria-label="remove">
                    <DeleteIcon fontSize="small" />
                  </IconButton></ListItemSecondaryAction>
              </ListItem>
            }
            className={classes.root}
          >
            {data.items.map((item, indx) => (
              <ListItem button
                className={classes.ListItem}
                to={item.href}
                key={item.id}>
                {/* <ListItemAvatar>
                    <IconButton edge="end" aria-label="open">
                      <ChevronLeftIcon />
                    </IconButton>
                    
                   </ListItemAvatar>*/}
                <div className={classes.ListItemText}>
                  {item.text}</div>
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="rename">
                    <TextFieldsIcon fontSize="small" />
                  </IconButton>
                  <IconButton edge="end" aria-label="delete">
                    <DeleteIcon fontSize="small" />
                  </IconButton>

                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
          {props.links[index + 1] ? <Divider key={data.id + 'c' + index} /> : ''}
        </>
      ))}
    </>



  );
}
