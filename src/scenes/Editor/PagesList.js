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
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';

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
      color: 'rgba(0, 0, 0, 0.54)',
      fontSize: '0.875rem',
      paddingLeft: 0,
      paddingRight: 0,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      width: '53%'
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
  console.log(props)
  return (
    <>
      {pages.map((data, index) => (
        <List
          key={data.id + index}
          subheader={
            <ListItem
              className={classes.ListItem}
              key={data.id}>
              <div className={classes.subheader}>
                {data.subheader}
              </div>
              <ListItemSecondaryAction>
              <Tooltip TransitionComponent={Zoom} title="Add Page" placement="top">
                <IconButton onClick={() => props.renamePage({ event: 'addPage', type: 'Page', subId: data.id })} edge="end" aria-label="add">
                  <AddIcon fontSize="small" />
                </IconButton></Tooltip>
                <IconButton onClick={() => props.renamePage({ event: 'rename', type: 'Subheader', title: data.subheader, pageId: 0, subId: data.id })} edge="end" aria-label="rename">
                  <TextFieldsIcon fontSize="small" />
                </IconButton>
                <IconButton onClick={() => props.RemovePage({ event: 'removeSubheader', type: 'Subheader', pageId: 0, subId: data.id })} edge="end" aria-label="remove">
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
                <IconButton onClick={() => props.renamePage({ event: 'rename', type: 'Page', title: item.text, subId: data.id, pageId: item.id })} edge="end" aria-label="rename">
                  <TextFieldsIcon fontSize="small" />
                </IconButton>
                <IconButton onClick={() => props.RemovePage({ event: 'removePage', subId: data.id, pageId: item.id, type: 'Page'})} edge="end" aria-label="delete">
                  <DeleteIcon fontSize="small" />
                </IconButton>

              </ListItemSecondaryAction>
            </ListItem>
          ))}
          {props.links[index + 1] ? <Divider key={data.id + 'c' + index} /> : ''}
        </List>

      ))}
      <List>
        <ListItem button onClick={() => props.renamePage({ event: 'addSubheader', type: 'Subheader'})}>
        <ListItemText>
                {'Add New Header'}</ListItemText>
              <AddIcon fontSize="small" />
        </ListItem>
      </List>
    </>



  );
}
