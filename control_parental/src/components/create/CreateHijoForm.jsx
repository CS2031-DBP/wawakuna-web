import CreateForm from "../base/CreateForm";

  
const CreateHijoForm = () => {
    const data = ['nombre', 'apellido', 'email'];
    
    return(
        <div>
            <span>Hijo</span>
            <CreateForm data = {data}/>
        </div>
    )
}

export default CreateHijoForm