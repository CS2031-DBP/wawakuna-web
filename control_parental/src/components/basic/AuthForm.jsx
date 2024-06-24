import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { initializeState } from "../../utils/Utils";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { API_URL } from "../../utils/Utils";

const AuthForm = (props) => {
    const { data, type, toPage } = props;
    const [formData, setFormData] = useState(initializeState(data));
    const navigate = useNavigate()

    const onClick_ = () =>{
        console.log(formData);
        console.log(localStorage.getItem('token'));
        navigate(toPage);
    }

    const onClick = () => {
        axios({
            method: 'post',
            url: API_URL + "",
            data: formData
        })
        .then(response => {
            localStorage.setItem('token',response.data.token); //Checkeen que response.data.token es correcto

        })
        .catch(error => {
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

    return(
        <div className="flex flex-col justify-center space-y-2 w-1/2">
            {
                data.map((data_name, key) => (
                <TextField 
                    key = {`${key}`}
                    label = {data_name}
                    onChange = {(text) => handleChange(data_name,text.target.value,type[key])}/>
                ))
            }
            <Button onClick={onClick_}>show on console</Button>
            <Button onClick={onClick}>send form</Button>
            
        </div>
    )
}

export default AuthForm