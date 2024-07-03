import Add from "./Add"


const AddProfesor = (props) => {
    
    return(
        <Add salonId = {props.id} text = "Profesor" path = "/profesor"/>
    )
}

export default AddProfesor