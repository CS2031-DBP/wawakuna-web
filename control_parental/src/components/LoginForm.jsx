import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { FormControl, InputLabel, Input, InputAdornment, IconButton, Button } from "@mui/material"
import { VisibilityOff, Visibility } from "@mui/icons-material"
import axios from "axios";
import { API_URL } from "../utils/Utils";



const LoginForm = () => {
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    })
    const navigate = useNavigate()

    const handleChange = (name, value) => {
        setLoginData({
            ...loginData,
            [name]: value
        })
    }

    const onClick = () => {
        axios({
            method: 'post',
            url: API_URL + "/auth/login",
            data: loginData
        })
        .then(response => {
            localStorage.setItem('token',response.data.token); //Checkeen que response.data.token es correcto
            navigate("/dashboard")
        })
        .catch(error => {
            console.error(error);
        })
    }

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return(
        <div className="flex-col flex w-1/2 space-y-4 p-4">
            <FormControl variant="standard">
                <InputLabel htmlFor="component-simple">Email</InputLabel>
                <Input id="component-simple" value={loginData.email} onChange={(text) => handleChange("email", text.target.value)}/>
            </FormControl>
            <FormControl variant="standard">    
                <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                <Input
                    id="standard-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                    }
                    value={loginData.password} onChange={(text) => handleChange("password", text.target.value)}
                />
            </FormControl>
            <Button onClick={onClick}>Log In</Button>
        </div>
    )
}

export default LoginForm