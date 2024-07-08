import ResponsiveAppBar from "../components/NavBar"
import CreateHijoForm from "../components/create/CreateHijoForm"
import CreatePadreForm from "../components/create/CreatePadreForm"
import CreateProfesorForm from "../components/create/CreateProfesorForm"
import CreateSalonForm from "../components/create/CreateSalonForm"
import Create from "../components/create/Create"
import { Routes, Route } from "react-router-dom"

const Prueba = () => {
    return (
        <Routes>
            <Route path = "/" element ={<Create/>}/>
            <Route path = "/padre" element ={<CreatePadreForm/>}/>
            <Route path = "/hijo" element ={<CreateHijoForm/>}/>
            <Route path = "/profesor" element = {<CreateProfesorForm/>}/>
            <Route path = "/salon" element = {<CreateSalonForm/>}/>
            <Route path = "/password" element = {<PatchAdmin/>}/>
        </Routes>
    )
}

export default Prueba