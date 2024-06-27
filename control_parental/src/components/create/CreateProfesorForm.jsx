import PostForm from "../basic/PostForm";

  
const CreateProfesorForm = () => {
    const data = ['nombre', 'apellido', 'email', 'password'];
    const path = '/profesor'
    const type = ['string', 'string', 'string', 'string'];
    const text = 'Profesor'
    return(
        <div className="w-full flex flex-col items-center">
            <span className="w-full text-center">{text}</span>
            <PostForm data = {data} path = {path} type = {type} text = {text}/>
            <UploadFile path = {path} text = {text}/>
        </div>
    )
}

export default CreateProfesorForm