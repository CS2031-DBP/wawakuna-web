import DeleteIcon from '@mui/icons-material/Delete';

import { ListItemButton, ListItemText, ListItem, IconButton } from "@mui/material"
import { useNavigate } from 'react-router-dom';

const StandartCard = (props) => {
    const {standart, path} = props;

    const onClick = () => {
        axios({
            method: 'delete',
            url: API_URL + `${path}/${standart.id}"`,
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

    return(
        <div className='flex flex-row items-center'>
            <ListItem key={standart.id}>
                <ListItemText primary={standart.name}/>
            </ListItem>
            <div>
                <IconButton className='h-10'>
                    <DeleteIcon/>
                </IconButton>
            </div>
        </div>
        
    )
}

export default StandartCard

//WARNING: el nombre?
