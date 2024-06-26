import PostForm from "../basic/PostForm";

  
const CreateProfesorForm = () => {
    const data = ['nombre', 'apellido', 'email', 'password'];
    const path = '/profesor'
    return(
        <div>
            <span>Profesor</span>
            <PostForm data = {data} path = {path}/>
        </div>
    )
}

export default CreateProfesorForm