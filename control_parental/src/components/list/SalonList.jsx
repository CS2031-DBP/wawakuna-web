import { useEffect, useState } from "react"
import SalonCard from "../card/SalonCard"
import axios from "axios";
import { API_URL, getToken } from "../../utils/Utils";
import { Divider } from "@mui/material";

const SalonList = (props) => {
    const [salones, setSalones] = useState([])
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios({
            method: 'get',
            url: API_URL + '/salon/all',
            headers: {
                Authorization: `Bearer ${getToken()}`
            },
            params:{
                page: 0,
                size: 100
            }
        })
        .then(response => {
            setSalones(response.data)
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
                    return <div key={key} className="w-full">
                        <SalonCard salon = {salon}/>
                        <Divider component="div" className="w-full" variant="middle" textAlign="center"/>
                        </div>
                })
            }
        </div>
    )
}

export default SalonList