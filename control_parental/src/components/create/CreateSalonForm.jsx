import PostForm from "../basic/PostForm";
  
const CreateSalonForm = () => {
    const data = ['nombre'];
    const type = ['string'];
    const path = '/salon'
    const text = 'Salon'
    return(
        <div className="w-full flex flex-col items-center">
            <span className="w-full text-center">{text}</span>
            <PostForm data = {data} path = {path} type = {type} text = {text}/>
        </div>
    )
}

export default CreateSalonForm