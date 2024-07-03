import { Autocomplete, Button, TextField } from "@mui/material"
import { useEffect, useState } from "react"
import { API_URL, getToken } from "../../utils/Utils"
import axios from "axios"

function createData(label, id){
    return {label, id}
}

const Add = (props) => {
    const {salonId, text,path} = props
    const [id, setId] = useState(null)
    const [rows, setRows] = useState([])
    const onClick = () => {
        axios({
            method: 'patch',
            url: API_URL + `/salon/${salonId}${path}/${id}`,
            headers: {
                Authorization: `Bearer ${getToken()}`
            }
        })
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.error(error)
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
        <div className="flex flex-row w-full">
            <Button onClick={onClick}>Añadir {text}</Button>
            <Autocomplete
                disablePortal
                className="w-full"
                onChange={(event,value) => {setId(value.id)}}
                options = {rows}
                isOptionEqualToValue={(option, value) => option.id === value?.id}
                renderInput={(params) => <TextField {...params} label={text} />}
            />
        </div>
    )
}

export default Add

//WARNING q hace el isOptionEqualToValue