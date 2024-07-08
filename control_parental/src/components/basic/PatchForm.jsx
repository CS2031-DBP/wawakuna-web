import axios from "axios";
import { API_URL, getToken, initializeState } from "../../utils/Utils";
import { Autocomplete, Button, getTabScrollButtonUtilityClass, TextField } from "@mui/material";
import { useState } from "react";
import SuccessAlert from "../alert/SuccessAlert";
import ErrorAlert from "../alert/ErrorAlert";




function createData(label, id){
    return {label, id}
}


const PatchForm = (props) => {
    const {data, type, path, text} = props;
    const [formData, setFormData] = useState(initializeState(data));
    const [successAlert, setSuccessAlert] = useState(false);
    const [errorAlert, setErrorAlert] = useState(false);

    const handleClick = () => {
        setErrorAlert(false);
        axios({
            method: 'patch',
            url: API_URL+path+formData.password,
            headers: {
                Authorization: `Bearer ${getToken()}`
            },
            data: formData, 
        }).then(response => {
            setSuccessAlert(true);
            setTimeout(()=> window.location.reload(), 2000)
        })
        .catch(error => {
            setErrorAlert(true);
            console.error(error);
        })
    }

    const handleChange = (name, value, type) => {
        let parsedValue = value;
        if (type === "int") {
            parsedValue = parseInt(value);
            if (isNaN(parsedValue)) {
                parsedValue = 0;
            }
        }
        setFormData({
            ...formData,
            [name]: parsedValue
        });
    }


    return (
        <div className="flex flex-col w-full space-y-3">
            {
                data.map((data_name, key) => (
                <TextField 
                    className="w-full"
                    key = {`${key}`}
                    label = {data_name}
                    onChange = {(text) => handleChange(data_name,text.target.value,type[key])}/>
                ))
            }
            
            <Button onClick={handleClick}>Cambiar</Button>
            {
                successAlert ? 
                <SuccessAlert text={text}/>
                :
                null
            }
            {
                errorAlert ? 
                <ErrorAlert text={text}/>
                :
                null
            }
            
        </div>
    )
}

export default PatchForm