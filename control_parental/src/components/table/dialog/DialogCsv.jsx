import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CreateProfesorForm from '../../create/CreateProfesorForm';
import { useState } from 'react';
import UploadFile from '../../upload/UploadFile';

export default function DialogCsv(props) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="contained" onClick={handleClickOpen}>
        Subir un csv
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>Crear nuevo {props.text}</DialogTitle>
        <DialogContent>
          <UploadFile text = {props.text} path = {props.path}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}