import ResponsiveAppBar from "../components/NavBar"
import CreateHijoForm from "../components/create/CreateHijoForm"
import CreatePadreForm from "../components/create/CreatePadreForm"

const Dashboard = () => {
    return(
        <div>
            <ResponsiveAppBar/>
            <div className="flex flex-col items-center w-full p-5">
                <div className="w-1/2">
                    <CreatePadreForm/>
                </div>
            </div>
        </div>

    )
}

export default Dashboard