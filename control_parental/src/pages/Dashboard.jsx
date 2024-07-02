import ResponsiveDrawer from "../components/LeftBar"
import ResponsiveAppBar from "../components/NavBar"
import TransitionsSnackbar from "../components/alert/SuccessAlert"
import AllHijo from "../components/all/AllHijo"
import AllPadre from "../components/all/AllPadre"
import AllProfesor from "../components/all/AllProfesor"
import CreateHijoForm from "../components/create/CreateHijoForm"
import CreatePadreForm from "../components/create/CreatePadreForm"
import InteractiveList from "../components/list/List"
import SalonList from "../components/list/SalonList"

const Dashboard = () => {
    
    return(
        <div className="w-2/3 items-center flex flex-col space-y-4">
            <div className="w-full">
                <SalonList/>
            </div>
            <div>
                <AllProfesor/>
            </div>
            <div>
                <AllPadre/>
            </div>
        </div>

    )
}

export default Dashboard