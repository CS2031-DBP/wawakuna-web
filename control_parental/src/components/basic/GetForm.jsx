import { Button, TextField } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { API_URL, getToken, initializeState } from "../../utils/Utils";

const GetForm = (props) => {
    const { id } = props;
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({});
    const onClick = () => {
        setLoading(true);
        axios({
            method: 'get',
            url: API_URL + `/${id}`,
            headers: {
                Authorization: `Bearer ${getToken()}`
            }
        })
        .then(response => {
//          console.log(response);
            setData(response.data.data)//revisar si este es el data real.
            setLoading(false);
        })
        .catch(error => {
            console.error(error);
        })
    }
 
    return(
        <div className="flex flex-col justify-center space-y-2 w-1/2">
            {
                loading ? <h3>Loading</h3>
                :
                <div>
                    {
                        () => {for (const key in data){
                            () => {
                            return (<span id={key}>
                                {data[key]}
                            </span>)
                            }
                        }}
                    }
                </div>
            }
            <Button onClick={onClick}>get by id</Button>
        </div>
    )
}

export default GetForm