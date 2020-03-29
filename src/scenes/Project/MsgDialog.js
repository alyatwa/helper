import React, { forwardRef, useRef, useImperativeHandle } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';


const MsgDialog = forwardRef((props, ref) => {
//export default function RenameDialog(props) {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState(props.name);

  const handleClickOpen = () => {
    setOpen(true);
  };
  useImperativeHandle(ref, () => ({

    getAlert() {
        setOpen(true);
    }

  }));
  const handleClose = (data) => {
    setOpen(false);
    (data) && props.sure(data)
    
  }

  return (
    <div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Are you sure?</DialogTitle>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={() => handleClose(true)} color="primary">
            Sure
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
});
export default MsgDialog;
