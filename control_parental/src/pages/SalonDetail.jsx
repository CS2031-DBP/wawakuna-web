import { useParams } from "react-router-dom";
import ProfesorList from "../components/list/ProfesorList";
import HijoList from "../components/list/HijoList";

const SalonDetail = () => {
    const { id } = useParams();
    return(
        <div>
            <h1>Salon 1</h1>
            <div className="flex flex-row space-x-5">
                <ProfesorList/>
                <HijoList/>
            </div>
            
        </div>
    )
}

export default SalonDetail

//WARNING: checkear que el id sea int