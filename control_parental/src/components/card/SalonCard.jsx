import DeleteIcon from '@mui/icons-material/Delete';

import { ListItemButton, ListItemText, ListItem, IconButton } from "@mui/material"
import { useNavigate } from 'react-router-dom';

const SalonCard = (props) => {
    const {salon} = props;

    const navigate = useNavigate();
/*
    const onClick = () => {
        axios({
            method: 'delete',
            url: API_URL + `/salon/${id}"`,
            headers: {
                Authorization: `Bearer ${getToken()}`
            }
        })
        .then(response => {
//            console.log(response);
        })
        .catch(error => {
            console.error(error);
        })
    }
*/
    return(
        <div className='flex flex-row items-center'>
            <ListItemButton onClick={() => {navigate(`/salon/${salon.id}`)}}>
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
