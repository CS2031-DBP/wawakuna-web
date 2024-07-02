import { useEffect, useState } from "react"
import StandartCard from "../card/StandartCard";
import CreateHijoForm from "../create/CreateHijoForm";

const HijoList = (props) => {
    const [hijos, setHijos] = useState([])
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setHijos([{name: "Hijo 1", id: 1}, {name: "Hijo 2", id: 2}])
        setLoading(false);
    },[])
    return(
        <div>
            {
                loading ?
                <h1>Loading</h1>
                :
                hijos.map((value, key) => {
                    return <StandartCard standart = {value} path = "/hijo"/>
                })
            }
            <CreateHijoForm/>
        </div>
    )
}

export default HijoList

//anhadir boton de new Hijo