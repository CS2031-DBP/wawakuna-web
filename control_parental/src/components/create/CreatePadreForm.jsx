import PostForm from "../basic/PostForm";
  
const CreatePadreForm = () => {
    const data = ['nombre', 'apellido', 'email', 'phoneNumber', 'password'];
    
    return(
        <div>
            <span>Padre</span>
            <PostForm data = {data}/>
        </div>
    )
}

export default CreatePadreForm