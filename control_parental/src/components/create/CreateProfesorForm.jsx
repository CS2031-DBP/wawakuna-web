import PostForm from "../basic/PostForm";
import UploadFile from "../upload/UploadFile";
  
const CreateProfesorForm = (props) => {
    const data = ['nombre', 'apellido', 'email'];
    const path = '/profesor'
    const type = ['string', 'string', 'string'];
    const text = 'Profesor'
    const {salonId} = props
    return(
        <div className="w-full flex flex-col items-center">
            <span className="w-full text-center">{text}</span>
            <PostForm data = {data} path = {path} type = {type} text = {text} salonId = {salonId}/>
            <UploadFile path = {path} text = {text}/>
        </div>
    )
}

export default CreateProfesorForm