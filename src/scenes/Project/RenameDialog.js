import React, { forwardRef, useRef, useImperativeHandle } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


const RenameDialog = forwardRef((props, ref) => {
//export default function RenameDialog(props) {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState(props.value);

  const handleClickOpen = () => {
    setOpen(true);
  };
  useImperativeHandle(ref, () => ({

    getAlert() {
        setOpen(true);
    }

  }));
  const handleClose = () => {
    setOpen(false);
    props.newName({name,id:props.id});
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">{props.title}</DialogTitle>
        <DialogContent>
          <DialogContentText>
          {props.description}
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            onChange={evt=>setName(evt.target.value)}
            value={name}
            type="title"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button disabled={name.length === 0 && true} onClick={handleClose} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
});
export default RenameDialog;
