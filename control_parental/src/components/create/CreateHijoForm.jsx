import PostForm from "../basic/PostForm";

const CreateHijoForm = () => {
    const data = ['nombre', 'apellido', 'email'];
    
    return(
        <div>
            <span>Hijo</span>
            <PostForm data = {data}/>
        </div>
    )
}

export default CreateHijoForm