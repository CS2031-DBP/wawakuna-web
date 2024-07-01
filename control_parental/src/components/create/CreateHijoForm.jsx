import PostForm from "../basic/PostForm";
import UploadFile from "../upload/UploadFile";

const CreateHijoForm = () => {
    const data = ['nombre', 'apellido', 'email'];
    const type = ['string', 'string', 'string'];
    const path = "/hijo"
    const text = 'Hijo'
    return(
        <div className="w-full flex flex-col items-center">
            <span className="w-full text-center">{text}</span>
            <PostForm data = {data} path = {path} type = {type} text = {text}/>
            <UploadFile path = {path} text = {text}/>
        </div>
    )
}

export default CreateHijoForm