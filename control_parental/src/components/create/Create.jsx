import { Button } from "@mui/material";
import PostForm from "../basic/PostForm";
import { useNavigate } from "react-router-dom";

const Create = () => {
    const navigate = useNavigate()
    return(
        <div>
            <span>Crear un nuevo hijo</span>
            <Button onClick={() => navigate("/create/padre")}>Crear un nuevo Padre</Button>
            <Button onClick={() => navigate("/create/hijo")}>Crear un nuevo Hijo</Button>
            <Button onClick={() => navigate("/create/salon")}>Crear un nuevo Salon</Button>
            <Button onClick={() => navigate("/create/profesor")}>Crear un nuevo Profesor</Button>
            
        </div>
    )
}

export default Create