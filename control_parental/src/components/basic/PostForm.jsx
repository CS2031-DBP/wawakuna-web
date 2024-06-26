import { Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import TransitionsSnackbar from "../alert/Success";

import { API_URL, getToken, initializeState } from "../../utils/Utils";
import { useNavigate } from "react-router-dom";

const PostForm = (props) => {
    const { data, type, path, text } = props;
    const [formData, setFormData] = useState(initializeState(data));
    const [alert, setAlert] = useState(false);
    const navigate = useNavigate()

    const onClick_ = () =>{
        console.log(formData);
        console.log(getToken());
    }

    const onClick = () => {
        axios({
            method: 'post',
            url: API_URL + path,
            headers: {
                Authorization: `Bearer ${getToken()}`
            },
            data: formData
        })
        .then(response => {
            setAlert(true);
            setTimeout(() => navigate("/dashboard"), 2000)
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
            <Button onClick={onClick_}>show on console</Button>
            <Button onClick={onClick}>send form</Button>
            {
                alert ? 
                <TransitionsSnackbar text={text}/>
                :
                null
            }
        </div>
    )
}

export default PostForm