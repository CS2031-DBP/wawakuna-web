import { Button, TextField } from "@mui/material";
import axios from "axios";

import { API_URL, getToken, initializeState } from "../../utils/Utils";

const DeleteForm = (props) => {
    const { id } = props;
    

    const onClick = () => {
        axios({
            method: 'delete',
            url: API_URL + `/${id}"`,
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
        <div className="flex flex-col justify-center space-y-2 w-1/2">
            <Button onClick={onClick}>delete by id</Button>
        </div>
    )
}

export default DeleteForm