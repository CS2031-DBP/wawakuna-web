import PostForm from "../basic/PostForm";
import UploadFile from "../upload/UploadFile";
import { Divider } from "@mui/material";

const CreateHijoForm = () => {
    const data = ['nombre', 'apellido'];
    const type = ['string', 'string'];
    const path = "/hijo"
    const text = 'Hijo'
    return(
        <div className="w-full flex flex-col items-center">
            <span className="w-full text-center">{text}</span>
            <PostForm data = {data} path = {path} type = {type} text = {text}/>
            <Divider component="div" className="w-full" variant="middle" textAlign="center">or</Divider>
            <UploadFile path = {path} text = {text}/>
        </div>
    )
}

export default CreateHijoForm