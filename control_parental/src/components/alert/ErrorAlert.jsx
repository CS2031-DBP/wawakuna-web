import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export default function ErrorAlert(props) {
    const [open, setOpen] = React.useState(false);
    
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };

    React.useEffect(() => {
        setOpen(true);
    },[])
  
    return (
      <div>
        <Snackbar open={open} autoHideDuration={2500} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="error"
            variant="filled"
            sx={{ width: '100%' }}
          >
            Ocurrió un error, vuelve a intentarlo.
          </Alert>
        </Snackbar>
      </div>
    );
  }