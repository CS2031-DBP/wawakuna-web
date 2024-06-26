import PostForm from "../basic/PostForm";

const CreateHijoForm = () => {
    const data = ['nombre', 'apellido', 'email'];
    const path = "/hijo"
    return(
        <div className="w-full flex flex-col items-center">
            <span className="w-full text-center">Hijo</span>
            <PostForm data = {data} path = {path}/>
        </div>
    )
}

export default CreateHijoForm