import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { initializeState } from "../../utils/Utils";

  
const CreateForm = (props) => {
    const data = props.data
    const [formData, setFormData] = useState(initializeState(data));
    
    const onClick = () =>{
        console.log(formData)
    }

    const handleChange = (name, value) => {
        setFormData({
            ...formData,
            [name]: value
        })
    }

    return(
        <div className="flex flex-col justify-center space-y-2 w-1/2">
            {
                data.map((data_name, key) => (
                <TextField 
                    key = {`${key}`}
                    label = {data_name}
                    onChange = {(text) => handleChange(data_name,text.target.value)}/>
                ))
            }
            <Button onClick={onClick}>show</Button>
        </div>
    )
}

export default CreateForm