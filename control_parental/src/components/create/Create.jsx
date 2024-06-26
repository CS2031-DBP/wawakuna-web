import { Button } from "@mui/material";
import PostForm from "../basic/PostForm";
import { useNavigate } from "react-router-dom";
import UploadFile from "../upload/UploadFile";

const Create = () => {
    const navigate = useNavigate()
    return(
        <div>
            <span>Crear un nuevo hijo</span>
            <div className="flex flex-col">
                <Button onClick={() => navigate("/create/padre")}>Crear un nuevo Padre</Button>
                <Button onClick={() => navigate("/create/hijo")}>Crear un nuevo Hijo</Button>
                <Button onClick={() => navigate("/create/salon")}>Crear un nuevo Salon</Button>
                <Button onClick={() => navigate("/create/profesor")}>Crear un nuevo Profesor</Button>
            </div>
            <div>
                <UploadFile/>
            </div>
        </div>
    )
}

export default Create