import { useEffect, useState } from "react"
import StandartCard from "../card/StandartCard";
import CreateProfesorForm from "../create/CreateProfesorForm";

const ProfesorList = (props) => {
    const [profesores, setProfesores] = useState([])
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setProfesores([{name: "Profesor 1", id: 1}, {name: "Profesor 2", id: 2}])
        setLoading(false);
    },[])
    return(
        <div>
            {
                loading ?
                <h1>Loading</h1>
                :
                profesores.map((value, key) => {
                    return <StandartCard standart = {value} path = "/profesor"/>
                })
            }
            <CreateProfesorForm/>
        </div>
    )
}

export default ProfesorList

//anhadir boton de new profesor