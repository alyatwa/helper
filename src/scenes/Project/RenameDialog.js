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
  const [id, setId] = React.useState(props.value);

  const handleClickOpen = () => {
    setOpen(true);
  };
  useImperativeHandle(ref, () => ({
    getAlert(name, id, event) {
      setOpen(true);
      if (event === 'rename') {
        setName(name)
        setId(id)
      } 
      else if (event === 'newproject') {

      }
    }
  }));
  const handleClose = (data) => {
    setOpen(false);
    props.func({ name, id, event: props.action });
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
            onChange={evt => setName(evt.target.value)}
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
