import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import sharedStyles from "./sharedStyles";
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import Linka from '@material-ui/core/Link';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import TextFields from '@material-ui/icons/TextFields';
import Delete from '@material-ui/icons/Delete';
import MsgDialog from '../scenes/Project/MsgDialog';
const useStyles = makeStyles((theme) => ({
  ...sharedStyles,
  root: {
    maxWidth: 300
  },
  media: {
    height: 120,
    width: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundPosition: 'center center'
  }
}
))

export default function ProjectCard(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  //const [hover, setHover] = React.useState('elevation');
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };
const remove = React.useRef(null);
const handleClose = event => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
    //console.log('---',event,'***');
    if (event.event === 'rename'){
      props.rename(props)
    }
    else if (event.event === 'remove'){
      remove.current.getAlert()
    }
  };
/*function setNewName(name) {
  props.rename(name);
}*/
function doRemove(remove) {
  props.remove(remove);
}
  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }
    prevOpen.current = open;
  }, [open]);
  return (
    <>
      <Card className={clsx(classes.root && classes.paper)}>
        <CardMedia className={classes.media}
          image={props.img}
          title={props.title}
          component={Link}
          to={props.link}
        />
        <CardHeader style={{padding:0}} action={
            <IconButton aria-label="settings"
              ref={anchorRef}
              aria-controls={open ? 'menu-list-grow' : undefined}
              aria-haspopup="true"
              onClick={handleToggle}>
              <MoreVertIcon />
            </IconButton>
          }
          title={props.title}
          subheader="September 14, 2016"
        />

      </Card><Popper open={open} style={{zIndex:1}} placement="bottom" anchorEl={anchorRef.current} role={undefined} transition disablePortal={false}>
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList  autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>

                  <MenuItem onClick={() => handleClose({'event':'rename','id':props.id})}>
                    <ListItemIcon style={{ minWidth: '30px' }}>
                      <TextFields fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Rename" /></MenuItem>
                  <MenuItem onClick={() => handleClose({'event':'remove','id':props.id})}>
                    <ListItemIcon style={{ minWidth: '30px' }}>
                      <Delete fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Remove" /></MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
      <MsgDialog sure={doRemove} id={props.id} name={props.title} ref={remove}/>
      </>
  );
}