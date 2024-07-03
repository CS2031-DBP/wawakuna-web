import { useParams } from "react-router-dom";
import TableProfesor from "../components/table/TableProfesor";
import Add from "../components/add/Add"
import AddProfesor from "../components/add/AddProfesor";
import AddHijo from "../components/add/AddHijo";
import TableHijo from "../components/table/TableHijo";
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
                    <div className="flex flex-col space-y-5">
                        <div>
                            <TableProfesor pathGet = {`/profesor/salon/${id}`} pathDelete = {`/salon/${id}/quitarProfesor`} method="patch"/>
                        </div>
                        <div>
                            <AddProfesor id = {id}/>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-5">
                        <div>
                            <TableHijo pathGet = {`/hijo/salon/${id}`} pathDelete = {`/salon/${id}/quitarHijo`} method="patch"/>
                        </div>
                        <div>
                            <AddHijo id = {id}/>
                        </div>
                    </div>
                        
                </>
            }
        </div>
    )
}

export default SalonDetail

//WARNING: checkear que el id sea int