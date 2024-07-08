import { Autocomplete, Button, TextField } from "@mui/material"
import { useEffect, useState } from "react"
import { API_URL, getToken } from "../../utils/Utils"
import axios from "axios"
import InfoAlert from "../alert/InfoAlert"
import ErrorAlert from "../alert/ErrorAlert"

function createData(label, id){
    return {label, id}
}

const Add = (props) => {
    const {salonId, text,path} = props
    const [id, setId] = useState(null)
    const [rows, setRows] = useState([])
    const [infoAlert, setInfoAlert] = useState(false)
    const [errorAlert, setErrorAlert] = useState(false)
    const onClick = () => {
        setInfoAlert(false)
        setErrorAlert(false)
        axios({
            method: 'patch',
            url: API_URL + `/salon/${salonId}${path}/${id}`,
            headers: {
                Authorization: `Bearer ${getToken()}`
            }
        })
        .then(response => {
            setInfoAlert(true)
            setTimeout(() => window.location.reload(), 2000)
        })
        .catch(error => {
            console.error(error)
            setErrorAlert(true)
        })
    }

    useEffect(() => {
        axios({
            method: 'get',
            url: API_URL + `${path}/all`,
            headers: {
                Authorization: `Bearer ${getToken()}`
            },
            params:{
                page:0,
                size: 1000000
            }
        })
        .then(response => {
            let rows_ = []
            response.data.map((row) => {rows_.push(createData(row.nombre+" "+row.apellido, row.id))})
            setRows(rows_)
        })
        .catch(error => {
            console.error(error)
        })
    },[])

    return(
        <div className="flex flex-row flex-grow w-full">
            <Autocomplete
                disablePortal
                className="w-2/3"
                onChange={(event,value) => {setId(value.id)}}
                options = {rows}
                isOptionEqualToValue={(option, value) => option.id === value?.id}
                renderInput={(params) => <TextField {...params} label={text} />}
            />
            <Button className="w-1/3" onClick={onClick}>Añadir {text}</Button>
            {
                infoAlert?
                <InfoAlert text = {text}/>
                :
                null
            }
            {
                errorAlert?
                <ErrorAlert/>
                :
                null
            }
        </div>
    )
}

export default Add

//Error q hace el isOptionEqualToValue