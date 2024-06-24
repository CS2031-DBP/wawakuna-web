import CreateForm from "../base/CreateForm";

  
const CreateProfesorForm = () => {
    const data = ['nombre', 'apellido', 'email', 'password', 'michael'];
    
    
    return(
        <div>
            <span>Profesor</span>
            <CreateForm data = {data}/>
        </div>
    )
}

export default CreateProfesorForm