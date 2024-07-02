import { useEffect, useState } from "react"
import SalonCard from "../card/SalonCard"
import axios from "axios";
import { API_URL, getToken } from "../../utils/Utils";

const SalonList = (props) => {
    const [salones, setSalones] = useState([])
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios({
            method: 'get',
            url: API_URL + '/salon/1',
            headers: {
                Authorization: `Bearer ${getToken()}`
            }
        })
        .then(response => {
            setSalones([response.data])
            console.log(response.data)
            setLoading(false);
        })
        .catch(error => {
            console.error(error)
        })
    },[])
    return(
        <div>
            {
                loading ?
                <h1>Loading</h1>
                :
                salones.map((salon, key) => {
                    return <SalonCard salon = {salon}/>
                })
            }
        </div>
    )
}

export default SalonList