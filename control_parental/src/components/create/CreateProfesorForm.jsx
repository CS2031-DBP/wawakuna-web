import PostForm from "../basic/PostForm";

  
const CreateProfesorForm = () => {
    const data = ['nombre', 'apellido', 'email', 'password'];
    
    return(
        <div>
            <span>Profesor</span>
            <PostForm data = {data}/>
        </div>
    )
}

export default CreateProfesorForm