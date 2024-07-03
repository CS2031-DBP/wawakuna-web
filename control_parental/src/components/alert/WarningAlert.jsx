import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export default function WarningAlert(props) {
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
            severity="warning"
            variant="filled"
            sx={{ width: '100%' }}
          >
            {props.text}
          </Alert>
        </Snackbar>
      </div>
    );
  }