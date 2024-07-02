import { Autocomplete, Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";

import { API_URL, getToken, initializeState } from "../../utils/Utils";
import { useNavigate } from "react-router-dom";
import SuccessAlert from "../alert/SuccessAlert";
import ErrorAlert from "../alert/ErrorAlert";


function createData(label, id){
    return {label, id}
}

const PostForm = (props) => {
    const { data, type, path, text} = props;
    const [formData, setFormData] = useState(initializeState(data));
    const [successAlert, setSuccessAlert] = useState(false);
    const [errorAlert, setErrorAlert] = useState(false);
    const [idPadre, setIdPadre] = useState(null);
    const [padres, setPadres] = useState([]);

    const onClick_ = () =>{
        console.log(formData);
        console.log(getToken());
        console.log(idPadre)
    }

    const onClick = () => {
        const params = (text == 'Hijo')? {idPadre} : {}
        setErrorAlert(false);
        axios({
            method: 'post',
            url: API_URL + path,
            headers: {
                Authorization: `Bearer ${getToken()}`
            },
            data: formData,
            params: params
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

    useEffect(() => {
        if(text !== 'Hijo') return;
        axios({
            method: 'get',
            url: API_URL + '/padre/all',
            params:{
                page:0,
                size:1000
            },
            headers: {
                Authorization: `Bearer ${getToken()}`
            }
        })
        .then(response => {
            let padres_ = []
            response.data.map((padre) => {padres_.push(createData(`${padre.nombre} ${padre.apellido}`,padre.id))})
            setPadres(padres_)
        })
        .catch(error => {
            console.error(error)
        })
    },[])

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
            {
                (text == 'Hijo')?
                <Autocomplete
                onChange={(event, value) => {setIdPadre(value.id)}}
                options={padres}
                isOptionEqualToValue={(option, value) => option.id === value?.id}
                renderInput={(params) => <TextField {...params} label="Padre" />}/>
                :
                null
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
            