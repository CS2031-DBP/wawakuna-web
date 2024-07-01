import ResponsiveAppBar from "../components/NavBar"
import TransitionsSnackbar from "../components/alert/SuccessAlert"
import CreateHijoForm from "../components/create/CreateHijoForm"
import CreatePadreForm from "../components/create/CreatePadreForm"
import InteractiveList from "../components/list/List"
import SalonList from "../components/list/SalonList"

const Dashboard = () => {
    
    return(
        <div className="w-1/2">
            <SalonList/>
        </div>

    )
}

export default Dashboard