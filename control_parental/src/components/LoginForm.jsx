import { useState } from "react";

import { FormControl, InputLabel, Input, InputAdornment, IconButton } from "@mui/material"
import { VisibilityOff, Visibility } from "@mui/icons-material"

const LoginForm = () => {
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    })

    const handleChange = (name, value) => {
        setLoginData({
            ...loginData,
            [name]: value
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
        </div>
    )
}

export default LoginForm