import { useParams } from "react-router-dom";
import ProfesorList from "../components/list/ProfesorList";
import HijoList from "../components/list/HijoList";
import Table from "../components/table/Table";
import TableHijo from "../components/table/TableHijo";
import TableProfesor from "../components/table/TableProfesor";
import CreateProfesorForm from "../components/create/CreateProfesorForm";
import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../utils/Utils";
import { getToken } from "../utils/Utils";

const SalonDetail = () => {
    const { id } = useParams();
    /*const [loading, setLoading] = useState(true)
    const [hijos, setHijos] = useState([])
    const [profesores, setProfesores] = useState([])
    
    useEffect(() => {
        axios({
            method: 'get',
            url: API_URL + `/salon/${id}`,
            headers: {
                Authorization: `Bearer ${getToken()}`
            }
        })
        .then(response => {
            setHijos(response.data.hijos)
            setProfesores(response.data.profesores)
            setLoading(false);
        })
        .catch(error => {
            console.error(error)
        })
    },[])*/

    return(
        <div>
            {
                <>
                    <h1>Salon 1</h1>
                    <div className="flex flex-row space-y-5">
                        <div className="flex flex-col space-y-5 w-1/2 p-5">
                            <TableProfesor pathGet = {`/salon/${id}/profesor`} pathDelete = {`/salon/${id}/quitarProfesor`}/>
                        </div>
                    </div>    
                </>
            }
        </div>
    )
}

export default SalonDetail

//WARNING: checkear que el id sea int