import { Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";

import { API_URL, getToken, initializeState } from "../../utils/Utils";
import { useNavigate } from "react-router-dom";
import SuccessAlert from "../alert/SuccessAlert";
import ErrorAlert from "../alert/ErrorAlert";

const PostForm = (props) => {
    const { data, type, path, text, salonId } = props;
    const [formData, setFormData] = useState(initializeState(data));
    const [successAlert, setSuccessAlert] = useState(false);
    const [errorAlert, setErrorAlert] = useState(false);
    const navigate = useNavigate()

    const onClick_ = () =>{
        console.log(formData);
        console.log(getToken());
    }

    const onClick = () => {
        setErrorAlert(false);
        /*
        if(typeof(salonId) !== 'undefined'){
            axios({
                method: 'patch',
                url: API_URL + `${salonId}/${path}/${}`,
                headers: {
                    Authorization: `Bearer ${getToken()}`
                },
                data: formData
            })
            .then(response => {
                setSuccessAlert(true);
                setTimeout(() => window.location.reload(), 2000)
            })
            .catch(error => {
                setErrorAlert(true);
                console.error(error);
            })
        }*/
        
        axios({
            method: 'post',
            url: API_URL + path,
            headers: {
                Authorization: `Bearer ${getToken()}`
            },
            data: formData
        })
        .then(response => {
            setSuccessAlert(true);
            setTimeout(() => window.location.reload(), 2000)
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
            <Button onClick={onClick}>send form</Button>
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

export default PostForm

//<Button onClick={onClick_}>show on console</Button>
            