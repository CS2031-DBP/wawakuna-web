import { useEffect, useState } from "react"
import SalonCard from "../card/SalonCard"

const SalonList = (props) => {
    const [salones, setSalones] = useState([])
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setSalones([{name: "Salon 1", id: 1}, {name: "Salon 2", id: 2}])
        setLoading(false);
    },[])
    return(
        <div>
            {
                loading ?
                <h1>Loading</h1>
                :
                salones.map((value, key) => {
                    return <SalonCard salon = {value}/>
                })
            }
        </div>
    )
}

export default SalonList