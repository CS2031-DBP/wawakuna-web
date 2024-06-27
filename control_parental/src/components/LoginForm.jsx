import { useState } from "react";
import { FormControl, InputLabel, Input, InputAdornment, IconButton, Button } from "@mui/material";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import teacher_students from '../assets/teacher_students.jpg';

import logo from '../assets/logo_slogan.png'
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../utils/Utils";



const LoginForm = () => {
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    });
    const navigate = useNavigate("/dashboard")
    const [showPassword, setShowPassword] = useState(false);


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

   
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleLogin = () => {
        // Handle login logic here
        console.log('Login data:', loginData);
    };
    
    return (
        <div className="flex min-h-screen bg-gray-100">
            <div className="hidden lg:flex items-center justify-center w-3/5 bg-purple-100">
                <img src={teacher_students} alt="Login Illustration" className="object-cover w-full h-full" />
            </div>
            <div className="flex items-center justify-center w-full lg:w-2/5 bg-white p-4"> 
                <div className="w-full max-w-xs">
                    <div>
                    <img src={logo} alt="Logo" className="max-w-48 mx-auto mb-6" />
                    </div> 
                    <h1 className="text-3xl font-bold mb-6 text-center text-[#333333]">Iniciar Seción</h1> 
                    <div className="space-y-3"> 
                        <FormControl fullWidth variant="standard">
                            <InputLabel htmlFor="email">Email</InputLabel>
                            <Input
                                id="email"
                                value={loginData.email}
                                onChange={(e) => handleChange("email", e.target.value)}
                            />
                        </FormControl>
                        <FormControl fullWidth variant="standard">
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <Input
                                id="password"
                                type={showPassword ? 'text' : 'password'}
                                value={loginData.password}
                                onChange={(e) => handleChange("password", e.target.value)}
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
                            />
                        </FormControl>
                        <div className="mt-3">
                            <button
                                className="w-full py-2 px-4 bg-[#7F265B] hover:bg-[#D9B3C4] text-white font-semibold rounded"
                                onClick={onClick}
                            >
                                Iniciar Sesión
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
