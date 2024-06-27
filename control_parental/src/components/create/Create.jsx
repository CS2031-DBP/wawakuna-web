import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Create = () => {
    const navigate = useNavigate()
    return(
        <div>
            <span>Crear</span>
            <div className="flex flex-col">
                <Button onClick={() => navigate("/create/padre")}>Crear un nuevo Padre</Button>
                <Button onClick={() => navigate("/create/hijo")}>Crear un nuevo Hijo</Button>
                <Button onClick={() => navigate("/create/salon")}>Crear un nuevo Salon</Button>
                <Button onClick={() => navigate("/create/profesor")}>Crear un nuevo Profesor</Button>
            </div>
        </div>
    )
}

export default Create