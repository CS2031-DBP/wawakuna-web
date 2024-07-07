import DeleteIcon from '@mui/icons-material/Delete';

import { ListItemButton, ListItemText, ListItem, IconButton } from "@mui/material"
import { useNavigate } from 'react-router-dom';

const SalonCard = (props) => {
    const {salon} = props;

    const navigate = useNavigate();

    return(
        <div className='flex flex-row items-center'>
            <ListItemButton onClick={() => {navigate(`/salon/${salon.id}/${salon.nombre.replaceAll(' ','-')}`)}}>
                <ListItem
                    key={salon.id}
                    disableGutters
                >
                    <ListItemText primary={salon.nombre}/>
                </ListItem>
            </ListItemButton>
            <div>
                <IconButton className='h-10' onClick={() => {console.log(salon)}}>
                    <DeleteIcon/>
                </IconButton>
            </div>
        </div>
        
    )
}

SalonCard.defaultProps = {
    nombre: 'undefined',
    value: 0
}

export default SalonCard

//WARNING: el nombre?
