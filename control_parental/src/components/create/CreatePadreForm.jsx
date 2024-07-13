import PostForm from "../basic/PostForm";
import UploadFile from "../upload/UploadFile";
  
const CreatePadreForm = () => {
    const data = ['nombre', 'apellido', 'email', 'phoneNumber'];
    const type = ['string', 'string', 'string', 'string'];
    const path = '/padre'
    const text = 'Padre'
    return(
        <div className="w-full flex flex-col items-center">
            <span className="w-full text-center">{text}</span>
            <PostForm data = {data} path = {path} type = {type} text = {text}/>
        </div>
    )
}

export default CreatePadreForm