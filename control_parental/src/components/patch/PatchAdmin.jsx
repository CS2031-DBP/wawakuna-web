import { Divider } from "@mui/material";
import PatchForm from "../basic/PatchForm";


const PatchAdmin = () => {
    const data = ['password'];
    const type = ['string'];
    const path = `/admin/password?password=`
    const text = 'Cambiar Contraseña'
    return (
        <div className="w-full flex flex-col items-center">
            <span className="w-full text-center">{text}</span>
            <PatchForm data = {data} path = {path} type = {type} text = {text}/>
        </div>
    )
}


export default PatchAdmin