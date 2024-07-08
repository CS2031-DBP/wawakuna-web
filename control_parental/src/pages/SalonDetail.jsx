import { useParams } from "react-router-dom";
import TableProfesor from "../components/table/TableProfesor";
import AddProfesor from "../components/add/AddProfesor";
import AddHijo from "../components/add/AddHijo";
import TableHijo from "../components/table/TableHijo";
import Sidebar from "../components/SideBar";

const SalonDetail = () => {
    const { id, name } = useParams();
    return (
        <div className="flex h-screen">
            <Sidebar />
            <div className="flex-grow p-10">
                <h1 className="text-xl mb-6 font-medium">{name.replaceAll('-', ' ')}</h1>
                <div className="flex flex-col space-y-5 w-full">
                    <div className="flex flex-col space-y-5 w-full">
                        <AddProfesor id={id} />
                        <TableProfesor pathGet={`/profesor/salon/${id}`} pathDelete={`/salon/${id}/quitarProfesor`} method="patch" />
                    </div>
                    <div className="flex flex-col space-y-5 w-full">
                        <AddHijo id={id} />
                        <TableHijo pathGet={`/hijo/salon/${id}`} pathDelete={`/salon/${id}/quitarHijo`} method="patch" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SalonDetail;
