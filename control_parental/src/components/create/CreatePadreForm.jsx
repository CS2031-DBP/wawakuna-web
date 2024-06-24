import CreateForm from "../base/CreateForm";

  
const CreatePadreForm = () => {
    const data = ['nombre', 'apellido', 'email', 'phoneNumber', 'password'];
    
    
    return(
        <div>
            <span>Padre</span>
            <CreateForm data = {data}/>
        </div>
    )
}

export default CreatePadreForm